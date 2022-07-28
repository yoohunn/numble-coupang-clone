import styled from '@emotion/styled';

interface IProps {
  title: string;
  price: number;
  description: string;
}

const InsuranceCheck = ({ title, price, description }: IProps) => {
  return (
    <Wrapper>
      <input type='checkbox' />
      <div>
        <span className='title'>{title}</span>
        <span className='price'>{`${price}원`}</span>
        <p className='description'>{description}</p>
      </div>
    </Wrapper>
  );
};

export default InsuranceCheck;

const Wrapper = styled.div`
  display: flex;
  align-items: start;
  font-size: 14px;
  font-family: apple sd gothic neo, '맑은 고딕', malgun gothic, '나눔고딕',
    nanumgothic, '돋움', dotum, sans-serif;

  input {
    margin-right: 8px;
    padding-top: 2px;
  }

  div {
    & > .title {
      margin-left: 1px;
      font-weight: bold;
      color: #0f0f0f;
    }

    & > .price {
      color: #333;
      margin-left: 4px;
    }

    & > .description {
      font-size: 12px;
      line-height: 18px;
      margin-top: 6px;
      color: #111;
    }
  }
`;
