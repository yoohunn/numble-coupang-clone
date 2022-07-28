import Head from 'next/head';

export default function Metatags({ title = 'Coupang item', url = '' }) {
  return (
    <Head>
      <title>{`쿠팡! | ${title}`}</title>

      <meta property='og:title' content={title} />
      <meta property='og:url' content={url} />
      <meta property='og:description' content='COUPANG' />
      <meta property='og:type' content='website' />
    </Head>
  );
}
