import styled from '@emotion/styled';
import { IDetails } from '../../../../types/product.interface';
import Content from './Content';
import Essentials from './Essentials';
import Tabs from './Tabs';

interface IProps {
  details?: IDetails;
}

const Details = ({ details }: IProps) => {
  if (!details) return <p>details 로딩중...</p>;

  return (
    <Section>
      <Tabs />
      <Essentials />
      <Content />
    </Section>
  );
};

export default Details;

const Section = styled.section`
  flex-direction: column;
`;
