import Head from 'next/head';

const CoupangHead = ({ title }: { title: string }) => (
  <Head>
    <title>쿠팡! | {title}</title>
  </Head>
);

export default CoupangHead;
