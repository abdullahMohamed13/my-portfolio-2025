import { Button } from "./ui/button";
import { FaDownload } from 'react-icons/fa';
import { ModeToggle } from './mode-toggle';

function Header() {
    return <header className="flex justify-between">
        <h1 className="text-3xl relative font-mono group font-light text-secondary pl-2 border-l-4 border-primary">
            Abdallah
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </h1>

        <div className="flex-center gap-2">
            <ModeToggle />
            <Button>
                <a href="/Abdallah_Mohamed.pdf" download>Resume</a>
                <FaDownload/>
            </Button>
        </div>
    </header>;
}

export default Header;