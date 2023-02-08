import { Module } from 'medusa-extender';
import { Product } from './entities/product.entity';
import ProductRepository from '../repositories/product.repository';
import { ProductService } from './services/product.service';
import addStoreIdToProduct1645034402086 from './product.migration';
import { ProductRouter } from './routers/product.router';

@Module({
    imports: [
      Product,
      ProductRepository,
      ProductService,
      addStoreIdToProduct1645034402086,
      ProductRouter,
    ]
})
export class ProductModule {}