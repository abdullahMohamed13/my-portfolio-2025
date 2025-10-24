import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgArrowUp } from 'react-icons/cg';

export default function ScrollToTopComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const toggleVisibility = () => {
      // Debounce to reduce performance impact
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(window.scrollY > 1150);
      }, 100);
    };

    // Use passive event listener for better performance
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="cursor-pointer z-1000 fixed bottom-6 right-6 p-3 rounded-full bg-accent shadow-lg hover:bg-primary transition-all"
          aria-label="Scroll to top"
        >
          <CgArrowUp size={20} color="white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}