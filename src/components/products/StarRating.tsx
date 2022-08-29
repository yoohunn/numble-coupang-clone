import styled from '@emotion/styled';

interface IProps {
  average?: number;
}

const StarRating = ({ average }: IProps) => (
  <StarWrapper>
    <Span average={average ?? 4.6}>
      <Stars />
    </Span>

    <span>
      <Stars />
    </span>
  </StarWrapper>
);

const Stars = () => (
  <>
    <i className='fa-solid fa-star'></i>
    <i className='fa-solid fa-star'></i>
    <i className='fa-solid fa-star'></i>
    <i className='fa-solid fa-star'></i>
    <i className='fa-solid fa-star'></i>
  </>
);

export default StarRating;

const StarWrapper = styled.span`
  position: relative;
  font-size: 12px;
  display: inline-block;
  unicode-bidi: bidi-override;
  color: #ccc;
  overflow: hidden;

  span {
    display: flex;
    overflow: hidden;
    height: 12px;
  }
`;

const Span = styled.span<{ average: number }>`
  position: absolute;
  top: 0px;
  left: 0;
  display: block;
  color: #ff9600;
  z-index: 1;
  overflow: hidden;
  width: ${(props) => (props.average * 100) / 5 + '%'};
`;
