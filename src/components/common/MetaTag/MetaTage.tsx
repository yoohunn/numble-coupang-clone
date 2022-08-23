import Head from 'next/head';

export type MetatagsProps = {
  /** @default 'product item' */
  title?: string;
  /** @default '' */
  url?: string;
  /** @default '' */
  imageUrl?: string;
};

export default function Metatags({
  title = 'coupang item',
  url = '',
  imageUrl = '',
}: MetatagsProps) {
  return (
    <Head>
      <title>{`쿠팡! | ${title}`}</title>
      <meta property='og:title' content={title} />
      <meta property='og:image' content={imageUrl} />
      <meta property='og:url' content={url} />
      <meta property='og:description' content='COUPANG' />
      <meta property='og:type' content='website' />
    </Head>
  );
}
