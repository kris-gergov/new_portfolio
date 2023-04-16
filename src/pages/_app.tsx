import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import '@styles/globals.css';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-gradient-to-b from-light to-dark/20 dark:from-dark dark:bg-dark w-full min-h-screen sm:min-h-[100lvh]`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
