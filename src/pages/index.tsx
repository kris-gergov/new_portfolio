import Head from 'next/head';
import Button from '@/components/Button';
import { LinkArrow } from '@/components/Icons';
import AnimatedText from '@components/AnimatedText';
import WavesLayout from '@components/WavesLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kris Gergov Portfolio</title>
        <meta name="portfolio" content="Personal portfolio" />
      </Head>

      <main className="flex items-start text-dark min-h-screen dark:text-light sm:min-h-[100%]">
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
                Hello there, I&apos;m Kris. Feel free to explore some of my
                latest projects or check out the about page for more info on my
                experience, education and skills.
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
      </main>
    </>
  );
}
