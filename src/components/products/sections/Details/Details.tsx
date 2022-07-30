import styled from '@emotion/styled';

import { IDetails } from '../../../../types/product.interface';
import Tabs from './Tabs';
import Essentials from './Essentials';
import Content from './Content';

interface IProps {
  details?: IDetails;
}

const Details = ({ details }: IProps) => {
  if (!details) return <p>details 로딩중...</p>;

  return (
    <Section>
      <Tabs />
      <Essentials essentials={details.essentials} />
      <Content details={details.details} />
    </Section>
  );
};

export default Details;

const Section = styled.section`
  flex-direction: column;
`;
