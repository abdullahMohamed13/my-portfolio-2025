import PixelTransition from "../components/react-bits/Animations/PixelTransition";
import AnimatedHeader from "../components/AnimatedHeader";
import { SiTypescript, SiTailwindcss, SiJavascript, SiReact, SiHtml5, SiCss3 } from 'react-icons/si';
import type { ReactNode } from "react";
import FuzzyText from '../components/react-bits/TextAnimations/FuzzyText';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  stack: string[];
  stackIcons: ReactNode[];
  imgSrc: string;
  projectInSite: string;
  liveURL: string;
  githubURL: string;
  linkedinPost?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'Chess Times Square',
      stack: ['ReactJs', 'JavaScript', 'CSS'],
      stackIcons: [<SiReact className="text-green-800"/>, <SiJavascript className="text-green-800"/>, <SiCss3 className="text-green-800"/>],
      imgSrc: '/projects/chess-times-square.png',
      projectInSite: '/projects/chess-times-square-home-page.jpeg',
      liveURL: 'https://chess-times-square.vercel.app/',
      githubURL: 'https://github.com/abdullahMohamed13/ChessTimesSquare',
      linkedinPost: 'https://www.linkedin.com/posts/abdallah-aziz-999b54295_reactjs-frontenddeveloper-webdevelopment-activity-7339562171699228672-T7Sr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeKCYUB2f05TmAQBvRvCLK8mgQqJSaN2fg'
    },
    {
      title: 'Notary',
      stack: ['ReactJs', 'TypeScript', 'TailwindCSS'],
      stackIcons: [<SiReact className="text-[#0ea5e9]"/>, <SiTypescript className="text-[#0ea5e9]"/>, <SiTailwindcss className="text-[#0ea5e9]"/>],
      imgSrc: '/projects/notary.png',
      projectInSite: '/projects/notary-home-page.png',
      liveURL: 'https://notary-app-six.vercel.app/',
      githubURL: 'https://github.com/abdullahMohamed13/notary-app',
      linkedinPost: 'https://www.linkedin.com/posts/abdallah-aziz-999b54295_notary-notary-react-activity-7345069928779079681-5C4m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeKCYUB2f05TmAQBvRvCLK8mgQqJSaN2fg'
    },
    {
      title: 'infoDash',
      stack: ['HTML', 'CSS', "JavaScript"],
      stackIcons: [<SiHtml5 className="text-[#5b100a]"/>, <SiCss3 className="text-[#5b100a]"/>, <SiJavascript className="text-[#5b100a]"/>],
      imgSrc: '/projects/info-dash.png',
      projectInSite: '/projects/info-dash-home-page.png',
      liveURL: 'https://info-dashboard-puce.vercel.app',
      githubURL: 'https://github.com/abdullahMohamed13/InfoDashboard'
    },
    {
      title: 'Repo Hub',
      stack: ['HTML', 'CSS', "JavaScript"],
      stackIcons: [<SiHtml5 className="text-red-600"/>, <SiCss3 className="text-red-600"/>, <SiJavascript className="text-red-600"/>],
      imgSrc: '/projects/repo-hub.png',
      projectInSite: '/projects/repo-hub-home-page.png',
      liveURL: 'https://repo-hub-ten.vercel.app',
      githubURL: 'https://github.com/abdullahMohamed13/repo-hub'
    }
  ];

  return (
    <section id="projects" className="flex-section-center section">
      <AnimatedHeader text="Projects" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, index) => (
          <div key={index} className="bg-card text-card-foreground p-4 rounded-2xl flex flex-col items-center gap-4">
            {/* shadow hover:shadow-xl transition-shadow */}
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
              pixelColor='var(--primary)'
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />

            <h3 className="text-xl font-semibold text-center">{proj.title}</h3>

            <div className="text-sm flex gap-2">
              {proj.stack.map((i) => {
                return <Badge>{i}</Badge>
              })}
            </div>

            <div className="flex gap-4 text-4xl">
              {proj.stackIcons.map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Button asChild>
                <a href={proj.liveURL} target="_blank">
                  Live App
                </a>
              </Button>
              <Button>
                <a href={proj.githubURL} target="_blank">
                  GitHub Repo
                </a>
              </Button>
              {proj.linkedinPost && (
                <>
                  <Button>
                    <a href={proj.linkedinPost} target="_blank">
                      LinkedIn Post
                    </a>
                  </Button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* overflow-x problem on mobile */}
      {/* <FuzzyText
          baseIntensity={0.1} 
          hoverIntensity={0.3} 
          enableHover={true}>
          Stay tuned for upcoming projects ⏳...
      </FuzzyText> */}
    </section>
  );
}
