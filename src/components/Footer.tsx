import { FaArrowUp } from 'react-icons/fa';
import SocialMedia from '@/components/SocialMedia';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const copyMsgCSS = ``

function Footer() {
  return (
    <footer className="w-full bg-[var(--card)] text-[var(--foreground)] border-t border-[var(--border)] mt-8 py-6 flex flex-col items-center gap-4">
      {/* Arrow to top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="mb-2 p-2 rounded-full bg-[var(--primary)] text-white shadow hover:bg-opacity-90 transition"
      >
        <FaArrowUp size={20} />
      </button>
      <SocialMedia />
      <div className="text-sm text-center opacity-80">
        ©2025 Abdallah Aziz All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;