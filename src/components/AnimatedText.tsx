import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({
  text,
  size = 'text-8xl',
  align = 'text-center',
  className = '',
}) => {
  return (
    <div
      className={`w-full mx-auto py-2 flex items-center justify-center ${align} overflow-hidden dark:text-light sm:py-0`}
    >
      <motion.h1
        className={`${className} inline-block w-full text-dark font-bold capitalize ${size} dark:text-light
        2xl:text-6xl xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
