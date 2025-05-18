import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductoCompuestoDetalle } from './ProductoCompuestoDetalle';

@Entity('productos_individuales')
export class ProductoIndividual {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion: Date;

  @OneToMany(() => ProductoCompuestoDetalle, detalle => detalle.producto_individual)
  detalles: ProductoCompuestoDetalle[];
}
