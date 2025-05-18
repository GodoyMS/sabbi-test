import { NextFunction, Request, Response } from "express";
import { ProductoIndividualService } from "../services/productoIndividual.service";

export class ProductoIndividualController {
  private service = new ProductoIndividualService();

  async crearProductoIndividual(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { nombre, descripcion } = req.body;
      const producto = await this.service.crear(nombre, descripcion);
      res.status(201).json(producto); // no return here
    } catch (error) {
      next(error);
    }
  }

  async listarProductosIndividuales(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const productos = await this.service.listarTodos();
      res.json(productos);
    } catch (error) {
      next(error);
    }
  }

  async obtenerProductoIndividual(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = parseInt(req.params.id);
      const producto = await this.service.obtenerPorId(id);
      res.json(producto);
    } catch (error) {
      next(error);
    }
  }

  async actualizarProductoIndividual(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = parseInt(req.params.id);
      const producto = await this.service.actualizar(id, req.body);
      res.json(producto);
    } catch (error) {
      next(error);
    }
  }

  async eliminarProductoIndividual(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = parseInt(req.params.id);
      const result = await this.service.eliminar(id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
