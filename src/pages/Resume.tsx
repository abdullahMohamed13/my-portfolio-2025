import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { FiEye, FiDownload, FiHome } from 'react-icons/fi';


export default function Resume() {
    const [resumeCurrentPage, setResumeCurrentPage] = useState(1)
    const inactiveButtonClass = 'cursor-not-allowed opacity-40'
    const resumeImgs = ['/resume-screenshots/page-1.png', '/resume-screenshots/page-2.png']

    return <main className='px-3 md:px-0'>
        <header className='flex items-center justify-between p-4'>
            <a href='/' className='flex items-center gap-3'>
                <img src="/me.png" className="h-15 w-15 rounded-full" alt="Abdallah's Image" />
                <h1 className="font-mono font-bold text-primary pl-2 border-l-4 border-secondary text-2xl sm:text-3xl">
                    Abdallah
                </h1>
            </a>
            <ModeToggle />
        </header>

        <Link to='/' className='flex justify-center md:justify-end items-center gap-2 md:mr-3 mt-3 text-primary'>
            <FiHome /> Return Home
        </Link>
        <div className='mt-6 flex flex-col items-center justify-center text-center'>
            <code className='text-xl'>
                // A concise overview of my background, skills, and projects in frontend development.
            </code>
        </div>

        <div className='flex my-10 items-center justify-center flex-col gap-3'>
            <div className='relative border-2 shadow border-primary/60 rounded-md bg-background'
            >
                <img src={resumeImgs[resumeCurrentPage - 1]}
                alt="Resume Image" />
                <div className='absolute top-1.5 right-1.5 md:top-3 md:right-3'>
                    <Button variant='outline' className='mr-2'>
                        <a href='/pdf-files/Abdallah-Aziz-Resume.pdf' title='Show'>
                            <FiEye color='var(--color-primary)' />
                        </a>
                    </Button>
                    <Button variant='outline'>
                        <a href='/pdf-files/Abdallah-Aziz-Resume.pdf' download title='Download Resume'>
                            <FiDownload color='var(--color-primary)' />
                        </a>
                    </Button>
                </div>
            </div>
            <div>
                <p>Page {resumeCurrentPage.toString()} / {resumeImgs.length}</p>
            </div>
            <div className='flex item-center gap-2'>
                <Button
                    className={`${resumeCurrentPage === 1 && inactiveButtonClass}`}
                    onClick={(e) => {
                        e.preventDefault()
                        setResumeCurrentPage(1)
                    }}
                    >
                    Prev
                </Button>
                <Button
                    className={`${resumeCurrentPage === 2 && inactiveButtonClass}`}
                    onClick={(e) => {
                        e.preventDefault()
                        setResumeCurrentPage(2)
                    }}
                >
                    Next
                </Button>
            </div>
        </div>
    </main>
}
