import GlassIcons from './../components/react-bits/Components/GlassIcons';
import { SiTypescript, SiTailwindcss, SiJavascript, SiReact, SiHtml5, SiCss3, SiGithub, SiReactrouter, SiVite,
    SiRedux, SiNextdotjs, SiGraphql, SiJest, SiShadcnui, SiFramer, SiNpm} from 'react-icons/si';
import { FiLayers } from 'react-icons/fi'
import { VscVscode } from "react-icons/vsc";

import AnimatedHeader from './../components/AnimatedHeader';
// import { Button } from './../components/ui/button'
import { useState } from 'react';
// import GooeyNav from './../components/react-bits/Components/GooeyNav';

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
        icon: <SiTailwindcss />,
        color: '#06B6D4',
        label: 'Tailwind CSS',
        customClass: iconsStyle
    },
    {
        icon: <SiReactrouter />,
        color: 'white',
        label: 'React Router',
        customClass: iconsStyle
    },
    {
        icon: <SiFramer />,
        color: '#0055FF',
        label: 'Framer Motion',
        customClass: iconsStyle
    },
    {
        icon: <SiRedux />,
        color: 'white',
        label: 'Redux',
        customClass: iconsStyle
    },
]

const styling_ui = [
    {
        icon: <SiTailwindcss />,
        color: '#06B6D4',
        label: 'Tailwind CSS',
        customClass: iconsStyle
    },
    {
        icon: <SiFramer />,
        color: '#0055FF',
        label: 'Framer Motion',
        customClass: iconsStyle
    },
    {
        icon: <SiShadcnui />,
        color: '#6366F1',
        label: 'Shadcn UI',
        customClass: iconsStyle
    },
    {
        icon: <FiLayers />,
        color: '#1E293B',
        label: 'React Bits',
        customClass: iconsStyle
    },
]

const planningToLearning = [
    {
        icon: <SiNextdotjs />,
        color: '#0070f3',
        label: 'Next.js',
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

const tools = [
    {
        icon: <SiGithub />,
        color: '#181717',
        label: 'GitHub',
        customClass: iconsStyle
    },
    {
        icon: <SiVite />,
        color: '#646CFF',
        // #3d1663 | #2a623d
        label: 'Vite',
        customClass: iconsStyle
    },
    {
        icon: <VscVscode />,
        color: '#007ACC',
        label: 'VS Code',
        customClass: iconsStyle
    },
    {
        icon: <SiNpm />,
        color: '#181717',
        label: 'npm',
        customClass: iconsStyle
    },
]

const all = [...languages, ...frameworks_libraries, ...styling_ui, ...tools].filter(
  (item, index, arr) => index === arr.findIndex(other => other.label === item.label)
);

export function Skills() {
    const [currentChoice] = useState<string>('all');
    // const [showMoreSkills, setShowMoreSkills] = useState<boolean>(false);

    // const handleSkillsExpand = () => {
    //     setShowMoreSkills(prev => !prev);
    // }

    const currentItems =
    currentChoice === 'languages' ? languages :
    currentChoice === 'frameworks_libraries' ? frameworks_libraries :
    currentChoice === 'styling_ui' ? styling_ui :
    currentChoice === 'planningToLearning' ? planningToLearning :
    currentChoice === 'tools' ? tools :
    currentChoice === 'all' ? all :
    [];

    // const listItems = [
    //     { label: "All", onClick: () => setCurrentChoice('all') },
    //     { label: "Languages", onClick: () => setCurrentChoice('languages') },
    //     { label: "Frameworks & Libraries", onClick: () => setCurrentChoice('frameworks_libraries') },
    //     { label: "Styling & UI", onClick: () => setCurrentChoice('styling_ui')  },
    //     { label: "Tools", onClick: () => setCurrentChoice('tools') },
    //     { label: "Planning To Learn", onClick: () => setCurrentChoice('planningToLearning')  },
    // ];
    
    return <section id="skills" className='flex-section-center section'>
        <AnimatedHeader text='Skills & Tools' />
        {/* overflow-x problem on mobile */}
        {/* <GooeyNav
            items={listItems}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        /> */}
        <div className="mt-10 flex justify-center">
            <GlassIcons items={currentItems} />
        </div>
        {/* {currentItems.length > 6 &&
        <Button className='flex-center gap-1' onClick={handleSkillsExpand}>
            <span>{showMoreSkills ? 'Show Less' : 'Show More' }</span>
            <span>{showMoreSkills ? <FiArrowUp /> : <FiArrowDown />}</span>
        </Button>} */}
    </section>
}
