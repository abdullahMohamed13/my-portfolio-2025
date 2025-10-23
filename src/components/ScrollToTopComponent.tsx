import { useEffect, useState } from "react";
import { CgArrowUp } from 'react-icons/cg';

export default function ScrollToTopComponent () {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1150) {
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
          className="cursor-pointer z-1000 fixed bottom-6 right-6 p-3 rounded-full bg-accent shadow-lg hover:bg-primary transition-all"
          aria-label="Scroll to top"
        >
          <CgArrowUp size={20} color="white"/>
        </button>
      )}
    </div>
  );
};
