import { NextFunction, Request, Response, Router } from "express";
import { ProductoIndividualController } from "../controllers/productoIndividual.controller";
import {
  createProductoIndividualValidation,
  updatedProductoIndividualValidation,
} from "../dtos/productoIndividual.dto";
import { validateRequest } from "../middlewares/validateRequest.middleware";

const router = Router();
const controller = new ProductoIndividualController();


/**
 * @swagger
 * /productos-individuales:
 *   get:
 *     summary: Obtener todos los productos
 *     tags:
 *       - Productos Individuales
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get("/", controller.listarProductosIndividuales.bind(controller));

/**
 * @swagger
 * /productos-individuales/{id}:
 *   get:
 *     summary: Obtener un producto individual por ID
 *     tags:
 *       - Productos Individuales
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto individual
 *     responses:
 *       200:
 *         description: Detalles del producto individual
 *       404:
 *         description: Producto no encontrado
 */
router.get("/:id", controller.obtenerProductoIndividual.bind(controller));


/**
 * @swagger
 * /productos-individuales/{id}:
 *   delete:
 *     summary: Eliminar un producto individual por ID
 *     tags:
 *       - Productos Individuales
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto individual
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *       404:
 *         description: Producto no encontrado o asociado a un producto compuesto
 */
router.delete("/:id", controller.eliminarProductoIndividual.bind(controller));


/**
 * @swagger
 * /productos-individuales:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags:
 *       - Productos Individuales
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - descripcion
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *              
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 */
router.post(
  "/",
  createProductoIndividualValidation,
  validateRequest,
  controller.crearProductoIndividual.bind(controller)
);

/**
 * @swagger
 * /productos-individuales/{id}:
 *   put:
 *     summary: Actualizar un producto individual por ID
 *     tags:
 *       - Productos Individuales
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto individual
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 *       404:
 *         description: Producto no encontrado
 */
router.put(
  "/:id",
  updatedProductoIndividualValidation,
  validateRequest,
  controller.actualizarProductoIndividual.bind(controller)
);

export default router;
