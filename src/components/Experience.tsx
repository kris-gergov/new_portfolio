import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ListItemIcon from './ListItemIcon';
import AnimatedText from './AnimatedText';

const Details = ({ position, company = '', companyLink = '', time, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between sm:w-[75%] sm:ml-[15%] sm:mr-[10%]"
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
            {company ? `@${company}` : ''}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/80">
          {time}
        </span>
        <p className="font-medium w-full sm:font-normal">{work}</p>
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
            position="Full-Stack Developer"
            company="PCCW Global"
            companyLink="https://www.pccwglobal.com/"
            time="2021-Present"
            work="Currently involved in developing API based systems integration, 
            working with OpenAPI specifications, frontend enhancements on existing web-based systems. 
            Other responsibilities include writing unit tests, improving the CI/CD pipeline and onboarding new developers.
            Current stack: TypeScript, React, Node, Sequalize and Postgres."
          />
          <Details
            position="Freelance"
            time="2020-2021"
            work="Developed a workforce management website for a
            cleaning company using TypeScript, React, Express and MongoDB. 
            Designed hair dressing website utilizing SASS and the
            Google Maps API"
          />
          <Details
            position="C# Developer"
            company="Purple Crane"
            companyLink="https://www.purplecrane.com/"
            time="2016-2017"
            work="Maintained and updated code for 3+ large scale .NET
            websites, using MVC, jQuery, HTML, and CSS. Worked in an Agile team of .NET developers to
            identify and resolve system defects. Developed automated scheduled database backup
            and delete scripts."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
