import { useState } from 'react';
import Dock from './react-bits/Components/Dock';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { navItems } from '@/store/nav-items';

// Navbar on desktop
function NavBar() {
    const [showNav, setShowNav] = useState<boolean>(true)

    const handleNavExpand = () => {
        setShowNav(prev => !prev);
    }

    return (
        <nav className="fixed bottom-0 left-0 w-full z-100 justify-center hidden md:flex">
            <div
                className={`relative transition-transform duration-300 ${showNav ? 'translate-y-0' : 'translate-y-18'} w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto`}
            >
                
                {/* navbar-toggle-arrow  */}
                <button
                    className={`absolute right-0 border-neutral-700 bg-muted text-foreground cursor-pointer rounded-xl shadow-lg p-2 transition-opacity duration-200 hover:bg-opacity-80 focus:outline-none z-10
                         ${showNav ? 'bottom-11 sm:right-11' : 'bottom-19 sm:right-68.5'}`}
                    onClick={handleNavExpand}
                    title={showNav ? 'Hide navigation' : 'Show navigation'}
                    aria-label={showNav ? 'Hide navigation' : 'Show navigation'}
                    type="button">
                    {showNav ? <AiOutlineClose size={16} /> : <AiOutlineMenu size={12} />}
                </button>

                <div>
                    <Dock
                        className={`${!showNav && `pointer-events-none`} bg-background rounded-t-2xl
                        shadow-2xl px-4 py-2 flex justify-center items-center`}
                        items={navItems}
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