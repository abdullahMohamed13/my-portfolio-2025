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
import PixelTransition from "../react-bits/Animations/PixelTransition";
import ProjectActionButton from "@/components/projects/ProjectActionButton";
import type { ProjectProps } from "@/sections/Projects";

export default function ProjectCard({proj, index}: {proj: ProjectProps, index: number}) {
    return (
      <div key={index} className="relative bg-card text-card-foreground p-4 rounded-2xl flex flex-col items-center gap-4">
              
        {/* Deployment Platform Badge */}
        <div className="absolute bg-popover text-xs top-6 right-6 z-2 p-1.5 flex gap-2 items-center rounded-lg">
          {proj.projectInSite && (
            <span className="rounded-full bg-red-500 w-1.5 h-1.5 animate-ping" />
          )}
          <span className="flex items-center">
            {proj.projectInSite ? `Live on ${proj.deploymentPlatform}` : 'Coming Soon'}
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
              proj.projectInSite && (
                <img
                  src={proj.projectInSite}
                  alt={`${proj.title} in action`}
                  className="object-cover rounded-lg h-full w-full grid place-items-center"
                />
              )
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
                className="p-3 rounded-full shadow-lg hover:saturate-300 transition bg-linear-to-tr from-muted to-background
                hover:scale-125 hover:rotate-6 duration-300 cursor-default"
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
            <AccordionTrigger style={{color: proj.themeColor, cursor: 'pointer'}}>Description</AccordionTrigger>
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

    )
}