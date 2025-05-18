import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { ProductoIndividual } from './ProductoIndividual';
import { ProductoCompuesto } from './ProductoCompuesto';

@Entity('producto_compuesto_detalle')
export class ProductoCompuestoDetalle {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductoIndividual, producto => producto.detalles, { onDelete: 'CASCADE' })
  producto_individual: ProductoIndividual;

  @ManyToOne(() => ProductoCompuesto, compuesto => compuesto.detalles, { onDelete: 'CASCADE' })
  producto_compuesto: ProductoCompuesto;

  @Column('decimal', { precision: 5, scale: 2 })
  porcentaje_contribucion: number;
}
