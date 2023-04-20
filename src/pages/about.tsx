import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Layout from '@/components/Layout';
import Skills from '@/components/Skills';
import Head from 'next/head';
import React from 'react';

const about = () => {
  return (
    <>
      <Head>
        <title>KG | About</title>
        <meta name="description" content="About me" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <div className="grid w-full grid-cols-2 gap-16 justify-center">
            <div className="col-span-1 flex flex-col items-start justify-start lg:col-span-2">
              <Experience />
            </div>
            <div className="col-span-1 flex flex-col items-start justify-start  lg:col-span-2">
              <Education />
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default about;
