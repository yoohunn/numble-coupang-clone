import { IProductItem } from '../../../types/products.types';
import ProductItem from './ProductItem';

interface IProps {
  products: IProductItem[];
}

const ProductList = ({ products }: IProps) => {
  return (
    <ul>
      <p>product list</p>

      {products.map((item) => (
        <ProductItem />
      ))}
    </ul>
  );
};

export default ProductList;
