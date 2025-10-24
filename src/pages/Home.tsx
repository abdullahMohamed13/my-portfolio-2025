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

export default function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <NavBar />
      <Suspense fallback={null}>
        <FadeInOnScroll direction='left'><About /></FadeInOnScroll>
        <FadeInOnScroll direction='up'><Projects /></FadeInOnScroll>
        <FadeInOnScroll direction='left'><Testimonials /></FadeInOnScroll>
        <FadeInOnScroll direction='down'><Skills /></FadeInOnScroll>
        <FadeInOnScroll direction='left'><Contact /></FadeInOnScroll>
      </Suspense>
    </>
    )
}
