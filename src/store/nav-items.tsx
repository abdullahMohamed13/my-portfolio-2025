import { 
  BiHomeAlt, 
  BiUser, 
  BiFolder, 
  BiChat, 
  BiCodeAlt, 
  BiEnvelope 
} from 'react-icons/bi'

export const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

export const navItems = [
    { icon: <BiHomeAlt size={18} />, label: 'Intro', onClick: () => scrollToSection('hero')},
    { icon: <BiUser size={18} />, label: 'About', onClick: () => scrollToSection('about')},
    { icon: <BiFolder size={18} />, label: 'Projects', onClick: () => scrollToSection('projects')},
    { icon: <BiChat size={18} />, label: 'Testimonials', onClick: () => scrollToSection('testimonials')},
    { icon: <BiCodeAlt size={18} />, label: 'Skills', onClick: () => scrollToSection('skills')},
    { icon: <BiEnvelope size={18} />, label: 'Contact', onClick: () => scrollToSection('contact')},
];