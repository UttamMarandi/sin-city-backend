import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../modules/product/entities/product.entity';


const router = Router();

// Create a new product
// router.post('/products', async (req: Request, res: Response) => {
//   const product = new Product();
//   product.name = req.body.name;
//   product.description = req.body.description;
//   product.price = req.body.price;

//   try {
//     const savedProduct = await getRepository(Product).save(product);
//     return res.status(201).json(savedProduct);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// Get all products
// router.get('/products', async (req: Request, res: Response) => {
//   try {
//     const products = await getRepository(Product).find();
//     return res.json(products);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// Get a single product by ID
// router.get('/products/:id', async (req: Request, res: Response) => {
//   try {
//     const product = await getRepository(Product).findOne(req.params.id);

//     if (!product) {
//       return res.status(404).json({ error: 'Product not found' });
//     }

//     return res.json(product);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// Update a product
router.put('/store/products/:id', async (req: Request, res: Response) => {
  try {
    const product = await getRepository(Product).findOne(req.params.id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    product.isNew = req.body.isNew;
    
    const savedProduct = await getRepository(Product).save(product);
    return res.json(savedProduct);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Delete a product
// router.delete('/products/:id', async (req: Request, res: Response) => {
//   try {
//     const product = await getRepository(Product).findOne(req.params.id);

//     if (!product) {
//       return res.status(404).json({ error: 'Product not found' });
//     }

//     await getRepository(Product).delete(req.params.id);
//     return res.json({ message: 'Product deleted successfully' });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

export default router;
