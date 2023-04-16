import Accordion from '@/components/Accordion';
import AnimatedText from '@/components/AnimatedText';
import Button from '@/components/Button';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import projectImg from '../../public/images/projects/crypto-screener-cover-image.jpg';

const FeatureProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark shadow-2xl p-12">
      <Link
        href={link}
        target={'_blank'}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target={'_blank'}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center gap-3">
          <Button
            href={github}
            text="Code"
            icon={<GithubIcon className="w-6 ml-1" />}
          />
          <Button href={github} text="Demo" variant="secondary" />
        </div>
      </div>
    </article>
  );
};

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

          <Accordion />
        </Layout>
      </main>
    </>
  );
};

export default projects;
