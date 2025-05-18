import { AppDataSource } from "../config/data-source";
import { ProductoCompuesto } from "../entities/ProductoCompuesto";
import { ProductoIndividual } from "../entities/ProductoIndividual";
import { ProductoCompuestoDetalle } from "../entities/ProductoCompuestoDetalle";
import {
  CreateProductoCompuestoDTO,
  UpdateProductoCompuestoDetalleUpdateDTO,
  UpdateProductoCompuestoDTO,
} from "../dtos/productoCompuesto.dto";
import {
  validatePercentages,
  validatePercentagesUpdate,
} from "../utils/validatePercentages";
import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";

export class ProductoCompuestoService {
  private compuestoRepo = AppDataSource.getRepository(ProductoCompuesto);
  private detalleRepo = AppDataSource.getRepository(ProductoCompuestoDetalle);
  private individualRepo = AppDataSource.getRepository(ProductoIndividual);

  async create(data: CreateProductoCompuestoDTO) {
    if (!validatePercentages(data.subproductos)) {
      throw new BadRequestError("Los porcentajes deben sumar 100%");
    }

    const producto = new ProductoCompuesto();
    producto.nombre = data.nombre;

    producto.detalles = [];

    for (const sub of data.subproductos) {
      const individual = await this.individualRepo.findOneBy({
        id: sub.producto_individual_id,
      });
      if (!individual) {
        throw new NotFoundError(
          "No existe un producto individual asociado con ID " +
            sub.producto_individual_id
        );
      }
      const detalle = new ProductoCompuestoDetalle();
      detalle.producto_individual = individual;
      detalle.porcentaje_contribucion = sub.porcentaje_contribucion;
      detalle.producto_compuesto = producto;
      producto.detalles.push(detalle);
    }
    await this.compuestoRepo.save(producto);
    return await this.compuestoRepo.findOne({
      where: { id: producto.id },
      relations: ["detalles"],
    });
  }

  async obtenerTodosLosProductosCompuestos() {
    return this.compuestoRepo.find({
      relations: {
        detalles: {
          producto_individual: true,
        },
      },
    });
  }

  async obtenerPorId(id: number) {
    const product = await this.compuestoRepo.findOne({
      where: { id },
      relations: {
        detalles: {
          producto_individual: true,
        },
      },
    });
    if (!product) {
      throw new NotFoundError(
        `${ProductoCompuesto.name} con id ${id} not found.`
      );
    }
    return product;
  }

  async eliminar(id: number) {
    const deleted = await this.compuestoRepo.delete({ id });
    if (deleted.affected === 0) {
      throw new NotFoundError(
        `${ProductoCompuesto.name} con id ${id} not found.`
      );
    }
    return { eliminado: true };
  }

  async actualizarProductoCompuesto(
    id: number,
    subproductos: UpdateProductoCompuestoDTO
  ): Promise<ProductoCompuesto> {
    if (!validatePercentagesUpdate(subproductos)) {
      throw new BadRequestError("Los porcentajes deben sumar 100%");
    }
    const compuesto = await this.compuestoRepo.findOne({
      where: { id },
      relations: ["detalles"],
    });

    if (!compuesto) throw new NotFoundError("Producto compuesto no encontrado");

    const detalles: ProductoCompuestoDetalle[] = [];

    for (const input of subproductos) {
      const productoIndividual = await this.individualRepo.findOne({
        where: { id: input.producto_individual_id },
      });

      if (!productoIndividual) {
        throw new NotFoundError(
          `Producto individual ${input.producto_individual_id} no encontrado`
        );
      }

      const detalle = new ProductoCompuestoDetalle();
      detalle.producto_individual = productoIndividual;
      detalle.producto_compuesto = compuesto;
      detalle.porcentaje_contribucion = input.porcentaje_contribucion;
      detalles.push(detalle);
    }

    // Replace the current detalles with the new ones
    compuesto.detalles = detalles;

    await this.compuestoRepo.save(compuesto);
    return await this.compuestoRepo.findOne({
      where: { id },
      relations: ["detalles"],
    });
  }
}
