import { Button } from "./ui/button";
import { FaDownload } from 'react-icons/fa';
import { ModeToggle } from './mode-toggle';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { CgProfile, CgHome } from 'react-icons/cg'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BiCodeAlt, BiConversation } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi';
import { useState } from "react";

const menuStyle = 'border-b-1 cursor-pointer hover:bg-background transition-colors rounded-md pl-2 py-1 text-left'

function Header() {
    const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
    
    return <header className="flex justify-between">
        <div className="flex items-center font-mono font-light text-secondary pl-2 border-l-4 border-primary">
            {/* Name + underline wrapper */}
            <div className="relative group inline-block">
            <h1 className="text-3xl">Abdallah</h1>
            <span className="absolute -left-2.5 -bottom-1 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-[calc(100%+10px)]" />
            </div>

            {/* Hamburger Icon for navigation */}
            <div className="inline md:hidden">
                <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                    <PopoverTrigger>
                        <FiMenu className="w-6 h-6 ml-2.5 text-foreground inline cursor-pointer" />
                    </PopoverTrigger>
                    <PopoverContent>
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
        </div>

        {/* theme-toggle and resume downloader */}
        <div className="flex-center gap-1 sm:gap-2">
            <ModeToggle />
            <Tooltip>
                <TooltipTrigger>
                    <Button>
                        <a href="/Abdallah_Mohamed_Resume.pdf" download>Resume</a>
                        <FaDownload/>
                    </Button>
                </TooltipTrigger>
                {/* Show on hover */}
                <TooltipContent>
                    <p className="text-white">Download</p>
                </TooltipContent>
            </Tooltip>
        </div>
    </header>;
}

export default Header;