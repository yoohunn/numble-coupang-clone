import styled from '@emotion/styled';

export const Header = styled.header`
  width: 100%;
  margin: auto;
  border: 0;
  padding: 9px 0;
  color: #111;
  line-height: 22px;
  text-align: center;
  border: 1px solid #ccc;
`;

export const H3 = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

export const Body = styled.div`
  margin: auto;
  min-width: 300px;
  max-width: 460px;
  padding: 10px 10px 30px;
  font-size: 15px;
  line-height: 19px;
  font-family: apple sd gothic neo, malgun gothic, nanumbarungothic, nanumgothic,
    dotum, sans-serif;
`;

export const Cards = styled.div`
  margin-bottom: 10px;
`;

// Card

export const CardBox = styled.div<{ isPicked: boolean }>`
  padding: 15px;
  border: 1px solid #ccc;
  border: ${(props) =>
    props.isPicked ? '2px solid #0073e9' : '1px solid #ccc'};
`;

export const LabelBox = styled.div`
  margin: 9px 0 2px 0;
`;

export const P = styled.p`
  margin-top: 4px;
`;

export const Div = styled.div`
  margin: 8px 0 6px 0;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
