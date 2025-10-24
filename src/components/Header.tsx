import { ModeToggle } from './mode-toggle';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FiMenu } from 'react-icons/fi';
import { useEffect, useState } from "react";
import { Button } from './ui/button';
import { navItems, scrollToSection } from '@/store/nav-items';

function Header() {
    const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 995);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return <header className="sticky z-2000 top-0 backdrop-blur flex justify-between p-3">

        <h1 id='header' className={`${scrolled ? 'scrolled-header' : ''}
        font-mono font-bold text-primary pl-2 border-l-0 border-accent text-2xl sm:text-3xl`}>
            <a href="/">Abdallah</a>
        </h1>

        <div className="flex-center gap-2">
            {/* Hamburger Icon for navigation */}
            <nav className="inline md:hidden">
                <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                    <PopoverTrigger>
                        <FiMenu className="w-6 h-6 inline cursor-pointer" />
                    </PopoverTrigger>
                    <PopoverContent className="flex flex-col gap-4.5 py-3 pl-3 -pb-5 z-2001">
                        {navItems.map((item, key) => {
                            return <div className='w-full flex items-center gap-2.5' key={key} onClick={() => {
                                item.onClick();
                                setPopoverOpen(false);
                                document.body.focus();
                            }}>
                                {item.icon} {item.label}
                            </div>
                        })}
                    </PopoverContent>
                </Popover>
            </nav>
            
            <ModeToggle />

            <Button onClick={() => scrollToSection('contact')} className={`${scrolled && 'scrolled-header-button'} text-white`}>Hire Me</Button>
        </div>
    </header>;
}

export default Header;