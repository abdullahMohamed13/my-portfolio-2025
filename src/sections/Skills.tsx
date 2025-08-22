import { useState } from 'react';
// ReactBits Components
import GlassIcons from './../components/react-bits/Components/GlassIcons';
// Tech icons
import {
    // Languages 
    SiTypescript, SiJavascript, SiHtml5, SiCss3,
    // frameworks_libraries
    SiReact, SiReactquery, SiReactrouter, SiRedux,
    // UI libraries
    SiTailwindcss, SiMui, SiShadcnui, SiFramer,
    // Tools & Integrations
    SiGithub, SiVite, SiNpm, SiWebpack, SiVercel, SiNetlify, SiClerk,
    // Future skills
    SiNextdotjs, SiGraphql, SiJest,
    SiDocker,
} from 'react-icons/si';
// Arrows Icons
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'
import { FaArrowDown } from 'react-icons/fa'
// Custom Components
import AnimatedHeader from './../components/AnimatedHeader';
// shadcn components
import { Button } from './../components/ui/button'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const iconsStyle: string = `text-[20px] sm:text-[25px] text-black`

const languages = [
    {
        icon: <SiHtml5 />,
        color: '#E34F26',
        label: 'Html5',
        customClass: iconsStyle
    },
    {
        icon: <SiCss3 />,
        color: '#1572B6',
        label: 'CSS3',
        customClass: iconsStyle
    },
    {
        icon: <SiJavascript />,
        color: '#F7DF1E',
        label: 'JavaScript ES6+',
        customClass: iconsStyle
    },
    {
        icon: <SiTypescript />,
        color: '#3178C6',
        label: 'TypeScript',
        customClass: iconsStyle
    },
]

const frameworks_libraries = [
    {
        icon: <SiReact />,
        color: '#61DAFB',
        label: 'React.Js',
        customClass: iconsStyle
    },
    {
        icon: <SiReactrouter />,
        color: '#F44250',
        label: 'React Router',
        customClass: iconsStyle
    },
    {
        icon: <SiRedux />,
        color: '#754ABB',
        label: 'Redux',
        customClass: iconsStyle
    },
    {
        icon: <SiReactquery />,
        color: '#FBD74C',
        label: 'React Query',
        customClass: iconsStyle
    }
]

const styling_ui = [
    {
        icon: <SiTailwindcss />,
        color: '#06B6D4',
        label: 'Tailwind CSS',
        customClass: iconsStyle
    },
    {
        icon: <SiMui />,
        color: '#007FFF',
        label: 'Material UI',
        customClass: iconsStyle
    },
    {
        icon: <SiShadcnui />,
        color: '#6366F1',
        label: 'Shadcn UI',
        customClass: iconsStyle
    },
    {
        icon: <SiFramer />,
        color: '#0055FF',
        label: 'Framer Motion',
        customClass: iconsStyle
    },
]

const tools_integrations = [
    {
        icon: <SiGithub />,
        color: '#24292e',
        label: 'GitHub',
        customClass: iconsStyle
    },
    {
        icon: <SiDocker />,
        color: '#1D63ED',
        label: 'Docker',
        customClass: iconsStyle
    },
    {
        icon: <SiNpm />,
        color: '#CB0000',
        label: 'npm',
        customClass: iconsStyle
    },
    {
        icon: <SiClerk />,
        color: '#BAB1FF',
        label: 'Clerk',
        customClass: iconsStyle
    },
    {
        icon: <SiNetlify />,
        color: '#00B8B5',
        label: 'Netlify',
        customClass: iconsStyle
    },
    {
        icon: <SiVercel />,
        color: '#111',
        label: 'Vercel',
        customClass: iconsStyle
    },
    {
        icon: <SiVite />,
        color: '#646CFF',
        label: 'Vite',
        customClass: iconsStyle
    },
    {
        icon: <SiWebpack />,
        color: '#1c78c0',
        label: 'Webpack',
        customClass: iconsStyle
    },
]

const all = [...languages, ...frameworks_libraries, ...styling_ui, ...tools_integrations].filter(
    // Remove duplicated skills if there's any
    (item, index, arr) => index === arr.findIndex(other => other.label === item.label)
);

const planningToLearn = [
    {
        icon: <SiNextdotjs />,
        color: '#0070f3',
        label: 'Next JS',
        customClass: iconsStyle
    },
    {
        icon: <SiGraphql />,
        color: '#E10098',
        label: 'GraphQL',
        customClass: iconsStyle
    },
    {
        icon: <SiJest />,
        color: '#C63D14',
        label: 'Jest',
        customClass: iconsStyle
    },
]

export default function Skills() {
    const [currentChoice, setCurrentChoice] = useState<string>('all');
    const [showMoreSkills, setShowMoreSkills] = useState<boolean>(true);
    const [popoverOpen, setPopoverOpen] = useState<boolean>(false);

    const handleSkillsExpand = () => {
        setShowMoreSkills(prev => !prev);
    }

    const currentItems =
        currentChoice === 'all' ? all :
        currentChoice === 'languages' ? languages :
        currentChoice === 'frameworks_libraries' ? frameworks_libraries :
        currentChoice === 'styling_ui' ? styling_ui :
        currentChoice === 'tools_integrations' ? tools_integrations :
        currentChoice === 'planningToLearn' ? planningToLearn : [];

    const listItems = [
        { label: "All", fn: () => setCurrentChoice('all') },
        { label: "Languages", fn: () => setCurrentChoice('languages') },
        { label: "Frameworks & Libraries", fn: () => setCurrentChoice('frameworks_libraries') },
        { label: "Styling/UI", fn: () => setCurrentChoice('styling_ui')  },
        { label: "Tools", fn: () => setCurrentChoice('tools_integrations') },
        { label: "What's Next", fn: () => setCurrentChoice('planningToLearn')  },
    ];
    
    return <section id="skills" className='section-padding flex-section-center'>
        <AnimatedHeader text='Skills & Tools' />
        {/* skills navigation on small screens */}
        <nav className='block md:hidden'>
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger>
                    <Button className='bg-accent text-accent-foreground'>
                        {listItems.find(item => 
                            (item.label === "All" && currentChoice === 'all') ||
                            (item.label === "Languages" && currentChoice === 'languages') ||
                            (item.label === "Frameworks & Libraries" && currentChoice === 'frameworks_libraries') ||
                            (item.label === "Styling/UI" && currentChoice === 'styling_ui') ||
                            (item.label === "Tools" && currentChoice === 'tools_integrations') ||
                            (item.label === "What's Next" && currentChoice === 'planningToLearn')
                        )?.label} <FaArrowDown style={{fontSize: '10px'}} />
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    {listItems.map((item, key) => {
                        return <ul className="[&>li]:mt-2">
                                    <li className='cursor-pointer hover:bg-background transition-colors rounded-md pl-2 py-1'
                                        key={key}
                                        onClick={() => {
                                            item.fn()
                                            setPopoverOpen(false);
                                            document.body.focus();
                                        }}
                                    >
                                    {item.label}
                                    </li>
                                </ul>
                    })}
                </PopoverContent>
            </Popover>
        </nav>

        {/* Menubar on bigger screens */}
        <Menubar className='mt-4 hidden md:flex'>
            <MenubarMenu>
                {listItems.map((item, key) => {
                    return <MenubarTrigger key={key} onClick={item.fn}>{item.label}</MenubarTrigger>
                })}
            </MenubarMenu>
        </Menubar>

        {/* Skills Items */}
        <div className="mt-2 flex justify-center">
            <GlassIcons items={showMoreSkills ? currentItems.slice(0, 6) : currentItems} />
        </div>

        {/* "show more" button */}
        {currentItems.length > 6 && (
            <Button className='flex-center gap-1' onClick={handleSkillsExpand}>
                <span>{showMoreSkills ? 'Show More' : 'Show Less' }</span>
                <span>{showMoreSkills ? <FiArrowDown className='animate-bounce' /> : <FiArrowUp className='animate-bounce' />}</span>
            </Button>
        )}
    </section>
}
