import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductoCompuestoDetalle } from './ProductoCompuestoDetalle';

@Entity('productos_compuestos')
export class ProductoCompuesto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => ProductoCompuestoDetalle, detalle => detalle.producto_compuesto, { cascade: true })
  detalles: ProductoCompuestoDetalle[];
}
