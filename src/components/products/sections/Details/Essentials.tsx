import styled from '@emotion/styled';

interface IProps {}

const Essentials = ({}: IProps) => {
  return (
    <Div>
      <p>필수표기정보</p>
    </Div>
  );
};

export default Essentials;

const Div = styled.div`
  p {
    padding: 30px 0 10px 0;
    font-size: 14px;
    font-weight: 700;
  }
`;
