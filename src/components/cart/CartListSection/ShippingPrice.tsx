import styled from '@emotion/styled';

interface IProps {
  price: string;
}

const ShippingPrice = ({ price }: IProps) => (
  <Box>
    <span>{price}</span>
  </Box>
);

export default ShippingPrice;

const Box = styled.div`
  width: 88px;
  font-size: 12px;
  border-left: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
`;
