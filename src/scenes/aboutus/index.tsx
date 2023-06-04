import { AboutboxType, SelectedPage } from '@/shared/types';
import { motion } from "framer-motion";
import Aboutbox from "./Aboutbox";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const aboutboxes: Array<AboutboxType> = [
  {
      description:
          "Our curriculum as been reviewed and approved by experienced software engineers in the industry!"
  },
  {
      description:
          "All courses are free with ZERO fees! And you will receive a certificate upon completing the course!"
  },
  {
    description:
        "Taught by skilled high school  students that a strong background in computer science!"
  }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return <section
    id="aboutus"
    className="bg-myprimary-100 py-10 md:h-[800px] w-full md:pb-0"
  >
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
      className="mx-auto md:flex md:mx-30 w-5/6 items-center justify-center"/>
      {/* about cirriculm */}
      {isAboveMediumScreens && (
        <div>
          <div className="h-[170px] w-full bg-mysecondary-300 py-5">
            <div className="mx-32 my-10 h-10 text-lg flex items-center justify-between gap-16 text-center">
                <p>Our curriculum as been reviewed and approved by experienced software engineers in the industry!</p>
                <p>All courses are free with ZERO fees! And you will receive a certificate upon completing the course!</p>
                <p>Taught by skilled high school  students that a strong background in computer science!</p>
              </div>
          </div>
          <div className='flex gap-16 mx-10 items-center justify-center'>
              <iframe src="https://drive.google.com/file/d/1HUZC0HuxQIFIa-5pp-UnzsAoDUESKCuh/preview" width="450" height="480" allow="autoplay" className='my-10'>
                Video cannot be loaded at this time.
                This video is a demo of the Pizza Guessing game.
              </iframe>
              <div className='text-mysecondary-300 p-5 text-center w-3/6'>
              <p className='text-5xl pb-6'>Project Demo</p>
              <p className='text-xl'> This project is an example what projects are made in the <u>Python Fundemnetals</u> course! At the end of both courses our intructers help you child brainstorm, create, and publish a unique project using the skills they learned.
              <br/> As shown in the video the projects make with our students contain fundamental concepts such as:</p>
                <div className='text-xl text-center mt-2'>
                  <li>variables</li>
                  <li>conditionals</li>
                  <li>loops</li>
                  <li>functions</li>
                  <li>and more!</li>
                </div>
                <div className='mt-6'>
                <AnchorLink
                  className="rounded-full text-white text-lg bg-mysecondary-300 px-12 py-2 hover:bg-mysecondary-100 hover:text-black"
                  onClick={() => setSelectedPage(SelectedPage.Register)}
                  href={`#${SelectedPage.Register}`}
                >sign up now!</AnchorLink>
                </div>
              </div>
          </div>
        </div>
      )}
      {!isAboveMediumScreens && (
        <div className='mt-10 mx-10 my-10 items-center justify-center'>
          {aboutboxes.map((aboutbox: AboutboxType) => (
            <Aboutbox
              key={aboutbox.description} 
              description={aboutbox.description}
            />
          ))}
        </div>
      )}
  </section>
};

export default AboutUs;