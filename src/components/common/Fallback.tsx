import styled from '@emotion/styled';
import { BarLoader } from 'react-spinners';

const Fallback = () => (
  <Box>
    <BarLoader color='#0073e9' width={200} />
  </Box>
);

export default Fallback;

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  width: 1080px;
`;
