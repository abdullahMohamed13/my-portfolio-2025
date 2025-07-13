import NavBar from './components/NavBar';
import { About } from './sections/About';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { motion } from 'framer-motion'
import Footer from './components/Footer';
import { ThemeProvider } from "@/components/theme-provider"
import Header from './components/Header';
import Contact from './sections/Contact';

export default function App() {
  
  return <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <main className='mx-3 mt-3'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}>
          <Header />
          <Hero />
          <About />
          <Projects/>
          <Skills />
          
          <NavBar />
          <Contact />
      </motion.div>
    </main>
    <Footer />
  </ThemeProvider>

}
