import styled from '@emotion/styled';

import { IDetailEssential } from '../../../../types/product.interface';

interface IProps {
  essentials: IDetailEssential[];
}

const Essentials = ({ essentials }: IProps) => {
  return (
    <Div>
      <p>필수 표기정보</p>
      <ul>
        {essentials.map((e, i) => (
          <li key={i}>
            <Title>{e.title}</Title>
            <Description>{e.description}</Description>
          </li>
        ))}
      </ul>
    </Div>
  );
};

export default Essentials;

const Div = styled.div`
  margin-bottom: 30px;

  p {
    padding-top: 30px;
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 700;
  }

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  li {
    display: flex;
    border-bottom: 1px solid #eee;

    div {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      font-size: 12px;
    }
  }
`;

const Title = styled.div`
  flex-basis: 35%;
  background-color: #fafafa;
  color: #111;
  font-weight: 400;
`;

const Description = styled.div`
  flex-basis: 65%;
  color: #333;
  line-height: 17px;
`;
