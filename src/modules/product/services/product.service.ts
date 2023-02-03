import { EntityEventType, MedusaEventHandlerParams, OnMedusaEntityEvent, Service } from 'medusa-extender';

import { EntityManager } from "typeorm";
import { ProductService as MedusaProductService } from '@medusajs/medusa/dist/services';
import { Product } from '../entities/product.entity';
// import { User } from '../../user/entities/user.entity';
// import UserService from '../../user/services/user.service';

type ConstructorParams = {
    manager: any;
    // loggedInUser: User;
    productRepository: any;
    productVariantRepository: any;
    productOptionRepository: any;
    eventBusService: any;
    productVariantService: any;
    productCollectionService: any;
    productTypeRepository: any;
    productTagRepository: any;
    imageRepository: any;
    searchService: any;
    // userService: UserService;
}

@Service({ scope: 'SCOPED', override: MedusaProductService })
export class ProductService extends MedusaProductService {
    // readonly #manager: EntityManager;

    // constructor(private readonly container: ConstructorParams) {
    //     super(container);
    //     this.#manager = container.manager;
    // }

    // prepareListQuery_(selector: object, config: object): object {
    //     const loggedInUser = this.container.loggedInUser
    //     if (loggedInUser) {
    //         selector['store_id'] = loggedInUser.store_id
    //     }

    //     return super.prepareListQuery_(selector, config);
    // }
}