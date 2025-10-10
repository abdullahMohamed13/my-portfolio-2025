// custom components
import { Separator } from "../components/Separator";
import AnimatedHeader from "../components/AnimatedHeader"
// shadcn/ui
import { Badge } from "@/components/ui/badge";
import { SiNextdotjs }from 'react-icons/si';

import TrueFocus from "@/components/react-bits/TextAnimations/TrueFocus";

export default function About() {
  
  return (
    <section id="about" className="section-padding relative flex-section-center text-center">
      <AnimatedHeader text="About Me" />
      <div className="text-xl px-3 sm:px-0 max-w-3xl leading-8">
        <p>
          I started coding in September 2022 with <Badge className="bg-[#004482] text-white">C++</Badge> , building simple console apps.
          Around that period of time, frontend development caught my eye, since then I've focused on web development and designing.
          Brining an idea to life through code feels like superpower and I'm grateful that my tools allow me to make that happen.
        </p>
      </div>
      
      <Separator />

      <div className="w-full max-w-3xl flex flex-col gap-3">
        <h3 className="text-2xl font-semibold flex items-center gap-1 justify-center mt-4">
          Next Learning Goal On The Queue:
        </h3>
        <div
          className="text-base sm:text-xl flex-center flex-col gap-2 px-4 py-2 pb-5 shadow-sm hover:scale-[1.02]
          transition-transform duration-300"
        >
          <div className="flex items-center">
            <TrueFocus 
              manualMode={false}
              blurAmount={2}
              animationDuration={2}
              pauseBetweenAnimations={2}
              >
                <Badge className="bg-card dark:text-white text-sm sm:text-lg">
                  Jest
                  <img src="/skills/jest.svg" className="h-6 ml-1" />
                </Badge>
                <Badge className="bg-card dark:text-white text-sm sm:text-lg">
                  NextJS
                  <SiNextdotjs className=" ml-1" size={28}/>
                </Badge>
              </TrueFocus>
          </div>
        </div>
      </div>
    </section>
  );
}
