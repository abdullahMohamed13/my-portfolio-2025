import { motion } from "framer-motion";

type Direction = "left" | "right" | "up" | "down";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  direction?: Direction;
  className?: string;
}

export default function FadeInOnScroll({ children, direction = "up", className }: FadeInOnScrollProps) {
  
  const directions = {
    up: { opacity: 0, y: 40, x: 0 },
    down: { opacity: 0, y: -40, x: 0 },
    left: { opacity: 0, x: -60, y: 0 },
    right: { opacity: 0, x: 60, y: 0 },
  };

  return (
    <motion.section
      initial={directions[direction]}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ 
        once: true, 
        amount: 0.1,
      }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={`scroll-mt-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}