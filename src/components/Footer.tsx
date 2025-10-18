import SocialMedia from '@/components/SocialMedia';
import { FaLanguage } from "react-icons/fa";
import { GiTalk, GiEarthAsiaOceania } from "react-icons/gi";
import { AnimatedTooltip } from './ui/shadcn-io/animated-tooltip';

function Footer() {

  const languages = [
    {
        id: 0,
        name: "Arabic",
        designation: "Native",
        size: 'large',
        image: "/languages/arabic.jpg",
    },
    {
      id: 1,
      name: "English",
      designation: "Go To Certificate",
      size: 'large',
      image: "/languages/english.jpg",
      onClick: () => window.location.href = "/pdf-files/EF SET Certificate.pdf",
    },
    {
        id: 2,
        name: "Spanish",
        designation: "Basic",
        size: 'large',
        image: "/languages/spanish.jpg",
    },
  ]

  return (
    <footer
      className="relative w-full border-t border-[var(--border)] px-4 sm:px-0 py-8 pb-25 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/backgrounds/footer-background.png')" }}
    >
      <main className='flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-4 justify-around'>

        {/* left section */}
        <div className='flex gap-3'>
          <img src="/me.png" className='rounded-full h-20' alt="Picture of Abdallah" />
          <div>
            <h3 className='text-2xl font-bold'>Thanks for Stopping By!</h3>
            <p className='text-muted-foreground'>I'm open for freelance projects & full-time roles.</p>
            <p className='text-muted-foreground'>Let's connect if you're into tech, ideas, or just good conversation.</p>
          </div>
        </div>

        {/* right section */}
        <div className='flex flex-col gap-4 sm:gap-6 *:flex *:flex-col *:gap-1'>
          <div className='flex-center'>
            <p className='text-md flex items-center gap-1.5'><GiTalk className='sm:text-primary' /> Contact Me</p>
            <SocialMedia centered className='mt-1'/>
          </div>
          <div className='flex-center'>
            <p className='text-md flex items-center gap-1.5'><GiEarthAsiaOceania className='sm:text-primary' /> Location</p>
            <p className='flex gap-2 items-center'>
              Cairo, Egypt
              <img title='Egypt' src='egypt.svg' className='h-6' alt='Egyptian Flag' />
            </p>
          </div>
          <div className='flex-center'>
            <p className='text-md mb-2 flex items-center gap-1.5'><FaLanguage className='sm:text-primary' /> Languages</p>
            <div className='flex gap-2'>
              <AnimatedTooltip items={languages} />
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
        {/* <div className='mt-4 [max-width:300px]:hidden'>
          Don't Forget 🙏
          <div>⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛</div>
          <div>🟥🟥🟥🟥⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜</div>
          <div>🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩</div>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;