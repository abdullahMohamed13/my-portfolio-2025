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
import { FiMenu } from 'react-icons/fi';
import { useState } from "react";

function Header() {
    const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
    
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const sectionsNamesList = [
        {label: 'Hero', fn: () => scrollToSection('hero')},
        {label: 'About', fn: () => scrollToSection('about')},
        {label: 'Projects', fn: () => scrollToSection('projects')},
        {label: 'Skills', fn: () => scrollToSection('skills')},
    ]

    return <header className="flex justify-between">
        <h1 className="text-3xl relative font-mono group font-light text-secondary pl-2 border-l-4 border-primary">
            Abdallah
            <div className="inline md:hidden">
                <Popover className="" open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger>
                    <FiMenu className="w-6 h-6 ml-3 text-foreground inline cursor-pointer" />
                </PopoverTrigger>
                <PopoverContent>
                    <ul className="[&>li]:mt-2">
                        {sectionsNamesList.map((item, key) => {
                            return <li className='border-b-2 cursor-pointer hover:bg-background transition-colors rounded-md pl-2 py-1'
                            key={key}
                            onClick={() => {
                                item.fn();
                                setPopoverOpen(false);
                            }}
                            >
                                {item.label}
                            </li>
                        })}
                        
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