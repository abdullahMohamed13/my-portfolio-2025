import { toast } from 'sonner';
import { AnimatedTooltip } from './ui/shadcn-io/animated-tooltip';

const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Whatsapp number copied!",  {
      description: "+201010434465",
      style: {backgroundColor: 'var(--color-accent)', border: 'none', boxShadow: 'none', fontWeight: 'bold', color: '#ffffff'},
    })
}

  const contacts = [
    {
      id: 0,
      name: "LinkedIn",
      designation: "View Profile",
      size: 'medium',
      image: "/contacts/linkedIn.webp",
      onClick: () => window.open("https://www.linkedin.com/in/abdallah-aziz-999b54295", "_blank"),
    },
    {
      id: 1,
      name: "GitHub",
      designation: "Visit Profile",
      image: "/contacts/github.webp",
      size: 'medium',
      onClick: () => window.open("https://github.com/abdullahMohamed13", "_blank"),
    },
    {
      id: 2,
      name: "Gmail",
      designation: "Send Email",
      size: 'medium',
      image: "/contacts/gmail.webp",
      onClick: () => window.open("mailto:abdullah.229op@gmail.com"),
    },
    {
      id: 4,
      name: "WhatsApp",
      designation: "Copy To Clipboard",
      size: 'medium',
      image: "/contacts/whatsapp.webp",
      onClick: () => copyToClipboard("+201010434465"),
    },
  ];

export default function SocialMedia({centered, className}: {centered?: boolean, className?: string}) {

    return <div className={`${centered && 'flex-center gap-5 sm:gap-4'} ${className} *:text-2xl *:cursor-pointer *:transition-colors`}>
          <AnimatedTooltip items={contacts} />
        </div>
}
