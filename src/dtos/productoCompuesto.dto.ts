import { body } from "express-validator";

export const createProductoCompuestoDTOValidation = [
  body("nombre").isString().notEmpty(),
  body("subproductos")
    .isArray({ min: 1 })
    .withMessage("Al menos un subproducto debe estar presente"),
];

export const updateProductoCompuestoDTOValidation = [
  body("subproductos")
    .isArray({ min: 1 })
    .withMessage("Al menos un subproducto debe estar presente"),
];

export interface CreateProductoCompuestoDTO {
  nombre: string;
  subproductos: SubproductoDTO[];
}
export interface SubproductoDTO {
  producto_individual_id: number;
  porcentaje_contribucion: number;
}

export interface UpdateProductoCompuestoDetalleUpdateDTO {
  producto_individual_id: number;
  porcentaje_contribucion: number;
}
export type  UpdateProductoCompuestoDTO = UpdateProductoCompuestoDetalleUpdateDTO[];