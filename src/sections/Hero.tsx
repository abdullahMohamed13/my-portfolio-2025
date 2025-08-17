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
        transition={{ duration: 0.6, delay: 0.3 }}
      >
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

          <h2 className="scroll-m-20 pb-2 text-3xl font-bold">
            Hi There <span className="wave">👋</span>
          </h2>
          <p className='leading-6 sm:leading-12 mb-2 text-muted-foreground *:text-[var(--foreground)]'>I'm always interested in building cool web things with <strong>React</strong>, <strong>TypeScript</strong> & <strong>Tailwind CSS</strong></p>
          <p className='leading-6 sm:leading-7 text-muted-foreground'>I’m passionate about turning complex ideas into interactive, high-quality web interfaces. I build with precision, iterate with intention, and always ship with purpose.</p>
        </div>
      </motion.div>

      <div className="*:mx-1 mb-3">
        <Magnet padding={20} disabled={false} magnetStrength={3}>
          <Button asChild>
            <a href='#projects'>Check projects</a>
          </Button>
        </Magnet>
        <Button asChild>
          <a href='#contact'>Hire Me</a>
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