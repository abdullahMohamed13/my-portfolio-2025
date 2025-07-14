// custom components
import { Separator } from "../components/Separator";
import AnimatedHeader from "../components/AnimatedHeader"
// react-bits
import Carousel from "@/components/react-bits/Components/Carousel";
// shadcn/ui
import { Badge } from "@/components/ui/badge";
// react-icons
import { GiBoxingGlove, GiWeightLiftingUp } from "react-icons/gi"; // GiMuscleUp
import { FaChessPawn, FaFutbol } from "react-icons/fa";
import { MdSportsBasketball, MdWork } from 'react-icons/md'
import { SiNextdotjs, SiReactquery }from 'react-icons/si';

import { AiOutlineSearch }from 'react-icons/ai';
import TrueFocus from "@/components/react-bits/TextAnimations/TrueFocus";

export function About() {
  const carouselItems = [
    {
    title: "Chess",
    description: "I love chess, I was so obsessed with it to the degree that in 14 months I was top 0.6% on Chess.com, it was pretty fun for me.",
    id: 1,
    icon: <FaChessPawn className="h-[16px] w-[16px] text-white" />,
    imgSrc: `/public/me-chess.jpg`
    },
  {
    title: "Mixed Martial Arts",
    description: "Smooth animations for your projects.",
    id: 2,
    icon: <GiBoxingGlove className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Football",
    description: "Reusable components for your projects.",
    id: 3,
    icon: <FaFutbol className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Gym",
    description: "Common UI components are coming soon!",
    id: 5,
    icon: <GiWeightLiftingUp className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Basketball",
    description: "Beautiful backgrounds and patterns for your projects.",
    id: 4,
    icon: <MdSportsBasketball className="h-[16px] w-[16px] text-white" />,
  },
  ]
  return (
    <section id="about" className="relative flex-section-center section text-center">
      <AnimatedHeader text="About Me" />

      <div className="text-xl max-w-3xl leading-10">
        <p>
          I got into programming in Sep 2022 via <Badge className="text-lg">C++</Badge>, A frontend developer who loves turning
          ideas into clean, interactive, and responsive web experiences.
          My tools of choice are
          <strong>
            <Badge className="mx-1.5 text-lg bg-[#61DAFB]">React</Badge>
          </strong>,
          <strong>
            <Badge className="mx-1.5 text-lg bg-[#06B6D4]">Tailwind CSS</Badge>
          </strong>, and
          <strong>
            <Badge className="mx-1.5 text-lg bg-[#3178C6]">TypeScript</Badge>
          </strong>
           — 
          technologies that help me build fast, beautiful, and maintainable interfaces.
        </p>

        <p>
          I love to learn by doing — whether it’s building a new UI patterns.
          I care about both how things look and how they feel.
        </p>
      </div>

      <Separator />
      
      <div className="text-xl max-w-3xl">
        <h3 className="text-2xl font-semibold">Outside Of Coding:</h3>
        <Carousel
          items={carouselItems}
          baseWidth={300}
          autoplay={true}
          autoplayDelay={5000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>

      <Separator />

      <div className="w-full max-w-4xl flex  flex-col gap-3">
        <h3 className="text-2xl font-semibold">Next Goal On The Queue:</h3>
        <div className="text-base sm:text-xl flex-center flex-col gap-2 bg-muted hover:bg-muted/80 px-4 py-2 pb-5 rounded-lg shadow-sm hover:scale-[1.02]
        transition-transform duration-300">
          <div>
            <h4 className="flex items-center gap-2 font-semibold text-primary">
              <AiOutlineSearch className="text-primary" />
              Next Learning Goal:</h4>
          </div>
          <div>
            <TrueFocus 
              sentence="True Focus"
              manualMode={false}
              blurAmount={2}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={2}>
                <Badge className="bg-[#b4b4b4] dark:bg-white text-black text-sm sm:text-lg">
                  React Query
                  <SiReactquery size={24} />
                </Badge>
                <Badge className="bg-[#b4b4b4] dark:bg-white text-black text-sm sm:text-lg">
                  NextJS
                  <SiNextdotjs size={28}/>
                </Badge>
              </TrueFocus>
          </div>
        </div>
        <div className="text-base sm:text-xl flex-center flex-col sm:flex-row gap-2 bg-muted hover:bg-muted/80 px-4 py-2 rounded-lg shadow-sm hover:scale-[1.02]
        transition-transform duration-300">
          
          <h4 className="flex items-center gap-2 font-semibold text-primary">
            <MdWork className="text-primary text-2xl"/>
            Next Career Goal:
          </h4>
          <span className="text-foreground hover:text-secondary transition-colors">Secure a junior-level position</span>
        </div>
      </div>
    </section>
  );
}
