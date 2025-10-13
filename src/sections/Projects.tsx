import type { ReactNode } from "react";
// React-Bits Components
import PixelTransition from "../components/react-bits/Animations/PixelTransition";
import AnimatedHeader from "../components/AnimatedHeader";
// Icons
import { SiTypescript, SiTailwindcss, SiJavascript, SiReact, SiCss3, SiClerk } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
// Shadcn Components
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
// Custom Reusable Components
import ProjectActionButton from "@/components/ProjectActionButton";

interface ProjectProps {
  title: string
  description: string
  imgSrc: string
  projectInSite: string
  deploymentPlatform: 'Netlify' | 'Render' | 'Github Pages'
  stack: string[]
  themeColor: string
  stackIcons: {
    text: string
    icon: ReactNode
   }[]
  liveURL: string
  githubURL: string
  linkedinPost?: string
}

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      title: 'Titan MMA Gym',
      stack: ['ReactJs', 'TypeScript', 'TailwindCSS', 'Clerk', 'Convex'],
      themeColor: '#e20000',
      deploymentPlatform: 'Netlify',
      stackIcons: [
        {
          text: 'React',
          icon: <SiReact />
        },
        {
          text: 'TypeScript',
          icon: <SiTypescript />
        },
        {
          text: 'TailwindCSS',
          icon: <SiTailwindcss />
        },
        {
          text: 'Clerk',
          icon: <SiClerk />
        },
      ],
      description: `A full-stack booking system designed to represent a Mixed Martial Arts (MMA) gym.
      The primary purpose is to showcase the gym's classes, coaches, students, branches, and offerings
      - while also allowing users to sign-up and book training sessions via the plans page.`,
      imgSrc: '/projects/titan-mma.webp',
      projectInSite: '/projects/titan-mma-home-page.webp',
      liveURL: 'https://titan-mma-gym.netlify.app',
      githubURL: 'https://github.com/abdullahMohamed13/titan-MMA-gym',
      linkedinPost: 'https://www.linkedin.com/posts/abdallah-aziz-999b54295_titanmma-reactjs-typescript-activity-7363564671762579458-U-7Z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeKCYUB2f05TmAQBvRvCLK8mgQqJSaN2fg'
    },
    {
      title: 'Chess Times Square',
      stack: ['ReactJs', 'JavaScript', 'CSS'],
      themeColor: '#389B38',
      deploymentPlatform: 'Render',
      stackIcons: [
        {
          text: 'React',
          icon: <SiReact />
        },
        {
          text: 'JavaScript',
          icon: <SiJavascript />
        },
        {
          text: 'CSS',
          icon: <SiCss3 />
        },
      ],
      description: `A Free online chess clock, with customizable time controls & dashboard to track game
      results. Perfect for over-the-board blitz, bullet, and classical chess.`,
      imgSrc: '/projects/chess-times-square.webp',
      projectInSite: '/projects/chess-times-square-home-page.webp',
      liveURL: 'https://chesstimessquare.onrender.com',
      githubURL: 'https://github.com/abdullahMohamed13/ChessTimesSquare',
      linkedinPost: 'https://www.linkedin.com/posts/abdallah-aziz-999b54295_reactjs-frontenddeveloper-webdevelopment-activity-7339562171699228672-T7Sr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeKCYUB2f05TmAQBvRvCLK8mgQqJSaN2fg'
    },
    {
      title: 'Notary',
      stack: ['ReactJs', 'TypeScript', 'TailwindCSS'],
      themeColor: '#007cc1',
      deploymentPlatform: 'Github Pages',
      stackIcons: [
        {
          text: 'React',
          icon: <SiReact />
        },
        {
          text: 'TypeScript',
          icon: <SiTypescript />
        },
        {
          text: 'TailwindCSS',
          icon: <SiTailwindcss />
        },
      ],
      description: 'A modern multilingual note-taking app.',
      imgSrc: '/projects/notary.webp',
      projectInSite: '/projects/notary-home-page.webp',
      liveURL: 'https://abdullahmohamed13.github.io/notary-app',
      githubURL: 'https://github.com/abdullahMohamed13/notary-app',
      linkedinPost: 'https://www.linkedin.com/posts/abdallah-aziz-999b54295_notary-notary-react-activity-7345069928779079681-5C4m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeKCYUB2f05TmAQBvRvCLK8mgQqJSaN2fg'
    },
    // {
    //   title: 'infoDash',
    //   stack: ['HTML', 'CSS', "JavaScript"],
    //   themeColor: '#5b100a',
    //   deploymentPlatform: 'Render',
    //   stackIcons: [
    //     {
    //       text: 'HTML',
    //       icon: <SiHtml5 />
    //     },
    //     {
    //       text: 'CSS',
    //       icon: <SiCss3 />
    //     },
    //     {
    //       text: 'JavaScript',
    //       icon: <SiJavascript />
    //     },
    //   ],
    //   description: 'A responsive dashboard interface with interactive components, clean layout structure, and smooth adaptability across devices for an optimal user experience.',
    //   imgSrc: '/projects/info-dash.webp',
    //   projectInSite: '/projects/info-dash-home-page.webp',
    //   liveURL: 'https://infodashboard.onrender.com',
    //   githubURL: 'https://github.com/abdullahMohamed13/InfoDashboard'
    // },
  ];

  return (
    <section id="projects" className="section-padding flex-section-center section">
      <AnimatedHeader text="Projects" />
      <code className="text-lg md:text-xl text-foreground/70 mb-6 px-4 py-2 text-center
        hover:scale-[1.02] transition-transform duration-300">
        /* I've worked on many projects, here are a few of my favorites! */
      </code>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, index) => (
          // Project Card
          <div key={index} className="relative bg-card text-card-foreground p-4 rounded-2xl flex flex-col items-center gap-4">
            
            {/* Deployment Platform Badge */}
            <div className="absolute bg-popover text-xs top-6 right-6 z-2 p-1.5 flex gap-2 items-center rounded-lg">
              <span className="rounded-full bg-red-500 w-1.5 h-1.5 animate-ping" />
              <span className="flex items-center">
                Live on {proj.deploymentPlatform}
              </span>
            </div>

            {/* Project Image */}
            <PixelTransition
              firstContent={
                <img
                  src={proj.imgSrc}
                  alt={`${proj.title} preview`}
                  className="object-cover rounded-lg h-full w-full"
                />
              }
              secondContent={
                <img
                  src={proj.projectInSite}
                  alt={`${proj.title} in action`}
                  className="object-cover rounded-lg h-full w-full grid place-items-center"
                />
              }
              gridSize={22}
              pixelColor={proj.themeColor}
              animationStepDuration={0.4}
              style={{borderStyle: 'none'}}
            />
            
            {/* Stack icons */}
            <div className="flex gap-4 justify-center mt-3 text-4xl">
              {proj.stackIcons.map((stack, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger
                    className="p-3 rounded-full shadow-lg bg-gradient-to-tr from-muted to-background
                    hover:scale-125 hover:rotate-6 transition-transform duration-300 cursor-default"
                    style={{ color: proj.themeColor }}
                  >
                    {stack.icon}
                  </TooltipTrigger>
                  <TooltipContent themeColor={proj.themeColor}>
                    <p className="text-white font-bold">{stack.text}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>

            {/* Description */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                  {proj.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion >

            {/*  CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {/* Live App button */}
              <ProjectActionButton
                text="App"
                href={proj.liveURL}
                icon={<FaExternalLinkAlt />}
                bgColor={proj.themeColor}
              />
              {/* GitHub Repo button */}
              <ProjectActionButton
                text="Repo"
                href={proj.githubURL}
                icon={<FaGithub />}
                bgColor={proj.themeColor}
              />
              {/* Linkedin Post button */}
                {proj.linkedinPost && (
                  <ProjectActionButton
                    text="Post"
                    href={proj.linkedinPost}
                    icon={<FaLinkedin />}
                    bgColor={proj.themeColor}
                  />
                )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-lg md:text-xl bg-muted hover:bg-muted/80 mt-8 px-4 py-2 rounded-lg shadow-sm
        hover:scale-[1.02] transition-transform duration-300">
          Stay Tuned For Upcoming Projects 🚀
      </div>
    </section>
  );
}
