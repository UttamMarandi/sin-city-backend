import { Product } from "@medusajs/medusa";

import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm"


@Entity()
export class ProductNew extends Product {
  @Column({ type: "boolean" })
  isNew : boolean | null
}