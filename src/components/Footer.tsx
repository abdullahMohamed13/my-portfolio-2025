import { FaArrowUp } from 'react-icons/fa';
import SocialMedia from '@/components/SocialMedia';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function Footer() {
  return (
    <footer className="w-full bg-[var(--card)] text-[var(--foreground)] border-t border-[var(--border)] mt-8 py-6 pb-12 flex flex-col items-center gap-4">
      {/* Arrow to top */}
      <Tooltip>
        <TooltipTrigger>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="mb-2 p-2 rounded-full bg-[var(--primary)] text-white shadow hover:bg-opacity-90 transition"
          >
            <FaArrowUp size={20} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p className='text-white'>Scroll to top</p>
        </TooltipContent>
      </Tooltip>
      
      <SocialMedia />
      <div className="text-sm text-center opacity-80">
        <p className='mb-1'>©2025 Abdallah Aziz All Rights Reserved.</p>
        <p>Built By <b className='text-base'>Me</b> With:</p>
        <p>ReactJs - TailwindCSS - TypeScript</p>
      </div>
      <div className="text-base sm:text-lg text-center *:leading-5.5 opacity-80">
        Don't Forget 🙏
        <p>⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛</p>
        <p>🟥🟥🟥🟥⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜</p>
        <p>🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩</p>
      </div>
    </footer>
  );
}

export default Footer;