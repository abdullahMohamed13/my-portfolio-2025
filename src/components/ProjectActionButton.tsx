import { Button } from "./ui/button";

interface ButtonProps {
    text: string
    href: string
    icon: React.ReactNode
    bgColor: string
}

export default function ProjectActionButton({text, href, icon, bgColor}: ButtonProps) {
    return <Button asChild>
        <a href={href}
            className="flex-center gap-1"
            style={{backgroundColor: bgColor}}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = bgColor + "CC")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
            target="_blank"
        >
            {text} {icon}
        </a>
    </Button>
}
