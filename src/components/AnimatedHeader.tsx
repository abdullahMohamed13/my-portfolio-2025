import { useRef, useState, useEffect } from 'react';
import ShinyText from './react-bits/TextAnimations/ShinyText';
import VariableProximity from './react-bits/TextAnimations/VariableProximity';

interface TextProps {
    text: string
    className?: string
}

export default function AnimatedHeader({text, className}: TextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [useFallback, setUseFallback] = useState(false);
    
    // Check if font variation settings are supported
    useEffect(() => {
        const testElement = document.createElement('span');
        testElement.style.fontVariationSettings = "'wght' 400";
        const isSupported = testElement.style.fontVariationSettings !== '';
        
        if (!isSupported) {
            console.log('Font variation settings not supported, using fallback');
            setUseFallback(true);
        }
    }, []);
    
    if (useFallback) {
        return (
            <ShinyText 
                text={text}
                className={`${className} text-primary font-mono text-4xl flex-center`} 
            />
        );
    }
    
    return (
        <div
            ref={containerRef}
            className="relative font-bold mb-5">
            <VariableProximity
                label={text}
                className={`variable-proximity-demo text-4xl font-bold ${className || ''}`}
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef}
                radius={150}
                falloff='linear'
                style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    cursor: 'default',
                    color: 'var(--secondary)'
                }}
            />
        </div>
    );
}