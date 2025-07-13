// import { motion } from 'framer-motion'
import { useState } from "react";
import AnimatedHeader from "../components/AnimatedHeader"
import { Separator } from "../components/Separator";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function About() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <section id="about" className="relative flex-section-center section text-center">
      <AnimatedHeader text="About Me ♞" />

      <p className="text-xl max-w-3xl">
        I got into programming in Sep 2022 via <Badge className="text-lg">C++</Badge>, A frontend developer who loves turning ideas into clean, interactive, and responsive web experiences.
        My tools of choice are <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong> — 
        technologies that help me build fast, beautiful, and maintainable interfaces.
      </p>

      <Separator />

      <p className="text-xl max-w-3xl">
        I love to learn by doing — whether it’s building a new UI patterns.
        I care about both how things look and how they feel.
      </p>

      <Separator />

      <div className="text-xl max-w-3xl">
        <h4 className="text-2xl font-semibold">Outside of coding:</h4>
        <Carousel>
          <CarouselContent>
              <CarouselItem>
                {/* <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-lg border"
                /> */}
            </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        
      </div>
    
      <Separator />

      <div className="w-full max-w-4xl">
        <h3 className="text-2xl font-semibold">My Journey</h3>
        {/* Replace this with an actual timeline component or styled divs */}
        <ul className="text-left">
          <li>📌 <strong>2023:</strong> Started learning web development.</li>
          <li>💡 <strong>2024:</strong> Built several projects using React, TypeScript, Tailwind.</li>
          <li>🚀 <strong>2025:</strong> Polishing portfolio and preparing for frontend opportunities.</li>
        </ul>
      </div>

      <Separator />

      <div className="w-full max-w-4xl">
        <h3 className="text-2xl font-semibold">What’s Next?</h3>
        <p className="text-xl">
          Mastering animations with Framer Motion, contributing to open source, and building tools that actually help people.
        </p>
      </div>
    </section>
  );
}

{/* Top SVG Border */}
{/* <img src="/waves-top.svg" className="absolute top-0 left-0 w-full" alt="" />x */}

{/* Bottom SVG Border */}
{/* <img src="/waves-bottom.svg" className="absolute bottom-0 left-0 w-full" alt="" /> */}