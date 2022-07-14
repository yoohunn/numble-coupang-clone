import styled from '@emotion/styled';
import Head from 'next/head';
import Image from 'next/image';

import logo from '../../public/coupang-logo.png';
type Props = {
  title: string;
};
const AuthLayout = ({ title, children }: React.PropsWithChildren<Props>) => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
      </Head>

      <Header>
        <Image src={logo} alt='logo' />
      </Header>
      {children}
    </Box>
  );
};
export default AuthLayout;

const Box = styled.div`
  margin: auto;
  min-width: 290px;
  max-width: 460px;
  margin-bottom: 60px;
`;

const Header = styled.header`
  padding: 10.27% 133px 0 133px;
  margin: 0;
  text-align: center;
`;
