import { Request, Response, NextFunction } from "express";
import { ProductoCompuestoService } from "../services/productoCompuesto.service";

export class ProductoCompuestoController {
  private service = new ProductoCompuestoService();

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  async listarProductosCompuestos(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const productos = await this.service.obtenerTodosLosProductosCompuestos();
      res.json(productos);
    } catch (error) {
      next(error);
    }
  }

    async obtenerProductoCompuesto(
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
      const producto = await this.service.actualizarProductoCompuesto(id, req.body.subproductos);
      res.status(200).json(producto);
    } catch (error) {
      next(error);
    }
  }

   async eliminarProductoCompuesto(
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
