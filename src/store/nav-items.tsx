import { AiFillHome } from 'react-icons/ai'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BiCodeAlt } from 'react-icons/bi'
import { MdContactMail } from "react-icons/md";
import { FaQuoteLeft, FaRegEnvelope } from 'react-icons/fa'

export const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

export const navItems = [
    { icon: <AiFillHome size={18} />, label: 'Intro', onClick: () => scrollToSection('hero')},
    { icon: <MdContactMail size={18} />, label: 'About', onClick: () => scrollToSection('about')},
    { icon: <VscFolderLibrary size={18} />, label: 'Projects', onClick: () => scrollToSection('projects')},
    { icon: <FaQuoteLeft size={18} />, label: 'Testimonials', onClick: () => scrollToSection('testimonials')},
    { icon: <BiCodeAlt size={18} />, label: 'Skills', onClick: () => scrollToSection('skills')},
    { icon: <FaRegEnvelope size={18} />, label: 'Contact', onClick: () => scrollToSection('contact')},
];