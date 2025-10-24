import { Link } from "react-router-dom";
import SocialMedia from '@/components/SocialMedia';
// React bits
import Magnet from '../components/react-bits/Animations/Magnet'
// shadcn
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// icons
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiReact, SiTailwindcss } from 'react-icons/si';
// shadcn.io
import { ContainerTextFlip } from '@/components/ui/shadcn-io/container-text-flip';
import { TextGenerateEffect } from '@/components/ui/shadcn-io/text-generate-effect';
import { scrollToSection } from "@/store/nav-items";

const CTASectionOnMobile =
<div className="block sm:hidden *:mx-1 mb-3">
    <Button asChild>
      <a href='#projects' className='text-white'>Check projects</a>
    </Button>

    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>Resume</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link to='/resume' className="w-full">
          <DropdownMenuItem>
            Show
          </DropdownMenuItem>
        </Link>
        <a href="/pdf-files/Abdallah-Aziz-Resume.pdf" download>
            <DropdownMenuItem variant="default">Download</DropdownMenuItem>
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
</div> 

const CTASectionOnDesktop =
        <div className="hidden sm:block *:mx-1 mb-3">
          <Magnet padding={20} disabled={false} magnetStrength={3}>
            <Button className="text-white" onClick={() => scrollToSection('projects')}>Check projects</Button>
          </Magnet>

          <DropdownMenu>
            <DropdownMenuTrigger>
                <Tooltip>
                    <TooltipTrigger>
                        <Button variant='outline' className="text-foreground">Resume</Button>
                    </TooltipTrigger>
                    <TooltipContent className="text-white">
                        Click for options
                    </TooltipContent>
                </Tooltip>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link to='/resume' className="w-full">Show</Link>
                </DropdownMenuItem>
                <a href="/pdf-files/Abdallah-Aziz-Resume.pdf" download>
                    <DropdownMenuItem className="cursor-pointer">Download</DropdownMenuItem>
                </a>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

export function Hero() {

  const words = `I'm always interested in building solutions that truly solve real-world problems.
            I believe the world becomes a better place when we start creating tools and experiences that address the challenges we personally face.`

    return <section id="hero"
      className="relative px-3 min-h-screen flex-center pt-5 pb-10 sm:pb-0 text-center sm:text-left flex-col sm:flex-row gap-5 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/backgrounds/hero-background.webp')" }}
    >

      <div className="sm:-mt-60 *:p-2">
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
              <p>Here's the technologies that helps me to do so:</p>
              
              <div className="grid sm:flex grid-cols-2 *:text-black sm:grid-cols-3 md:grid-cols-4 gap-2 mt-1 place-items-center *:flex *:items-center *:gap-1 ">
                <Badge className="bg-[#F7DF1E]">
                  JavaScript <SiJavascript />
                </Badge>
                <Badge className="bg-[#61DAFB]">
                  React <SiReact />
                </Badge>
                <Badge className="bg-[#3178C6]">
                  TypeScript <SiTypescript />
                </Badge>
                <Badge className="bg-[#06B6D4]">
                  Tailwind CSS <SiTailwindcss />
                </Badge>
                <Badge className="bg-[#E34F26]">
                  HTML5 <SiHtml5 />
                </Badge>
                <Badge className="bg-[#1572B6]">
                  CSS3 <SiCss3 />
                </Badge>
              </div>

            </div>
          </div>

          {CTASectionOnDesktop}
      </div>

      <div className="flex flex-col gap-3 sm:-mt-60">
        <img src="/me.webp"
          className='rounded-full border-4 hover:border-primary transition-all duration-300'
          // sm:mx-0 mx-10
          alt="Abdallah's Photo"
        />
        <div className='gap-1 flex-center'>
          <span className='w-3 h-3 bg-green-500 animate-pulse border-2 shadow-2xl rounded-full' />
          <p className='text-base'>Available To Work</p>
        </div>
        <SocialMedia centered />
        {CTASectionOnMobile}
      </div>   
  </section>

}