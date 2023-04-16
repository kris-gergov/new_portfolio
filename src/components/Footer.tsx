import Link from 'next/link';
import React from 'react';
import Layout from './Layout';

const Footer = () => {
  return (
    <footer className="w-[75%] mx-auto border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-center xl:py-6 lg:py-6 md:py-4 sm:p-3 sm:text-center">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
      </Layout>
    </footer>
  );
};

export default Footer;
