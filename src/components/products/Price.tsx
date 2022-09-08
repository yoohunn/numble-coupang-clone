import styled from '@emotion/styled';

type TSize = 'sm' | 'md' | 'lg';

interface IProps {
  price: number;
  orignPrice?: number;
  /** @default '원' */
  unit?: string;
  /** @default 'md' */
  size?: TSize;
}

const Price = ({ price, orignPrice, unit = '원', size = 'md' }: IProps) => {
  const isShowDetail = size !== 'sm' && price !== orignPrice;
  const discountRate =
    orignPrice && Math.floor(((orignPrice - price) / price) * 100);

  return (
    <>
      {isShowDetail && (
        <Detail size={size}>
          {`${discountRate}%`}
          <span>{`${orignPrice?.toLocaleString()}원`}</span>
        </Detail>
      )}
      <Strong size={size}>
        {price.toLocaleString()}
        <span>{unit}</span>
      </Strong>
    </>
  );
};

export default Price;

const Detail = styled.div<{ size: TSize }>`
  font-size: ${(props) => fontSize.detail[props.size]};
  margin-bottom: 2px;

  span {
    margin-left: 3px;
    text-decoration: line-through;
    color: #888;
  }
`;

const Strong = styled.strong<{ size: TSize }>`
  font-size: ${(props) => fontSize.strong[props.size]};
  color: #ae0000;
  font-family: Tahoma;
`;

const fontSize = {
  strong: {
    sm: '13px',
    md: '18px',
    lg: '20px',
  },
  detail: {
    sm: '12px',
    md: '12px',
    lg: '14px',
  },
};
