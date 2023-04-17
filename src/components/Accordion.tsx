import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  BootstrapIcon,
  DjangoIcon,
  ExpressIcon,
  FramerIcon,
  JestIcon,
  MapsIcon,
  MongoIcon,
  MySQLIcon,
  NextJSIcon,
  NodeIcon,
  PythonIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  TypeScriptIcon,
} from './Icons';
import project1Img from '../../public/images/projects/img1.png';
import project2Img from '../../public/images/projects/img2.png';
import project3Img from '../../public/images/projects/portproject.png';
import project4Img from '../../public/images/projects/img4.png';
import Button from './Button';
import Link from 'next/link';

const AccordionItem = ({ text, icons, active, order, img, handleClick }) => {
  const panel = `panel${order}`;
  const activeClasses = active
    ? 'basis-[45vw] md:basis-[45vh] rounded-3xl'
    : 'basis-[12vw] md:basis-[30vh] rounded-2xl';

  return (
    <div
      className={`relative isolate overflow-hidden transition-all duration-500 border-2 border-solid border-gray-700 ${activeClasses}`}
      onClick={handleClick}
    >
      <div>
        <button
          className=" 
          flex items-center bg-transparent px-4 py-2 rounded-xl border-0 gap-4 flex-row-reverse sm:px-2 sm:py-[calc(5vh-10%)]"
          aria-controls={`${panel}-content`}
          aria-expanded={active}
        >
          <div className="flex w-[100%] justify-between">
            {icons.map((icon: any, i) => (
              <div
                className="w-10 aspect-square mr-3 sm:w-6"
                aria-hidden="true"
                key={`icon-${i}`}
              >
                {icon}
              </div>
            ))}
          </div>
        </button>
      </div>
      <div
        className="mt-2 md:mt-1 sm:mt-0"
        id={`${panel}-content`}
        aria-labelledby={`${panel}-heading`}
        aria-hidden={!active}
        role="region"
      >
        <p
          className={`${
            active ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          } transition-all duration-500 delay-200 text-light font-medium bg-dark/75 px-4 py-2 w-fit rounded-xl sm:px-2 sm:py-0 sm:pt-1 sm:text-sm`}
        >
          {text}
        </p>
        <div
          className={`${
            active ? 'flex gap-4 opacity-100' : 'hidden opacity-0'
          } transition-all p-4 duration-500 delay-200 absolute top-[90%] left-[38%]`}
        >
          <Button text="Demo" href="www.demo.com" />
          <Button text="Github" href="www.github.com" />
        </div>
        <Image
          src={img}
          alt={`project-${order}`}
          className={`w-full h-full absolute object-cover -z-10 transition-all duration-500 ${
            active ? 'brightness-90 top-32 sm:top-24' : 'brightness-50 top-0'
          }`}
        />
      </div>
    </div>
  );
};

const Card = ({ icons, image, demo = '', github, tag = undefined }) => {
  return (
    <div className="item w-[45%] h-full overflow-hidden transition-all duration-500 lg:w-full lg:h-full lg:basis-[6vh] lg:hover:basis-[36vh]">
      <p className="bg-dark/30 sm:bg-dark/40">
        {icons.map((icon: any, i) => (
          <div
            className="w-14 aspect-square mr-3 2xl:w-12 sm:w-6 bla"
            aria-hidden="true"
            key={`icon-${i}`}
          >
            {icon}
          </div>
        ))}
      </p>
      <div className="buttons grid justify-center justify-items-center grid-cols-6 md:grid-cols-2 md:gap-2">
        <div className="col-start-3 col-end-5 flex gap-4 xl:col-start-2 xl:col-end-4 lg:col-start-3 lg:col-end-5 md:gap-2 md:col-start-1 md:col-end-3 md:order-3">
          {demo ? (
            <Link
              href={demo}
              className="text-xl w-fit border-2 px-3 py-1 rounded-lg hover:border-primary 
            2xl:text-base xl:text-sm lg:text-lg md:text-base sm:text-sm xs:text-xs "
            >
              Demo
            </Link>
          ) : (
            ''
          )}
          <Link
            href={github}
            className={`w-fit text-xl border-2 px-3 py-1 rounded-lg hover:border-primaryDark 
          2xl:text-base xl:text-sm lg:text-lg md:text-base sm:text-sm xs:text-xs`}
          >
            Github
          </Link>
        </div>

        <div
          className={`w-fit text-xs font-semibold col-span-1 col-start-6 mr-10 xl:mr-20 md:mr-0 text-primary md:col-span-2 `}
        >
          {tag}
        </div>
      </div>
      <Image
        src={image}
        alt=""
        className="h-[30vh] 2xl:h-[25vh] xl:h-[20vh] lg:h-full"
      />
    </div>
  );
};

const Carousel = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="elements-sub-nav flex flex-wrap items-center mt-[1vh] w-full h-auto justify-center gap-4 md:h-[70%] lg:flex-col md:justify-normal">
      <Card
        demo="www.demo.com"
        github="www.github.com"
        tag="Freelance"
        image={project1Img}
        icons={[
          <TypeScriptIcon key={1} />,
          <ReactIcon key={2} />,
          <NodeIcon key={3} className="fill-light" />,
          <MongoIcon key={4} />,
          <ExpressIcon key={5} className="fill-light" />,
          <JestIcon key={6} />,
        ]}
      />
      <Card
        demo="www.demo.com"
        github="www.github.com"
        tag="Freelance"
        image={project2Img}
        icons={[<SassIcon key={1} />, <MapsIcon key={2} />]}
      />
      <Card
        github="www.github.com"
        image={project3Img}
        tag="Portfolio"
        icons={[
          <NextJSIcon key={1} className="fill-light" />,
          <TailwindIcon key={2} />,
          <FramerIcon key={3} />,
        ]}
      />
      <Card
        github="www.github.com"
        tag="University"
        image={project4Img}
        icons={[
          <PythonIcon key={1} />,
          <DjangoIcon key={2} className="fill-light" />,
          <MySQLIcon key={3} className="fill-light" />,
          <BootstrapIcon key={3} />,
        ]}
      />
    </div>
  );
};

const Accordion = () => {
  const [selected, setSelected] = useState(1);

  return (
    <Carousel />
    /* <div className="w-full h-2/3 flex flex-row justify-center gap-4 md:h-[70%] md:flex-col md:justify-normal">
      <AccordionItem
        active={selected === 1}
        order={1}
        icons={[
          <TypeScriptIcon key={1} />,
          <ReactIcon key={2} />,
          <NodeIcon key={3} className="fill-light" />,
          <MongoIcon key={4} />,
          <ExpressIcon key={5} className="fill-light" />,
          <JestIcon key={6} />,
        ]}
        img={project1Img}
        text="Fully test-driven web app, developed using TypeScript, Express, MongoDB and Jest."
        handleClick={() => setSelected(1)}
      />
      <AccordionItem
        active={selected === 2}
        order={2}
        icons={[<SassIcon key={1} />, <MapsIcon key={2} />]}
        img={project2Img}
        text="Modern and response, designed using SASS and the Google Maps API."
        handleClick={() => setSelected(2)}
      />
      <AccordionItem
        active={selected === 3}
        order={1}
        icons={[
          <NextJSIcon key={1} className="fill-light" />,
          <TailwindIcon key={2} />,
          <FramerIcon key={3} />,
        ]}
        img={project3Img}
        text="This portfolio - made with NextJS, Tailwind and Framer Motion"
        handleClick={() => setSelected(3)}
      />
      <AccordionItem
        active={selected === 4}
        order={2}
        icons={[
          <PythonIcon key={1} />,
          <DjangoIcon key={2} className="fill-light" />,
          <MySQLIcon key={3} className="fill-light" />,
          <BootstrapIcon key={3} />,
        ]}
        img={project4Img}
        text="My final project from univerisity developed using Django (Python), MySQL and Bootstrap."
        handleClick={() => setSelected(4)}
      />
    </div> */
  );
};

export default Accordion;
