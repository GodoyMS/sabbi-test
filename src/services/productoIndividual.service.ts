import { AppDataSource } from "../config/data-source";
import { ProductoCompuesto } from "../entities/ProductoCompuesto";
import { ProductoCompuestoDetalle } from "../entities/ProductoCompuestoDetalle";
import { ProductoIndividual } from "../entities/ProductoIndividual";
import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";

export class ProductoIndividualService {
  private repo = AppDataSource.getRepository(ProductoIndividual);
  private compuestorDetalleRepo = AppDataSource.getRepository(
    ProductoCompuestoDetalle
  );

  async crear(nombre: string, descripcion?: string) {
    const nuevo = this.repo.create({ nombre, descripcion });
    return await this.repo.save(nuevo);
  }

  async listarTodos() {
    return await this.repo.find();
  }

  async obtenerPorId(id: number) {
    const product = await this.repo.findOneBy({ id });
    if (!product) {
      throw new NotFoundError(
        `${ProductoIndividual.name} con id ${id} not found.`
      );
    }
    return product;
  }

  async actualizar(id: number, data: Partial<ProductoIndividual>) {
    await this.repo.update({ id }, data);
    return await this.obtenerPorId(id);
  }

  async eliminar(id: number) {
    const existingProductoIndividual = await this.repo.findOneBy({ id });
    if (!existingProductoIndividual) {
      throw new NotFoundError("No existe este producto individual");
    }
    const exisitingProductoCompuestoRelation =
      await this.compuestorDetalleRepo.findOneBy({
    producto_individual: { id: existingProductoIndividual.id },
      });
    if (exisitingProductoCompuestoRelation) {
      throw new BadRequestError(
        "Este producto individual es parte de un producto compuesto"
      );
    } else {
      const deleted = await this.repo.delete({ id });
      if (deleted.affected === 0) {
        throw new NotFoundError(
          `${ProductoIndividual.name} con id ${id} not found.`
        );
      }
      return { eliminado: true };
    }
  }
}
