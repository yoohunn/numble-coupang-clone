import styled from '@emotion/styled';
import Image from 'next/image';

import { IDetail } from '../../../../types/product.interface';

interface IProps {
  details: IDetail[];
}

//TODO: Image 사용하기 👷‍♂️
const Content = ({ details }: IProps) => (
  <Div id='item-detail'>
    {details.map((detail, index) => (
      <li key={index}>
        <img
          src={`https:${detail.vendorItemContentDescriptions[0].content}`}
          alt='detail content img'
        />
      </li>
    ))}
  </Div>
);

export default Content;

const Div = styled.div`
  margin: 0 auto;

  li {
    img {
      width: 780px;
    }
  }
`;
