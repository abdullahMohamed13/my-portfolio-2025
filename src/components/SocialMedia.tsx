import { useState } from 'react';
import { SiGithub, SiLinkedin, SiFacebook, SiWhatsapp, SiCodewars } from 'react-icons/si';

export default function SocialMedia() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return <div className="social-media flex-center gap-4 *:text-2xl *:cursor-pointer *:transition-colors">
          <a href="https://github.com/abdullahMohamed13" target='_blank' className='hover:text-amber-900'>
            <SiGithub />
          </a>
          <a href="https://www.linkedin.com/in/abdallah-aziz-999b54295" target='_blank' className='hover:text-[#026ac5]' rel="noopener noreferrer">
            <SiLinkedin />
            </a>
          <a href="https://www.facebook.com/abdllaMohaamad" target='_blank' className='hover:text-blue-500' rel="noopener noreferrer">
            <SiFacebook />
          </a>
          <a href="https://www.codewars.com/users/abdullahMohamed138" target='_blank' className='hover:text-[#e66800]' rel="noopener noreferrer">
            <SiCodewars />
          </a>
          <a title='Copy To Clipboard' onClick={() => copyToClipboard("+201010434465")} className="relative">
            <SiWhatsapp className='hover:text-green-500 transition-colors' />
            {copied && (
              <span 
                className="absolute left-full z-[1000] ml-2 bg-[var(--primary)] text-white px-2 py-1 rounded text-xs whitespace-nowrap animate-pulse">
                Copied!
              </span>
            )}
          </a>
          {/* Add LeetCode in the future */}
        </div>
}
