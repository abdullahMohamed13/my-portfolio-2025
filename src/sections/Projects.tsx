import PixelTransition from "../components/react-bits/Animations/PixelTransition";
import AnimatedHeader from "../components/AnimatedHeader";
// import { SiTypescript, SiTailwindcss, SiJavascript, SiReact, SiHtml5, SiCss3 } from 'react-icons/si';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Project {
  title: string
  stack: string[]
  themeColor: string
  // stackIcons: ReactNode[]
  description: string
  imgSrc: string
  projectInSite: string
  liveURL: string
  githubURL: string
  linkedinPost?: string
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'Chess Times Square',
      stack: ['ReactJs', 'JavaScript', 'CSS'],
      themeColor: '#389B38',
      // stackIcons: [<SiReact />, <SiJavascript />, <SiCss3 />],
      description: `free online chess clock, with customizable time controls & dashboard to track game
      results. Perfect for over-the-board blitz, bullet, and classical chess.`,
      imgSrc: '/projects/chess-times-square.png',
      projectInSite: '/projects/chess-times-square-home-page.jpeg',
      liveURL: 'https://chess-times-square.vercel.app/',
      githubURL: 'https://github.com/abdullahMohamed13/ChessTimesSquare',
      linkedinPost: 'https://www.linkedin.com/posts/abdallah-aziz-999b54295_reactjs-frontenddeveloper-webdevelopment-activity-7339562171699228672-T7Sr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeKCYUB2f05TmAQBvRvCLK8mgQqJSaN2fg'
    },
    {
      title: 'Notary',
      stack: ['ReactJs', 'TypeScript', 'TailwindCSS'],
      themeColor: '#007cc1',
      // stackIcons: [<SiReact />, <SiTypescript />, <SiTailwindcss />],
      description: 'A modern multilingual note-taking app.',
      imgSrc: '/projects/notary.png',
      projectInSite: '/projects/notary-home-page.png',
      liveURL: 'https://notary-app-six.vercel.app/',
      githubURL: 'https://github.com/abdullahMohamed13/notary-app',
      linkedinPost: 'https://www.linkedin.com/posts/abdallah-aziz-999b54295_notary-notary-react-activity-7345069928779079681-5C4m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeKCYUB2f05TmAQBvRvCLK8mgQqJSaN2fg'
    },
    {
      title: 'infoDash',
      stack: ['HTML', 'CSS', "JavaScript"],
      themeColor: '#5b100a',
      // stackIcons: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
      description: 'A responsive dashboard interface with interactive components, clean layout structure, and smooth adaptability across devices for an optimal user experience.',
      imgSrc: '/projects/info-dash.webp',
      projectInSite: '/projects/info-dash-home-page.png',
      liveURL: 'https://info-dashboard-puce.vercel.app',
      githubURL: 'https://github.com/abdullahMohamed13/InfoDashboard'
    },
    {
      title: 'Repo Hub',
      stack: ['HTML', 'CSS', "JavaScript"],
      themeColor: '#F2141E',
      // stackIcons: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
      description: 'A JavaScript app that fetches and displays public repositories with its details for any GitHub user using the GitHub API.',
      imgSrc: '/projects/repo-hub.webp',
      projectInSite: '/projects/repo-hub-home-page.png',
      liveURL: 'https://repo-hub-ten.vercel.app',
      githubURL: 'https://github.com/abdullahMohamed13/repo-hub'
    }
  ];

  return (
    <section id="projects" className="section-margin flex-section-center section">
      <AnimatedHeader text="Projects" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, index) => (
          <div key={index} className="bg-card text-card-foreground p-4 rounded-2xl flex flex-col items-center gap-4">
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

{/* <h3 className="text-xl font-semibold text-center">{proj.title}</h3> */}

            <div className="text-sm flex gap-2">
              {proj.stack.map((single, key) => {
                return <Badge key={key} style={{backgroundColor: proj.themeColor, color: 'white'}}>{single}</Badge>
              })}
            </div>
{/* 
<div className="flex gap-4 text-4xl">
  {proj.stackIcons.map((icon, i) => (
    <span key={i}>{icon}</span>
  ))}
</div> */}

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                  {proj.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion >
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
      <div className="text-lg md:text-xl bg-muted hover:bg-muted/80 mt-4 px-4 py-2 rounded-lg shadow-sm hover:scale-[1.02]
        transition-transform duration-300 flex items-center gap-2 text-center">Stay Tuned For Upcoming Projects 🚀</div>
    </section>
  );
}
