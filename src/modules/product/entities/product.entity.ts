import { Product as MedusaProduct } from '@medusajs/medusa/dist';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Entity as MedusaEntity } from 'medusa-extender';

@MedusaEntity({ override: MedusaProduct })
@Entity()
export class Product extends MedusaProduct {
    @Index()
    @Column({ type: "boolean", default: false  })
    isNew : boolean
}