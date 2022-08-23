import styled from '@emotion/styled';
import Image from 'next/image';

import { otherItemLi } from '../../../../../styles/reuse';

interface IProps {
  link: string;
  claimText: string;
  logoImageUrl: string;
  itemTotal: number;
}

const BrandshopLink = ({
  link,
  claimText,
  logoImageUrl,
  itemTotal,
}: IProps) => (
  <Li>
    <Image
      src={`https:${logoImageUrl}`}
      alt='Brandshop Image'
      width={140}
      height={140}
      layout='fixed'
    />

    <p>{claimText}</p>

    <p className='total'>
      총<span>{itemTotal}</span>개
    </p>

    <button>브랜드샵 구경할까요?</button>
  </Li>
);

export default BrandshopLink;

const Li = styled.li`
  ${otherItemLi}

  p {
    color: #212b36;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    line-height: 1.33;
  }

  p.total {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  span {
    font-weight: 600;
    color: #346aff;
    margin: 0 2px;
  }

  button {
    display: block;
    border: 1px solid #346aff;
    background-color: white;
    color: #346aff;
    font-weight: bold;
    font-size: 14px;
    padding: 10px 0;
    border-radius: 2px;
  }
`;
