import styled from '@emotion/styled';

import { IProductItem } from '../../../types/products.types';
import ProductItem from './ProductItem';

interface IProps {
  products: IProductItem[];
}

const ProductList = ({ products }: IProps) => (
  <Ul>
    {products.map((item) => (
      <ProductItem key={item.id} item={item} />
    ))}
  </Ul>
);

export default ProductList;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
