import { useState } from "react";
import { Button } from "../ui/button";
import { GiWorld } from "react-icons/gi";

export interface ClientTestimonialProps {
    id: number
    href: string
    type: 'client' | 'recommendation'
    ratingImgs?: {
        arabicRatingVersionImg?: string
        englishRatingVersionImg?: string
    }
    website: {
        name: 'Khamsat' | 'Mostaql' | 'External',
        img: string
    }
}

export default function ClientTestimonial({test}: {test: ClientTestimonialProps}) {
    const [language, setLanguage] = useState('english')
    
    return <div key={test.id} className="flex flex-col mt-2">
                <Button className="bg-accent hover:bg-primary" onClick={() => setLanguage(prev => (prev === 'arabic') ? "english" : "arabic")}>
                    {language === 'arabic' ? 'Translate To English' : 'Translate To Arabic'} <GiWorld />
                </Button>
                <img
                    className="w-full h-auto max-w-4xl rounded-md object-contain mx-auto"
                    src={language === 'arabic' ?
                            test.ratingImgs?.arabicRatingVersionImg : 
                            test.ratingImgs?.englishRatingVersionImg
                        }
                    alt={language === 'arabic' ? 'Arabic Rating Image' : 'English Rating Image'}
                />
                <Button variant='link'>
                    <a 
                        href={test.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline text-accent hover:text-primary font-medium flex gap-1"
                    >
                        Visit client's review on {test.website.name}
                        <img src={test.website.img} className="h-5" alt={`Freelance website logo (${test.website.name})`}/>
                    </a>
                </Button>
            </div>
}