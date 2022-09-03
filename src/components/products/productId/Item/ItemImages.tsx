import { useState } from 'react';
import styled from '@emotion/styled';

import ImageDetail from './ImageDetail';
import ImageList from './ImageList';
import { IImage } from '../../../../types/product.interface';

interface IProps {
  images: IImage[];
}

const ItemImages = ({ images }: IProps) => {
  const [activeId, setActiveId] = useState(0);

  return (
    <Div>
      <ImageList images={images} />
      <ImageDetail url={images[activeId].detailImage} />
    </Div>
  );
};

export default ItemImages;

const Div = styled.div`
  min-width: 490px;
  display: flex;
`;
