"use client"

import Image from 'next/image'
import CustomButton from './CustomButton'
const Hero = () => {

    const handleScroll = () => {
        const nextSection = document.getElementById("discover");

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <>
            <div className="hero">
                <div className="flex-1 pt-36 padding-x">
                    <h1 className="hero__title">
                        Trouvez, réservez et louez votre supercar sur la Côte d'Azur !
                    </h1>
                    <p className="hero__subtitle">
                        Prenez dès aujourd'hui le volant de voitures d'exception.
                    </p>

                    <CustomButton
                        title="Découvrez nos véhicules"
                        containerStyles="bg-primary-blue text-white rounded-full mt-10"
                        handleClick={handleScroll}
                    />
                </div>
                <div className="hero__image-container">
                    <div className="hero__image">
                        <Image src="/hero.png" alt="hero"
                            fill className="object-contain" />
                    </div>
                    <div className="hero__image-overlay" />

                </div>
            </div >
        </>

    )
}

export default Hero