import { Link } from 'react-router-dom';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { FiEye, FiDownload, FiHome } from 'react-icons/fi';


export default function Resume() {
    // const [resumeCurrentPage, setResumeCurrentPage] = useState(1)
    // const inactiveButtonClass = 'cursor-not-allowed opacity-40'
    const resumeImgs = ['/resume-screenshots/Abdallah Aziz Resume.webp']

    return <main className='px-3 md:px-0 pt-5'>
        <header className='flex items-center justify-between mx-4'>
            <a href='/' className='flex items-center gap-2'>
                <img src="/me.webp" className="h-10 sm:h-15 rounded-full" alt="Abdallah's Image" />
                <h1 className="font-mono font-bold text-primary pl-2 border-l-4 border-secondary text-2xl sm:text-3xl">
                    Abdallah
                </h1>
            </a>
            <div className='flex gap-1 items-center'>
                <ModeToggle />
                <Link to='/'>
                    <Button>
                        <FiHome /> Home
                    </Button>
                </Link>
            </div>
        </header>

        <div className='mt-6 flex flex-col items-center justify-center text-center'>
            <code className='text-xl'>
                // A concise overview of my background, skills, and projects in frontend development.
            </code>
        </div>

        <div className='flex my-10 items-center justify-center flex-col gap-3'>
            <div className='relative border-2 shadow border-primary/60 rounded-lg bg-background'>
                <img
                    src={resumeImgs[0]}
                    className='max-h-screen w-full object-contain'
                    alt="Resume Image"
                />
                <div className='absolute bottom-1.5 ml-4 left-1/2 -translate-x-1/2'>
                    <Button asChild className='mr-2 bg-accent'>
                        <a href='/pdf-files/Abdallah-Aziz-Resume.pdf' target="_blank" rel="noopener noreferrer" title='Open Resume'>
                            <FiEye />
                            Open
                        </a>
                    </Button>
                    <Button asChild className='bg-accent'>
                        <a href='/pdf-files/Abdallah-Aziz-Resume.pdf' download title='Download Resume'>
                            <FiDownload />
                            Download
                        </a>
                    </Button>
                </div>
            </div>

            {/* Current Page number */}
            {/* <div>
                <p>Page {resumeCurrentPage.toString()} / {resumeImgs.length}</p>
            </div> */}

            {/* Resume navigation */}
            {/* <div className='flex item-center gap-2'>
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
            </div> */}
        </div>
    </main>
}
