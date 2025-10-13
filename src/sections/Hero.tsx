import SocialMedia from '@/components/SocialMedia';
// React bits
import Magnet from '../components/react-bits/Animations/Magnet'
// shadcn
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
// icons
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiReact, SiTailwindcss } from 'react-icons/si';
// shadcn.io
import { ContainerTextFlip } from '@/components/ui/shadcn-io/container-text-flip';
import { TextGenerateEffect } from '@/components/ui/shadcn-io/text-generate-effect';

const CTASectionOnMobile =
<div className="block sm:hidden *:mx-1 mb-3">
          <Button asChild>
            <a href='#projects' className='text-white'>Check projects</a>
          </Button>
          <Button asChild variant='outline'>
            <a href='#contact' className='text-foreground'>Hire Me</a>
          </Button>
        </div> 

const CTASectionOnDesktop =
        <div className="hidden sm:block *:mx-1 mb-3">
          <Magnet padding={20} disabled={false} magnetStrength={3}>
            <Button asChild>
              <a href='#projects' className='text-white'>Check projects</a>
            </Button>
          </Magnet>
          <Button asChild variant='outline'>
            <a href='#contact' className='text-foreground'>Hire Me</a>
          </Button>
        </div>

export function Hero() {

  const words = `I'm always interested in building solutions that truly solve real-world problems.
            I believe the world becomes a better place when we start creating tools and experiences that address the challenges we personally face.`

    return <section id="hero"
      className="relative px-3 text-white min-h-screen flex-center pt-5 pb-10 sm:pb-0 text-center sm:text-left flex-col sm:flex-row gap-5 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/backgrounds/hero-background.png')" }}
    >

      <div className="sm:-mt-40 *:p-2">
          <div>
            <div className="flex justify-center flex-col gap-3 items-center sm:justify-start sm:items-start pt-10 sm:pt-0 text-2xl">
              <p className='font-bold'>Hi, I am Abdallah Aziz</p>
              <div>
                <span className='text-3xl pr-2 font-semibold'>a</span>
                <ContainerTextFlip
                  words={["Frontend Developer", "Web Developer", "React Developer"]}
                  interval={4000}
                  animationDuration={600}
                />
              </div>
            </div>

            <TextGenerateEffect 
              words={words}
              className="text-2xl text-center md:text-left pb-8 pt-8"
              duration={0.6}
              staggerDelay={0.15}
            />
          
          <div className='text-center md:text-left text-2xl'>
              <p>These are the technologies I'm most comfortable using:</p>
              <div className="grid sm:flex grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-1 place-items-center">
                <Badge className="flex items-center gap-1 bg-[#F7DF1E]">
                  JavaScript <SiJavascript />
                </Badge>
                <Badge className="flex items-center gap-1 bg-[#61DAFB]">
                  React <SiReact />
                </Badge>
                <Badge className="flex items-center gap-1 bg-[#3178C6]">
                  TypeScript <SiTypescript />
                </Badge>
                <Badge className="flex items-center gap-1 bg-[#06B6D4]">
                  Tailwind CSS <SiTailwindcss />
                </Badge>
                <Badge className="flex items-center gap-1 bg-[#E34F26]">
                  HTML5 <SiHtml5 />
                </Badge>
                <Badge className="flex items-center gap-1 bg-[#1572B6]">
                  CSS3 <SiCss3 />
                </Badge>
              </div>

            </div>
          </div>

          {CTASectionOnDesktop}
      </div>

      <div className="flex flex-col gap-3 sm:-mt-40">
        <img src="/me.png" className='rounded-full hover:border transition-all sm:mx-0 mx-10 border-3' alt="Abdallah Photo" />
        <div className='gap-1 flex-center'>
          <span className='w-3 h-3 bg-green-500 animate-pulse border-2 shadow-2xl rounded-full'></span>
          <p className='text-base'>Available To Work</p>
        </div>
        <SocialMedia centered/>
        {CTASectionOnMobile}
      </div>   
  </section>

}