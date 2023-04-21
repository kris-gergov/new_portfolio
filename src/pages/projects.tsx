import Gallery from '@/components/Gallery';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';

const projects = () => {
  return (
    <>
      <Head>
        <title>KG | Projects</title>
        <meta name="projects" content="Portfolio projects" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center h-screen">
        <Layout className="pt-16">
          <AnimatedText
            text="Portfolio Projects"
            className="mb-24 lg:mb-16 md:mb-12 sm:mb-8"
          />

          <Gallery />
        </Layout>
      </main>
    </>
  );
};

export default projects;
