import { SiGithub } from 'react-icons/si';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from 'sonner';

export default function SocialMedia({centered, className}: {centered?: boolean, className?: string}) {

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success("WhatsApp number is copied!");
    }

    return <div className={`${centered && 'flex-center gap-4'} ${className} *:text-2xl *:cursor-pointer *:transition-colors`}>
          <a href="https://github.com/abdullahMohamed13" target='_blank'>
            <SiGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/abdallah-aziz-999b54295" target='_blank' rel="noopener noreferrer">
            <img src='/contacts/linkedin.svg' className='h-6.5' />
          </a>
          <a href="mailto:abdullah.229op@gmail.com" rel="noopener noreferrer">
            <img src='/contacts/gmail.svg' className='h-6.5' />
          </a>
          <Tooltip>
            <TooltipTrigger>
              <a onClick={() => copyToClipboard("+201010434465")} className="relative">
                <img src='/contacts/whatsapp.svg' className='h-6.5' />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              Copy To Clipboard
            </TooltipContent>
          </Tooltip>
        </div>
}
