import Link from 'next/link';
import styled from '@emotion/styled';

interface IProps {
  title: string;
  to: string;
}

const BlueLink = ({ title, to }: IProps) => {
  return (
    <Link href={to} passHref>
      <A>{title}</A>
    </Link>
  );
};

export default BlueLink;

const A = styled.a`
  display: inline-block;
  margin-top: 10px;
  font-size: 12px;
  color: #346aff;
  padding-bottom: 6px;
`;
