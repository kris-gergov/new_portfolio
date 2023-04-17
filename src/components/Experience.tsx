import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ListItemIcon from './ListItemIcon';
import AnimatedText from './AnimatedText';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between sm:w-[80%] sm:ml-[10%] sm:mr-[10%]"
    >
      <ListItemIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="uppercase font-bold text-2xl sm:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/80">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <div>
      <AnimatedText
        text="Experience"
        className="mb-24 lg:mb-16 md:mb-12 sm:mb-8"
      />

      <div ref={ref} className="w-[75%] mx-auto relative 2xl:w-[85%] sm:w-full">
        <motion.div
          style={{ scaleY }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light sm:left-4"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.gooogle.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.gooogle.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.gooogle.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
