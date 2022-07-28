import styled from '@emotion/styled';
import Image from 'next/image';

import { IImage } from '../../../../types/product.interface';

interface IProps {
  images: IImage[];
}

const ImageList = ({ images }: IProps) => {
  return (
    <Ul>
      {images.map((img, index) => (
        <li key={index}>
          <Image
            src={`https:${img.thumbnailImage}`}
            alt='Product Item Thumbnail Image'
            width={50}
            height={50}
            layout='fixed'
          />
        </li>
      ))}
    </Ul>
  );
};

export default ImageList;

const Ul = styled.ul`
  width: 55px;
  margin-right: 10px;
  min-height: 1px;

  & > li {
    border: 2px solid white;
    &:hover {
      border: 2px solid #346aff;
    }
  }
`;
