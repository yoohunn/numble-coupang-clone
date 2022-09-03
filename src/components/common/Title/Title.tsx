import styled from '@emotion/styled';

interface IProps {
  title: string;
}

const Title = ({ title }: IProps) => {
  return <H1>{title}</H1>;
};

export default Title;

const H1 = styled.h1`
  font-size: 18px;
  font-weight: bold;
  width: 380px;
  font-family: apple sd gothic neo, '맑은 고딕', malgun gothic, '나눔고딕',
    nanumgothic, '돋움', dotum, sans-serif;
`;
