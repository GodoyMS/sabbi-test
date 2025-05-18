

import { body } from 'express-validator';

export const createProductoIndividualValidation = [
  body('nombre').isString().notEmpty(),
  body('descripcion').optional().isString(),
];

export const updatedProductoIndividualValidation = [
  body('nombre').isString(),
  body('descripcion').isString().optional(),
];
