import { UserRepository } from './user';
import { CategoryRepository } from './category';
import { ProductRepository } from './product';
import OrderRepository from './order';

const Repositories = {
  user: new UserRepository(),
  product: new ProductRepository(),
  category: new CategoryRepository(),
  order: new OrderRepository(),
};

const RepositoryNames = {
  USER: 'user',
  PRODUCT: 'product',
  CATEGORY: 'category',
  ORDER: 'order',
};

export { Repositories, RepositoryNames };
