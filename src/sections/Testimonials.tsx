import { useState } from "react";
import AnimatedHeader from "@/components/AnimatedHeader";
import { Button } from '@/components/ui/button';
import { GiWorld } from "react-icons/gi";

interface TestimonialProps {
    href: string
    ratingImgs?: {
        arabicRatingVersionImg?: string
        englishRatingVersionImg?: string
    }
    website: {
        name: 'Khamsat' | 'Mostaql' | 'External',
        img: string
    }
}

const testimonials:TestimonialProps[] = [
    {
        href: 'https://khamsat.com/user/abdallah_mohamed13/reviews/1092981',
        ratingImgs: {
            arabicRatingVersionImg: '/testimonials/khamsat-portfolio-gig-arabic-version.webp',
            englishRatingVersionImg: '/testimonials/khamsat-portfolio-gig-english-version.webp',
        },
        website: {
            name: 'Khamsat',
            img: '/testimonials/khamsat.svg',
        },
    }
]

export default function Testimonials() {
    const [ratingLanguage, setRatingLanguage] = useState('english')
    return <section id="testimonials" className="section-padding flex-section-center section">
          <AnimatedHeader text="Testimonials" />

          <div className="mx-3">
            {testimonials.map((test, index) => {
                return <div key={index} className="flex flex-col mt-2">
                    <Button className="bg-accent hover:bg-primary" onClick={() => setRatingLanguage(prev => (prev === 'arabic') ? "english" : "arabic")}>
                        {ratingLanguage === 'arabic' ? 'Translate To English' : 'Translate To Arabic'} <GiWorld />
                    </Button>
                    <img
                        className="w-full h-auto max-w-4xl rounded-md object-contain mx-auto"
                        src={ratingLanguage === 'arabic' ?
                                test.ratingImgs?.arabicRatingVersionImg : 
                                test.ratingImgs?.englishRatingVersionImg
                            }
                        alt={ratingLanguage === 'arabic' ? 'Arabic Rating Image' : 'English Rating Image'}
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
            })}
          </div>
        </section>
}