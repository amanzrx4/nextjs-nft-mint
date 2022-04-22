import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NFT drop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-red-500'>Welcome to nft drop challenge</h1>
    </div>
  );
};

export default Home;
