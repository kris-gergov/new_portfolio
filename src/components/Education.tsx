import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ListItemIcon from './ListItemIcon';
import AnimatedText from './AnimatedText';

const Details = ({ type, time, place, info }) => {
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
          {type}&nbsp;
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/80">
          {time} | {place}
        </span>
        <p className="font-medium w-full sm:font-normal">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
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
    <div className="">
      <AnimatedText
        text="Education"
        className="mb-24 lg:mb-16 md:mb-12 sm:mb-8"
      />

      <div ref={ref} className="w-[75%] mx-auto relative 2xl:w-[85%] sm:w-full">
        <motion.div
          style={{ scaleY }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light sm:left-4"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor’s in Computer Science"
            time="2017-2020"
            place="University of East Anglia"
            info="Relevant courses included Web Development, Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence."
          />
          <Details
            type="A Levels / GCSEs"
            time="2009-2016"
            place="The John Roan School"
            info="A levels: Maths (B), Economics (B) and Computing (C). 9 GCSEs including Maths (A), English (B) and
            Additional Science (A*)."
          />
          <Details
            type="SAFE 6.0 Certified"
            time="2023"
            place="Scaled Agile Framework"
            info="Equipped with the skills to collaborate effectively with other teams and become a high-performing team member of an Agile Release Train (ART)."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
