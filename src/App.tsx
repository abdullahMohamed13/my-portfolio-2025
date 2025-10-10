import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react';
// sections
import { Hero } from './sections/Hero';
const Projects = lazy(() => import('./sections/Projects'))
const About = lazy(() => import('./sections/About'))
const Skills = lazy(() => import('./sections/Skills'))
const Contact = lazy(() => import('./sections/Contact'))
// Components
import { ThemeProvider } from "@/components/theme-provider"
import FadeInOnScroll from './components/FadeInOnScroll';
import { Toaster } from 'sonner';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Testimonials from './sections/Testimonials';
import ScrollToTopComponent from './components/ScrollToTopComponent';

export default function App() {
  
  return <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <main>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}>
          <NavBar />
          <>
            <Hero />
            <ScrollToTopComponent />
          </>
      </motion.div>

      <Suspense fallback={null}>
        <FadeInOnScroll><About /></FadeInOnScroll>
        <FadeInOnScroll><Projects /></FadeInOnScroll>
        <FadeInOnScroll><Testimonials /></FadeInOnScroll>
        <FadeInOnScroll><Skills /></FadeInOnScroll>
        <FadeInOnScroll><Contact /></FadeInOnScroll>
      </Suspense>
      <Toaster />
    </main>
    <Footer />
  </ThemeProvider>

}
