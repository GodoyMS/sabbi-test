import express from 'express';
 import productoIndividualRoutes from './routes/productoIndividual.routes';
import productoCompuestoRoutes from './routes/productoCompuesto.routes';
import { errorHandler } from './middlewares/error.middleware';
import { specs, swaggerUi } from './swagger';

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

 app.use('/productos-individuales', productoIndividualRoutes);
app.use('/productos-compuestos', productoCompuestoRoutes);
app.use(errorHandler);

export default app;
