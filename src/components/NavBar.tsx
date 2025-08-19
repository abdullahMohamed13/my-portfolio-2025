import { useState } from 'react';
import Dock from './react-bits/Components/Dock';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BiCodeAlt } from 'react-icons/bi'

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const items = [
    { icon: <AiFillHome size={18} />, label: 'Intro', onClick: () => scrollToSection('hero')},
    { icon: <CgProfile size={18} />, label: 'About', onClick: () => scrollToSection('about')},
    { icon: <VscFolderLibrary size={18} />, label: 'Projects', onClick: () => scrollToSection('projects')},
    { icon: <BiCodeAlt size={18} />, label: 'Skills', onClick: () => scrollToSection('skills')},
];

function NavBar() {
    const [showNav, setShowNav] = useState<boolean>(true)

    const handleNavExpand = () => {
        setShowNav(prev => !prev);
    }

    return (
        <nav className="fixed bottom-0 left-0 w-full z-[100] justify-center hidden md:flex">
            <div
                className={`relative transition-transform duration-300 ${showNav ? 'translate-y-0' : 'translate-y-18'} w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto`}>
                {/* Toggle Icon at top right of nav bar */}
                
                <button
                    className={`navbar-toggle-arrow absolute ${showNav ? 'bottom-11 sm:right-28' : 'bottom-19 sm:right-68.5'} right-0 border-neutral-700 bg-muted text-foreground rounded-xl shadow-lg p-2 transition-opacity duration-200 hover:bg-opacity-80 focus:outline-none z-10`}
                    onClick={handleNavExpand}
                    title={showNav ? 'Hide navigation' : 'Show navigation'}
                    aria-label={showNav ? 'Hide navigation' : 'Show navigation'}
                    type="button">
                    {showNav ? <FaArrowDown size={16} /> : <FaArrowUp size={12} />}
                </button>

                <div>
                    {/* [#495669] */}
                    <Dock
                        className={`navigation-dock ${!showNav && `pointer-events-none`} bg-muted rounded-t-2xl
                        shadow-2xl px-4 py-2 flex justify-center items-center`}
                        items={items}
                        panelHeight={68}
                        baseItemSize={50}
                        magnification={70}
                    />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;