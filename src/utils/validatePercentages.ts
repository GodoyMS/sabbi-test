import { SubproductoDTO, UpdateProductoCompuestoDTO } from '../dtos/productoCompuesto.dto';

export function validatePercentages(subproductos: SubproductoDTO[]): boolean {
  const total = subproductos.reduce((sum, s) => sum + s.porcentaje_contribucion, 0);
  return Math.abs(total - 100) < 0.01; 
}

export function validatePercentagesUpdate(subproductos: SubproductoDTO[]): boolean {
  const total = subproductos.reduce((sum, s) => sum + s.porcentaje_contribucion, 0);
  console.log(total)
  return Math.abs(total - 100) < 0.01; 
}