import { Router } from "express";
import { ProductoCompuestoController } from "../controllers/productoCompuesto.controller";
import { validateRequest } from "../middlewares/validateRequest.middleware";
import {
  createProductoCompuestoDTOValidation,
  updateProductoCompuestoDTOValidation,
} from "../dtos/productoCompuesto.dto";

const router = Router();
const controller = new ProductoCompuestoController();

/**
 * @swagger
 * /productos-compuestos:
 *   get:
 *     summary: Listar todos los productos compuestos
 *     tags:
 *       - Productos Compuestos
 *     responses:
 *       200:
 *         description: Lista de productos compuestos
 */
router.get("/", controller.listarProductosCompuestos.bind(controller));

/**
 * @swagger
 * /productos-compuestos:
 *   post:
 *     summary: Crear un nuevo producto compuesto
 *     tags:
 *       - Productos Compuestos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - subproductos
 *             properties:
 *               nombre:
 *                 type: string
 *               subproductos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - producto_individual_id
 *                     - porcentaje_contribucion
 *                   properties:
 *                     producto_individual_id:
 *                       type: integer
 *                     porcentaje_contribucion:
 *                       type: number
 *                       format: float
 *     responses:
 *       201:
 *         description: Producto compuesto creado exitosamente
 */
router.post(
  "/",
  createProductoCompuestoDTOValidation,
  validateRequest,
  controller.create.bind(controller)
);


/**
 * @swagger
 * /productos-compuestos/{id}:
 *   get:
 *     summary: Obtener un producto compuesto por ID
 *     tags:
 *       - Productos Compuestos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto compuesto
 *     responses:
 *       200:
 *         description: Detalles del producto compuesto
 *       404:
 *         description: Producto no encontrado
 */
router.get("/:id", controller.obtenerProductoCompuesto.bind(controller));

/**
 * @swagger
 * /productos-compuestos/{id}:
 *   delete:
 *     summary: Eliminar un producto compuesto
 *     tags:
 *       - Productos Compuestos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto compuesto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto compuesto eliminado exitosamente
 *       404:
 *         description: Producto compuesto no encontrado
 */
router.delete("/:id", controller.eliminarProductoCompuesto.bind(controller));



/**
 * @swagger
 * /productos-compuestos/{id}:
 *   put:
 *     summary: Actualizar los subproductos o sus porcentajes de un producto compuesto
 *     tags:
 *       - Productos Compuestos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto compuesto a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - subproductos
 *             properties:
 *               subproductos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - producto_individual_id
 *                     - porcentaje_contribucion
 *                   properties:
 *                     producto_individual_id:
 *                       type: integer
 *                     porcentaje_contribucion:
 *                       type: number
 *                       format: float
 *     responses:
 *       200:
 *         description: Producto compuesto actualizado exitosamente
 *       404:
 *         description: Producto compuesto no encontrado
 */
router.put(
  "/:id",
  updateProductoCompuestoDTOValidation,
  validateRequest,
  controller.actualizarProductoIndividual.bind(controller)
);



export default router;
