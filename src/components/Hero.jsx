import { motion } from "framer-motion";

import { styles } from "../styles";
import { socialLinks } from "../constants";

// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Manadinho</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full stack web developer and Automation Eng. <br className='sm:block hidden' />
            with 5 years of experience.
          </p>
          <div  className="flex mt-20">
            {socialLinks.map((socialLink) => {
                return (
                  <a href={ socialLink.url } target="_blank" className="ml-5">
                    <img src={socialLink.icon} alt='source code' className='w-10 h-10 p-1' />
                    <p className="mt-2">{socialLink.name}</p>
                  </a>
                )
              })}
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
