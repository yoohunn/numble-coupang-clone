import styled from '@emotion/styled';
import Image from 'next/image';

const LogoHeader = () => (
  <Header>
    <div>
      <Image src={'/coupang-logo.png'} width={174} height={41} />
    </div>
  </Header>
);

export default LogoHeader;

const Header = styled.header`
  padding: 15px 0;
  padding-left: 10px;
  border-bottom: 1px solid #e7e7e7;

  & > div {
    width: 1020px;
    margin: 0 auto;
  }
`;
