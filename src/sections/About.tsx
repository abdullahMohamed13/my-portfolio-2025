// custom components
import { Separator } from "../components/Separator";
import AnimatedHeader from "../components/AnimatedHeader"
// shadcn/ui
import { Badge } from "@/components/ui/badge";
import { SiNextdotjs }from 'react-icons/si';
import { PiHeart } from "react-icons/pi";
import TrueFocus from "@/components/react-bits/TextAnimations/TrueFocus";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/store/nav-items";

export default function About() {
  return (
    <section id="about" className="relative mt-10 section-padding px-3 sm:px-0 text-center">
      <AnimatedHeader text="About Me" />
      <div className="text-xl leading-8">
          I started coding in September 2022 with <Badge className="bg-[#004482] text-base text-white">C++</Badge> , building simple console apps and discovering the fundamentals of programming.
          It wasn't long before frontend development caught my attention, and I quickly found my passion in web development and design.
          Brining an idea to life through code feels like superpower and I'm grateful that my tools allow me to make that happen.
      </div>

      <div className="max-w-60 my-8 md:max-w-120 mx-auto">
        <Separator />
      </div>

      <div className="text-xl leading-8">
          I would love to connect with fellow developers, designers, and teams who are passionate about creating exceptional web experiences,
          so feel free to reach out
          <PiHeart color="red" size={20} className="ml-1 inline" />
      </div>
      <Button className="uppercase mt-4 bg-linear-to-r hover:from-primary transition-colors duration-1000 hover:to-secondary from-accent to-primary text-white text-2xl px-8 py-7 font-bold rounded-full" onClick={() => scrollToSection('contact')}>Reach Out Now!</Button>
      
      <div className="max-w-60 my-8 md:max-w-120 mx-auto">
        <Separator />
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        <h3 className="text-2xl font-semibold flex-center gap-1 mt-4">
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
              <Badge className="bg-car text-sm sm:text-lg">
                NextJS
                <SiNextdotjs className=" ml-1" size={28}/>
              </Badge>
              <Badge className="bg-card text-sm sm:text-lg">
                Jest
                <img src="/skills/jest.svg" className="h-6 ml-1" />
              </Badge>
            </TrueFocus>
          </div>
        </div>
      </div>
    </section>
  );
}
