import { MedusaAuthenticatedRequest,Router } from 'medusa-extender';
import createUserHandler from '@medusajs/medusa/dist/api/routes/admin/users/create-user';
import wrapHandler from '@medusajs/medusa/dist/api/middlewares/await-middleware';
import { Product } from '../entities/product.entity';
import { Response, NextFunction } from "express";
import { getRepository } from 'typeorm';

@Router({
    routes: [
        {
            requiredAuth: true,
            path: '/admin/products/is-new/:id',
            method: 'post',
            handlers:  [
                async (req: MedusaAuthenticatedRequest, res: Response, next: NextFunction): Promise<Response<Product[]>> => {
                    /* You can create a function in a separate find and just imported it here. */
                    try {
                        const product = await getRepository(Product).findOne(req.params.id);
                    
                        if (!product) {
                          return res.status(404).json({ error: 'Product not found' });
                        }
                        if (!req.body.isNew) {
                          return res.status(400).json({ error: 'Invalid Request' });
                        }
                    
                        product.isNew = req.body.isNew;
                    
                        const savedProduct = await getRepository(Product).save(product);
                        return res.json(savedProduct);
                      } catch (error) {
                        return res.status(500).json({ error: error.message });
                      }
                }
            ],
        },
    ],
})

export class ProductRouter {
}