import { useState } from 'react';
// Arrows Icons
import { FaArrowDown } from 'react-icons/fa'
// Custom Components
import AnimatedHeader from './../components/AnimatedHeader';
// shadcn components
import { Button } from './../components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsContents, TabsList, TabsTrigger } from '@/components/ui/shadcn-io/tabs';

interface SkillsProps {
    label: string
    color?: string
    img?: string
}

const languages: SkillsProps[] = [
    {
        label: 'Html5',
        color: '#E34F26',
        img: '/skills/html.svg',
    },
    {
        label: 'CSS3',
        color: '#1572B6',
        img: '/skills/css.svg',
    },
    {
        color: '#F7DF1E',
        label: 'JavaScript ES6+',
        img: '/skills/javascript.svg',
    },
    {
        color: '#3178C6',
        img: '/skills/typescript.svg',
        label: 'TypeScript',
    },
]

const frameworks_libraries: SkillsProps[] = [
    {
        label: 'React.Js',
        color: '#61DAFB',
        img: '/skills/react.svg',
    },
    {
        label: 'React Native',
        color: '#61DAFB',
        img: '/skills/react-native.svg',
    },
    {
        label: 'React Router',
        color: '#D00012',
        img: '/skills/react-router.svg',
    },
    {
        label: 'Redux',
        color: '#7748BC',
        img: '/skills/redux.svg',
    },
    {
        color: '#FBD74C',
        label: 'React Query',
        img: '/skills/react-query.svg',
    },
]

const styling_ui: SkillsProps[] = [
    {
        color: '#06B6D4',
        label: 'Tailwind CSS',
        img: '/skills/tailwindcss.svg',
    },
    {
        color: '#007FFF',
        label: 'Material UI',
        img: '/skills/material-ui.svg',
    },
    {
        color: '#6366F1',
        label: 'Shadcn UI',
        img: '/skills/shadcn-ui.svg',
    },
    {
        label: 'Framer Motion',
        color: '#0055FF',
        img: '/skills/framer-motion.jpeg',
    },
]

const tools: SkillsProps[] = [
    {
        color: '#7d3601',
        label: 'GitHub',
        img: '/skills/github.svg',
    },
    {
        color: '#039DEC',
        label: 'Docker',
        img: '/skills/docker.svg',
    },
    {
        color: '#CB0000',
        label: 'npm',
        img: '/skills/npm.svg',
    },
    {
        label: 'Vite',
        color: '#646CFF',
        img: '/skills/vite.svg',
    },
    {
        color: '#1c78c0',
        label: 'Webpack',
        img: '/skills/webpack.svg',
    },
]

const planningToLearn: SkillsProps[] = [
    {
        label: 'Next JS',
        color: '#0070f3',
        img: '/skills/next.svg',
    },
    {
        label: 'GraphQL',
        color: '#E10098',
        img: '/skills/graphql.svg',
    },
    {
        label: 'Jest',
        color: '#973755',
        img: '/skills/jest.svg',
    },
]

const priorityOrder = ['React.Js', 'TypeScript', 'JavaScript ES6+', 'Tailwind CSS', 'Docker'];

const allSkills = [...languages, ...frameworks_libraries, ...styling_ui, ...tools]
    // remove duplicated skills items
    .filter(
        (item, index, arr) =>
            index === arr.findIndex((other) => other.label === item.label)
    )
    .sort((a, b) => {
        const idx1 = priorityOrder.indexOf(a.label);
        const idx2 = priorityOrder.indexOf(b.label);

        // Skills in priorityOrder come first, in the same order
        if (idx1 !== -1 && idx2 === -1) return -1;
        if (idx1 === -1 && idx2 !== -1) return 1;

        // If both are in priorityOrder, sort by their index in it
        if (idx1 !== -1 && idx2 !== -1) return idx1 - idx2;

        //otherwise keep their original order
        return 0;
    });

export default function Skills() {
    const [currentChoice, setCurrentChoice] = useState<string>('all');
    const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
    
    const listItems = [
        { label: "All", fn: () => setCurrentChoice('all') },
        { label: "Languages", fn: () => setCurrentChoice('languages') },
        { label: "Frameworks & Libraries", fn: () => setCurrentChoice('frameworks-libraries') },
        { label: "Styling/UI", fn: () => setCurrentChoice('styling-ui')  },
        { label: "Tools", fn: () => setCurrentChoice('tools') },
        { label: "What's Next", fn: () => setCurrentChoice('next')  },
    ];
    
    const skillsCategories = [
        {
            label:'All',
            value: 'all',
        },
        {
            label:'Languages',
            value: 'languages',
        },
        {
            label:'Frameworks & Libraries',
            value: 'frameworks-libraries',
        },
        {
            label:'Styling/UI',
            value: 'styling-ui',
        },
        {
            label:'Tools',
            value: 'tools',
        },
        {
            label:"What's Next",
            value: 'next',
        },
    ]

    const chosenSkillsCategory =
        currentChoice === 'all' ? allSkills :
        currentChoice === 'languages' ? languages :
        currentChoice === 'frameworks-libraries' ? frameworks_libraries :
        currentChoice === 'styling-ui' ? styling_ui :
        currentChoice === 'tools' ? tools :
        currentChoice === 'next' ? planningToLearn : [];

    const renderSkillsCards = () => {
        return chosenSkillsCategory.map((skill, index) => (
            <div key={index}
                style={{ '--skill-color': skill.color } as React.CSSProperties}
                className={`flex-center flex-col gap-3 text-foreground rounded-lg p-5 transition shadow
                    bg-[color:var(--skill-color)]/50
                    hover:scale-110  hover:brightness-110 hover:saturate-150
                    border-4 border-[color:var(--skill-color)]/40 hover:border-[color:var(--skill-color)]`}>
                <img src={skill.img} className='h-22 w-22 sm:h-30 sm:w-30' />
                <code className='text-center'>{skill.label}</code>
            </div>
        ))
    }

    return <section id="skills" className='section-padding flex-section-center'>
        <AnimatedHeader text='Skills & Tools' />
        {/* skills navigation on small screens */}
        <nav className='block md:hidden'>
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger>
                    <Button>
                        {listItems.find(item => 
                            (item.label === "All" && currentChoice === 'all') ||
                            (item.label === "Languages" && currentChoice === 'languages') ||
                            (item.label === "Frameworks & Libraries" && currentChoice === 'frameworks-libraries') ||
                            (item.label === "Styling/UI" && currentChoice === 'styling-ui') ||
                            (item.label === "Tools" && currentChoice === 'tools') ||
                            (item.label === "What's Next" && currentChoice === 'next')
                        )?.label} <FaArrowDown style={{fontSize: '10px'}} />
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    {listItems.map((item, key) => {
                        return <ul className="[&>li]:mt-2">
                                    <li className='rounded-md pl-2 py-1'
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

        {/* Skills section on mobile */}
        <div className='grid grid-cols-2 md:hidden gap-3 mt-5'>
            {renderSkillsCards()}
        </div>

        {/* Skills section on desktop */}
        <Tabs value={currentChoice} onValueChange={setCurrentChoice} className="rounded-lg hidden md:flex">
            <TabsList className="w-full">
                {skillsCategories.map((cat, index) => {
                    return <TabsTrigger key={index} value={cat.value}>{cat.label}</TabsTrigger>
                })}
            </TabsList>
            <TabsContents className="mx-1 mb-1 -mt-2 rounded-sm h-full">
                <TabsContent value={currentChoice} className="grid md:grid-cols-4 lg:grid-cols-5 p-5 mt-4 gap-5">
                    {renderSkillsCards()}
                </TabsContent>
            </TabsContents>
        </Tabs>

    </section>
}
