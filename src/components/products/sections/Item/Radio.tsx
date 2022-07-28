import styled from '@emotion/styled';

interface IProps {
  title: string;
  description: string;
}

const Radio = ({ title, description }: IProps) => {
  return (
    <Wrapper>
      <label>
        <input type='radio' />
        <span className='title'>{title}</span> 도착 보장
        <span className='description'>{description}</span>
      </label>
    </Wrapper>
  );
};

export default Radio;

const Wrapper = styled.div`
  padding-top: 7px;
  margin-bottom: 5px;
  font-size: 12px;
  font-family: apple sd gothic neo, '맑은 고딕', malgun gothic, '나눔고딕',
    nanumgothic, '돋움', dotum, sans-serif;
  color: #00891a;

  .title {
    margin-left: 8px;
    font-weight: bold;
    font-size: 14px;
  }

  .description {
    margin-left: 2px;
    color: #111;
  }
`;
