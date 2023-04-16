import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const InnerProgressBarVariants: Variants = {
  hide: { width: 0 },
  show: w => ({ width: w, transition: { duration: 2, ease: 'easeOut' } }),
};

function InnerProgressBar({
  className,
  value,
  text,
  percent,
}: {
  className: string;
  value: number;
  text?: string;
  percent?: string;
}) {
  return (
    <motion.div
      className={`${className}`}
      variants={InnerProgressBarVariants}
      custom={`${value * 100}%`}
    >
      {text ? (
        <p className="ml-2 text-light text-lg font-medium mt-0.5 tracking-widest">
          {text}
        </p>
      ) : (
        <p className="flex middle items-center justify-end mr-2 mt-1 text-light font-medium">
          {percent}
        </p>
      )}
    </motion.div>
  );
}

const Skill = ({ name, x, y }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full flex items-center justify-center gap-2" ref={ref}>
      <motion.div
        className="my-8 flex h-8 w-full flex-row sm:mt-0"
        initial="hide"
        animate={isInView ? 'show' : ''}
        transition={{ staggerChildren: 0.2 }}
      >
        <InnerProgressBar
          className="bg-primary rounded-s-md"
          value={x}
          text={name}
        />
        <InnerProgressBar className="bg-stone-600 rounded-r-md" value={y} />
        <InnerProgressBar
          className="bg-stone-300 rounded-lg"
          value={1 - x - y}
        />
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-32 mb-24 w-full text-center 2xl:text-6xl lg:text-7xl md:text-6xl sm:text-4xl md:my-24 sm:my-16">
        Skills
      </h2>
      <div className="grid w-[85%] mx-auto grid-cols-8 gap-16 items-center justify-center lg:gap-0">
        <div className="col-span-4 flex flex-col items-start justify-start lg:col-span-8">
          <Skill name="HTML/CSS" x={0.98} y={0.02} />
          <Skill name="TypeScript" x={0.9} y={0.1} />
          <Skill name="NextJS" x={0.82} y={0.18} />
        </div>
        <div className="col-span-4 flex flex-col items-start justify-start lg:col-span-8">
          <Skill name="ReactJS" x={0.95} y={0.05} />
          <Skill name="Mongo/PostreSQL" x={0.85} y={0.15} />
          <Skill name="Node/Express/Sequelize" x={0.88} y={0.12} />
        </div>
      </div>
    </>
  );
};

export default Skills;
