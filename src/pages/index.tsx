import Button from '@/components/Button';
import { LinkArrow, MoonIcon, SunIcon } from '@/components/Icons';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import AnimatedText from '@components/AnimatedText';
import WavesLayout from '@components/WavesLayout';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Home() {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className="flex items-start text-dark min-h-screen dark:text-light">
        <WavesLayout className="pt-64">
          <div className="flex items-center justify-center w-full lg:flex-col sm:mt-8">
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
              <AnimatedText
                text="Full-stack Web Developer"
                size="text-6xl"
                align="text-left"
                className="text-center"
              />
              <p className="my-4 text-lg font-medium text-center sm:text-base">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center  mt-2 gap-4 lg:w-full lg:justify-center">
                <Button
                  text="CV"
                  href="/dummy.pdf"
                  icon={<LinkArrow className="w-6 ml-1" />}
                  variant="primary"
                />
                <Button
                  text="Contact"
                  href="mailto:krisgergov@gmail.com"
                  variant="secondary"
                />
              </div>
            </div>
          </div>
        </WavesLayout>

        <div className="fixed right-8 bottom-8 inline-block w-16 md:absolute md:right-6 md:left-auto md:top-5 md:bottom-auto">
          <motion.button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className="ml-4 flex items-center justify-center rounded-full p-1"
            whileHover={{
              scale: 1.1,
              boxShadow:
                mode === 'light'
                  ? '0 0 10px rgba(0,0,0,0.4)'
                  : '0 0 10px rgba(255,255,255,0.4)',
            }}
            whileTap={{ scale: 0.9 }}
          >
            {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </motion.button>
        </div>
      </main>
    </>
  );
}
