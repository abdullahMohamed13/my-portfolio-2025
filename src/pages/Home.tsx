import { lazy, Suspense } from 'react';
// sections
import { Hero } from '../sections/Hero';
const Projects = lazy(() => import('../sections/Projects'))
const About = lazy(() => import('../sections/About'))
const Skills = lazy(() => import('../sections/Skills'))
const Contact = lazy(() => import('../sections/Contact'))
// Components
import FadeInOnScroll from '../components/FadeInOnScroll';
import Testimonials from '../sections/Testimonials';
import Header from "@/components/Header";
import NavBar from '@/components/NavBar';
import { Helmet } from "react-helmet-async";

export default function App() {
  
  return (
    <>
      <Helmet>  
        <title>Abdallah Aziz | Front-end React Developer</title>  
        <meta name="description" content="Frontend developer skilled in React, TypeScript & Tailwind. I build pixel-perfect, responsive web apps with clean code & smooth UX." />  
        <meta name="keywords" content="Frontend developer, React, JavaScript, TypeScript, Tailwindcss, HTML, CSS, Web developer, Web designer, React developer." />
        <meta property="og:title" content="Abdallah Aziz - Front-end React Developer" />
        <meta property="og:description" content="Frontend developer skilled in React, TypeScript & Tailwind. I build pixel-perfect, responsive web apps with clean code & smooth UX." />
        <meta property="og:image" content="/me.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Abdallah Aziz | Front-end React Developer" />
        <link rel="canonical" href="https://abdallah-aziz.netlify.app/" />  

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Abdallah Aziz",
              "alternateName": [
                "Abdallah Mohamed",
                "Abdallah Mohamed Abdelaziz",
                "Abdallah Mohamed Aziz",
              ],
              "url": "https://abdallah-aziz.netlify.app/",
              "image": "/me.webp",
              "sameAs": [
                "https://www.linkedin.com/in/abdallah-m-aziz"
              ]
            }
          `}
        </script>
      </Helmet>
      
      <Header />
      <Hero />
      <div className='max-w-5xl mx-auto'>
        <NavBar />
        <Suspense fallback={null}>
          <FadeInOnScroll direction='left'><About /></FadeInOnScroll>
          <FadeInOnScroll direction='up'><Projects /></FadeInOnScroll>
          <FadeInOnScroll direction='left'><Skills /></FadeInOnScroll>
          <FadeInOnScroll direction='down'><Testimonials /></FadeInOnScroll>
          <FadeInOnScroll direction='left'><Contact /></FadeInOnScroll>
        </Suspense>
      </div>
    </>
    )
}
