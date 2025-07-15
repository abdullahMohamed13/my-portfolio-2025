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
import { AiFillHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BiCodeAlt } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi';
import { useState } from "react";

const menuStyle = 'border-b-1 cursor-pointer hover:bg-background transition-colors rounded-md pl-2 py-1 text-left'

function Header() {
    const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
    
    return <header className="flex justify-between">
        <h1 className="text-3xl relative font-mono group font-light text-secondary pl-2 border-l-4 border-primary">
            Abdallah
            <div className="inline md:hidden">
                <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger>
                    <FiMenu className="w-6 h-6 ml-3 text-foreground inline cursor-pointer" />
                </PopoverTrigger>
                <PopoverContent>
                    <ul className="[&>li]:mt-2 flex flex-col gap-2">
                        <li className={menuStyle}>
                            <a href="#hero" className="w-full flex items-center gap-1">
                                <AiFillHome/> Intro
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
                    </ul>
                </PopoverContent>
            </Popover>
            </div>
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
            
        </h1>

        <div className="flex-center gap-2">
            <ModeToggle />
            <Tooltip>
                <TooltipTrigger>
                    <Button>
                        <a href="/Abdallah_Mohamed.pdf" download>Resume</a>
                        <FaDownload/>
                    </Button>
                </TooltipTrigger>
                {/* Show on hover */}
                <TooltipContent>
                    <p className="text-white">Download my resume</p>
                </TooltipContent>
            </Tooltip>
        </div>
    </header>;
}

export default Header;