import { useEffect, useState } from "react";
import { FaArrowCircleUp } from 'react-icons/fa'

export default function ScrollToTopComponent () {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer z-1000 hover:animate-bounce fixed bottom-6 right-6 p-3 rounded-full bg-primary shadow-lg hover:bg-primary/70 transition-all"
          aria-label="Scroll to top"
        >
          <FaArrowCircleUp size={20} color="white"/>
        </button>
      )}
    </div>
  );
};
