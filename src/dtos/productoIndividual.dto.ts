// validations/productoIndividual.validation.ts
// import { body, ContextRunner } from "express-validator";

// export const createProductoIndividualValidation :ContextRunner[]= [
//   body("nombre")
//     .notEmpty().withMessage("El nombre es obligatorio")
//     .isString().withMessage("El nombre debe ser una cadena"),
  
//   body("descripcion")
//     .optional()
//     .isString().withMessage("La descripción debe ser una cadena"),
// ];


import { body } from 'express-validator';

export const createProductoIndividualValidation = [
  body('nombre').isString().notEmpty(),
  body('descripcion').optional().isString(),
];

export const updatedProductoIndividualValidation = [
  body('nombre').isString(),
  body('descripcion').isString().optional(),
];
