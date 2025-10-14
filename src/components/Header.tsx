import { ModeToggle } from './mode-toggle';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CgProfile, CgHome } from 'react-icons/cg'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BiCodeAlt, BiConversation } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi';
import { useState } from "react";
import { Button } from './ui/button';

const menuStyle = 'border-b-1 cursor-pointer hover:bg-background transition-colors rounded-md pl-2 py-1 text-left'

function Header() {
    const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
    
    return  <header className="sticky z-[2000] top-0 backdrop-blur flex justify-between px-3 py-3 bg-[#140021] [&_*]:no-underline">

        <h1 className="font-mono font-bold text-primary pl-2 border-l-4 border-secondary text-2xl sm:text-3xl">
            <a href="/">Abdallah</a>
        </h1>

        {/* theme-toggle and resume downloader */}
        <div className="flex-center gap-2 sm:gap-2">
            {/* Hamburger Icon for navigation */}
            <div className="inline md:hidden">
                <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                    <PopoverTrigger>
                        <FiMenu className="w-6 h-6 ml-2.5 text-white inline cursor-pointer" />
                    </PopoverTrigger>
                    <PopoverContent className="z-[2001]">
                        <ul className="[&>li]:mt-2 flex flex-col gap-2 -mb-[10px]">
                            <li className={menuStyle}>
                                <a href="#hero" className="w-full flex items-center gap-1">
                                    <CgHome /> Intro
                                </a>
                            </li>   
                            <li className={menuStyle}>
                                <a href="#about" className="w-full flex items-center gap-1">
                                    <CgProfile /> About
                                </a>
                            </li>   
                            <li className={menuStyle}>
                                <a href="#projects" className="w-full flex items-center gap-1">
                                    <VscFolderLibrary /> Projects
                                </a>
                            </li>   
                            <li className={menuStyle}>
                                <a href="#testimonials" className="w-full flex items-center gap-1">
                                    <VscFolderLibrary /> Testimonials
                                </a>
                            </li>   
                            <li className={menuStyle}>
                                <a href="#skills" className="w-full flex items-center gap-1">
                                    <BiCodeAlt /> Skills
                                </a>
                            </li>   
                            <li className={menuStyle}>
                                <a href="#contact" className="w-full flex items-center gap-1">
                                    <BiConversation /> Contact
                                </a>
                            </li>   
                        </ul>
                    </PopoverContent>
                </Popover>
            </div>
            
            <ModeToggle />

            <Button asChild>
                <a href='#contact' className='text-foreground'>Hire Me</a>
            </Button>
        </div>
    </header>;
}

export default Header;