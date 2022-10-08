import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NUMBLE:: 쿠팡 클론</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello World!</h1>

        <div className={styles.description}>
          Click below 👇
          <p className={styles.codes}>
            <Link href='/checkout/1' />
            <Link href='/cart' />
            <Link href='/products' />
            <Link href='/products/1' />
            <Link href='/auth/signup' />
            <Link href='/auth/login' />
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/numble.png' alt='NUMBLE Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

const Link = ({ href }: { href: string }) => (
  <NextLink href={href}>
    <a>
      <code className={styles.code}>{href}</code>
    </a>
  </NextLink>
);
