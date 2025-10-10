import SocialMedia from '@/components/SocialMedia';
import { FaLanguage } from "react-icons/fa";
import { GiTalk, GiEarthAsiaOceania } from "react-icons/gi";
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

function Footer() {

  return (
    <footer
      className="relative w-full text-white border-t border-[var(--border)] px-4 sm:px-0 py-8 pb-25 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/footer-background.png')" }}
    >
      <main className='flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-4 justify-around'>

        {/* left section */}
        <div className='flex gap-3'>
          <img src="/me.png" className='rounded-full h-20' alt="Picture of Abdallah" />
          <div>
            <h3 className='text-2xl font-bold'>Thanks for Stopping By!</h3>
            <p className='text-white/70'>I'm open for freelance projects & full-time roles.</p>
            <p className='text-white/70'>Let's connect if you're into tech, ideas, or just good conversation.</p>
          </div>
        </div>

        {/* right section */}
        <div className='flex flex-col gap-4 sm:gap-6 *:flex *:flex-col *:gap-1'>
          <div className='flex-center'>
            <p className='text-md text-white flex items-center gap-1.5'><GiTalk className='text-white sm:text-primary' /> Contact Me</p>
            <SocialMedia className='flex gap-2 mt-1'/>
          </div>
          <div className='flex-center'>
            <p className='text-md text-white flex items-center gap-1.5'><GiEarthAsiaOceania className='text-white sm:text-primary' /> Location</p>
            <p className='flex gap-2 items-center'>
              Cairo, Egypt
              <img title='Egypt' src='egypt.svg' className='h-6' alt='Egyptian Flag' />
            </p>
          </div>
          <div className='flex-center'>
            <p className='text-md text-white mb-2 flex items-center gap-1.5'><FaLanguage className='text-white sm:text-primary' /> Languages</p>
            <div className='flex gap-2'>
              <span>
                <img src='/languages/arabic.svg' title='Native' className='h-6' alt='Arabic Language' />
              </span>
              <Tooltip>
                <TooltipTrigger>
                  <img onClick={() => window.location.href = '/Abdallah-Aziz-Resume.pdf'} src='/languages/english.svg' className='h-6' alt='English Language' />
                </TooltipTrigger>
                <TooltipContent>Go To Certificate</TooltipContent>
              </Tooltip>
              <span>
                <img src='/languages/spanish.svg' title='Basic' className='h-6' alt='Spanish Language' />
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom section */}
      <div className="text-base text-white mt-8 sm:text-lg text-center *:leading-5.5">
        <div className="text-sm">
          <p className='mb-1'>©2025 Abdallah Aziz All Rights Reserved.</p>
          <p>Built With: ReactJs - TailwindCSS - TypeScript</p>
        </div>
        <div className='mt-4'>
          Don't Forget 🙏
          <div>⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛</div>
          <div>🟥🟥🟥🟥⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜</div>
          <div>🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;