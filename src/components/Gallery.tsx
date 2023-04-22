import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  BootstrapIcon,
  DjangoIcon,
  ExpressIcon,
  FramerIcon,
  JestIcon,
  MapsIcon,
  MaterialUiIcon,
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

const Card = ({ icons, image, demo = '', github, tag = undefined }) => {
  return (
    <div
      className="item w-[45%] h-full overflow-hidden transition-all duration-500 
      sm:dark:border-[1px] sm:dark:border-light/50 hover:border-none lg:w-full lg:h-full lg:basis-[6vh] lg:hover:basis-[36vh]"
    >
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

const Gallery = () => {
  return (
    <div className="elements-sub-nav flex flex-wrap items-center mt-[1vh] w-full h-auto justify-center gap-4 md:h-[70%] lg:flex-col md:justify-normal">
      <Card
        demo="https://katesdemo.onrender.com/"
        github="https://github.com/kris-gergov/katesdemo-client"
        tag="Freelance"
        image={project1Img}
        icons={[
          <TypeScriptIcon key={1} />,
          <ReactIcon key={2} />,
          <NodeIcon key={3} className="fill-light" />,
          <MongoIcon key={4} />,
          <ExpressIcon key={5} className="fill-light" />,
          <JestIcon key={6} />,
          <MaterialUiIcon key={7} />,
        ]}
      />
      <Card
        demo="https://github.com/kris-gergov/haircombe"
        github="https://kris-gergov.github.io/"
        tag="Freelance"
        image={project2Img}
        icons={[<SassIcon key={1} />, <MapsIcon key={2} />]}
      />
      <Card
        github="https://github.com/kris-gergov/new_portfolio"
        image={project3Img}
        tag="Portfolio"
        icons={[
          <NextJSIcon key={1} className="fill-light" />,
          <TailwindIcon key={2} />,
          <FramerIcon key={3} />,
        ]}
      />
      <Card
        github="https://github.com/kris-gergov/appointment"
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

export default Gallery;
