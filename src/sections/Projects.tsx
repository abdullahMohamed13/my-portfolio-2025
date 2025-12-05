import type { ReactNode } from "react";
// React-Bits Components
import AnimatedHeader from "../components/AnimatedHeader";
// Icons
import { SiTypescript, SiTailwindcss, SiJavascript, SiReact, SiCss3, SiClerk, SiReactquery } from 'react-icons/si';
import ProjectCard from "@/components/projects/ProjectCard";

export interface ProjectProps {
  title: string
  description: string
  imgSrc: string
  projectInSite?: string
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
      title: 'Cure',
      stack: ['ReactJs', 'Typescript', 'TailwindCSS', 'React Query'],
      themeColor: '#0163D1',
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
          text: 'React Query',
          icon: <SiReactquery />
        },
      ],
      description: `A full-stack team project for a medical booking platform where users can book doctors, manage appointments, receive notifications,
      and make online payments. I contributed by building the doctor details page, user reviews, notification system, payment workflow,
      and nearby-doctor map integration.`,
      imgSrc: '/projects/cure.png',
      projectInSite: '/projects/cure-home-page.png',
      liveURL: 'https://cure-frontend-team-3.netlify.app',
      // githubURL: 'https://github.com/abdullahMohamed13/R7-React-Cure-3',
      githubURL: 'https://github.com/Huma-volve/R7-React-Cure-3',
    },
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
      description: `A full-stack booking system built for a Mixed Martial Arts (MMA) gym.
      The system enables visitors to explore the gym's classes, coaches, branches, and membership offerings.
      Users can seamlessly register for accounts and reserve training sessions through an integrated plans and booking interface.`,
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
      results. Perfect for over-the-board blitz chess.`,
      imgSrc: '/projects/chess-times-square.webp',
      projectInSite: '/projects/chess-times-square-home-page.webp',
      liveURL: 'https://chesstimessquare.onrender.com',
      githubURL: 'https://github.com/abdullahMohamed13/ChessTimesSquare',
      linkedinPost: 'https://www.linkedin.com/posts/abdallah-aziz-999b54295_reactjs-frontenddeveloper-webdevelopment-activity-7339562171699228672-T7Sr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeKCYUB2f05TmAQBvRvCLK8mgQqJSaN2fg'
    },
    // {
    //   title: 'Notary',
    //   stack: ['ReactJs', 'TypeScript', 'TailwindCSS'],
    //   themeColor: '#007cc1',
    //   deploymentPlatform: 'Github Pages',
    //   stackIcons: [
    //     {
    //       text: 'React',
    //       icon: <SiReact />
    //     },
    //     {
    //       text: 'TypeScript',
    //       icon: <SiTypescript />
    //     },
    //     {
    //       text: 'TailwindCSS',
    //       icon: <SiTailwindcss />
    //     },
    //   ],
    //   description: 'A modern multilingual note-taking app.',
    //   imgSrc: '/projects/notary.webp',
    //   projectInSite: '/projects/notary-home-page.webp',
    //   liveURL: 'https://abdullahmohamed13.github.io/notary-app',
    //   githubURL: 'https://github.com/abdullahMohamed13/notary-app',
    //   linkedinPost: 'https://www.linkedin.com/posts/abdallah-aziz-999b54295_notary-notary-react-activity-7345069928779079681-5C4m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeKCYUB2f05TmAQBvRvCLK8mgQqJSaN2fg'
    // },
  ];

  return (
    <section id="projects" className="section-padding flex-section-center">
      <AnimatedHeader text="Projects" />
      <code className="text-lg md:text-xl text-foreground/70 mb-6 px-4 py-2 text-center
        hover:scale-[1.02] transition-transform duration-300">
        /* I've worked on many projects, here are a few of my favorites! */
      </code>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, index) => (
          // Project Card
          <ProjectCard proj={proj} index={index} />
        ))}
      </div>

      <div className="text-lg md:text-xl bg-card hover:bg-card/80 mt-8 px-4 py-2 rounded-lg shadow-sm
        hover:scale-[1.02] transition-transform duration-300">
          Stay Tuned For Upcoming Projects 🚀
      </div>
    </section>
  );
}
