import styled from '@emotion/styled';

import useGetProducts from '../../../hooks/products/useGetProducts';
import ProductItem from './ProductItem';

interface IProps {
  query: string;
}

const ProductList = ({ query }: IProps) => {
  const { products } = useGetProducts(query);

  return (
    <Ul>
      {products?.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Ul>
  );
};

export default ProductList;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
