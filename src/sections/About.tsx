// custom components
import { Separator } from "../components/Separator";
import AnimatedHeader from "../components/AnimatedHeader"
//#region Importing
// react-bits
// import Carousel from "@/components/react-bits/Components/Carousel";
// react-icons
// import { GiWeightLiftingUp, GiPunch  } from "react-icons/gi";
// import { FaChessKnight, FaFutbol } from "react-icons/fa";
// import { MdSportsBasketball } from 'react-icons/md'
// #endregion
// shadcn/ui
import { Badge } from "@/components/ui/badge";
import { MdWork } from 'react-icons/md'
import { SiJest, SiNextdotjs }from 'react-icons/si';

import { AiOutlineSearch }from 'react-icons/ai';
import TrueFocus from "@/components/react-bits/TextAnimations/TrueFocus";

export default function About() {
  // Hobbies list
  // const carouselItems = [
  //   {
  //     title: "Chess",
  //     description: "I love chess — I got obsessed with it and climbed to the top 0.6% on Chess.com in just 14 months. It was a fun and intense journey.",
  //     id: 1,
  //     icon: <FaChessKnight className="h-[34px] w-[34px] text-white" />,
  //     imgSrc: `/public/me-chess.jpg`
  //   },
  //   {
  //     title: "Mixed Martial Arts",
  //     description: "I've been a fan of MMA for quite some time. Soon, I plan to start training seriously and step into the gym myself.",
  //     id: 2,
  //     icon: <GiPunch className="h-[34px] w-[34px] text-white" />,
  //   },
  //   {
  //     title: "Football",
  //     description: "From 2017 to 2020, I trained as a youth footballer at Zamalek FC. My journey was cut short due to the COVID quarantine, which eventually led me to pursue a different path in life.",
  //     id: 3,
  //     icon: <FaFutbol className="h-[34px] w-[34px] text-white" />,
  //   },
  //   {
  //     title: "Gym",
  //     description: "I’ve been going to the gym consistently since 2022, and it's now a key part of my routine and lifestyle.",
  //     id: 4,
  //     icon: <GiWeightLiftingUp className="h-[34px] w-[34px] text-white" />,
  //   },
  //   {
  //     title: "Basketball",
  //     description: "I tried playing basketball back in 2015, but I was too short for it at that time 🚶🏻‍♂️. Still a pretty fun memory",
  //     id: 5,
  //     icon: <MdSportsBasketball className="h-[34px] w-[34px] text-white" />,
  //   },
  // ];
  
  return (
    <section id="about" className="py-16 sm:pt-0 relative flex-section-center text-center">
      <AnimatedHeader text="About Me" />
      <div className="text-xl max-w-3xl leading-10">
        <p>
          I started programming in September 2022 with <Badge className="text-xl">C++</Badge>. Since then, I've
          focused on frontend development — turning ideas into clean, interactive, and responsive web experiences.
        </p>
        <div className="*:mx-1.5 *:text-xl">
          <span style={{fontWeight: 'normal'}}>My tools of choice are</span>
          <Badge className="bg-[#61DAFB]">React</Badge>
          <Badge className="bg-[#06B6D4]">Tailwind CSS</Badge>
          <Badge className="bg-[#3178C6]">TypeScript</Badge>
        </div>
        <span>
          They allow me to build fast, beautiful, and maintainable websites and interfaces.
        </span>

        <p>
          I learn best by building. Whether it's experimenting with new UI patterns or polishing the details of a layout, I care deeply about how things look, feel, and function. I enjoy crafting user experiences that are not only visually appealing but also intuitive and smooth.
        </p>
      </div>
      
      {/* Hobbies section */}
      {/* <Separator /> */}
      {/* <div className="text-xl max-w-3xl">
        <h3 className="text-2xl font-semibold mb-2.5">Hobbies & Storylines:</h3>
        <Carousel
          items={carouselItems}
          baseWidth={350}
          autoplay={true}
          autoplayDelay={6000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div> */}

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
                  Jest
                  <SiJest size={28} />
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
          <span className="text-foreground hover:text-secondary transition-colors">Secure an entry-level frontend developer position</span>
        </div>
      </div>
    </section>
  );
}
