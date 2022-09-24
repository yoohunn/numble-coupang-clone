import styled from '@emotion/styled';

interface IProps {
  name: string;
  content: JSX.Element | string;
}

export default function Row({ name, content }: IProps) {
  return (
    <Box>
      <Col>{name}</Col>
      <Content>{content}</Content>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  font-size: 12px;
  border-bottom: 1px solid #e4e4e4;
`;

const Col = styled.div`
  width: 130px;
  padding: 7px 10px 7px 15px;
  display: flex;
  justify-content: end;
  align-items: center;
  font-weight: 700;
  background: #f4f4f4;
  border-right: 1px solid #e4e4e4;
`;

const Content = styled.div`
  flex: 1 1 0;
  padding: 10px 16px;
`;
