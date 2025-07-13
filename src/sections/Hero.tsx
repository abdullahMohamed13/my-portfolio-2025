import { motion } from 'framer-motion'
import Magnet from '../components/react-bits/Animations/Magnet'
import RotatingText from '../components/react-bits/TextAnimations/RotatingText';
import { Button } from '@/components/ui/button';
import SocialMedia from '@/components/SocialMedia';
import ProfileCard from '@/components/react-bits/Components/ProfileCard';

export function Hero() {
    return <section id='hero' className="min-h-screen flex-center
    text-center sm:text-left flex-col sm:flex-row gap-5">

      <div className="intro flex-c flex-col *:p-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}>
          <div> 
            <div className="creative flex justify-center items-center sm:justify-start sm:items-start pt-10 sm:pt-0 pb-10 text-2xl">
              <span className='px-2 sm:px-2 md:px-3 sm:py-1 md:py-2 font-semibold'>Creative</span>
              <RotatingText
                texts={['Coder', 'Designer', 'Builder', 'Thinker']}
                mainClassName="inline-flex justify-center bg-primary text-white overflow-hidden rounded-lg 
                font-bold py-2 px-4 w-[140px]"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2200}
              />
            </div>

          <h2 className='text-4xl font-bold'>Hi There 👋</h2>
          <h3>Building cool web things with <strong>React</strong>, <strong>TypeScript</strong> & <strong>Tailwind CSS</strong></h3>
          <p>My mission is to bring solid frontend logic and smooth user experiences to life. Also—don't mess with me in MMA 🥋.</p>

          </div>
        </motion.div>

        <div className="*:mx-1 mb-3">
          <Magnet padding={20} disabled={false} magnetStrength={3}>
            <Button asChild>
              <a href='#projects'>Check projects</a>
            </Button>
          </Magnet>
            <Button asChild>
              <a href='#contact'>Let's contact</a>
            </Button>
        </div>
    </div>
    <div className="flex flex-col gap-5">
      <ProfileCard
        avatarUrl="/me.png"
        iconUrl="/code-symbols.png"
        grainUrl="/code-symbols.png"
        name="Abdallah Aziz"
        title="Frontend Developer"
        showUserInfo={false}
      />
      <SocialMedia />
    </div>   
</section>

}
{/* Top SVG Border */}
{/* <img src="/waves-top.svg" className="absolute top-0 left-0 w-full" alt="" />x */}

{/* Bottom SVG Border */}
{/* <img src="/waves-bottom.svg" className="absolute bottom-0 left-0 w-full" alt="" /> */}

/*
import DecryptedText from '../components/react-bits/TextAnimations/DecryptedText'
          <DecryptedText
            text="Hi, I’m Abdallah 👋"
            animateOn="view"
            speed={200}
            className='text-4xl font-bold'
            maxIterations={20}
            revealDirection="center"
            />
          <DecryptedText
            text="Building cool web things with React, TypeScript & Tailwind"
            animateOn="view"
            speed={200}
            className='text-3xl font-bold pt-2 pb-3'
            maxIterations={20}
            revealDirection="center"
            />
          <DecryptedText
            text="My mission is to bring solid frontend logic and smooth user experiences to life. Also—don't mess with me in MMA 🥋."
            animateOn="view"
            speed={200}
            className='text-lg max-w-xl'
            maxIterations={20}
            revealDirection="center"
          />
*/