import styled from '@emotion/styled';

interface IProps {
  onPayment: () => void;
  onRocketPayment: () => void;
}

const PaymentButtons = ({ onPayment, onRocketPayment }: IProps) => (
  <Box>
    <Button onClick={onPayment}>결제하기</Button>
  </Box>
);

export default PaymentButtons;

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

const Button = styled.button`
  width: 260px;
  height: 60px;
  font-size: 22px;
  font-weight: 600;
  color: white;
  background-color: #0078eb;
  border-radius: 4px;
`;
