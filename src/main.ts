import { Medusa } from 'medusa-extender';
import { ProductModule } from './modules/product/product.module';
import express from 'express';

async function bootstrap() {
    const expressInstance = express();

    await new Medusa(__dirname + '/../', expressInstance).load([
        ProductModule,
    ]);

    expressInstance.listen(9000, () => {
        console.info('Server successfully started on port 9000');
    });
}

bootstrap();