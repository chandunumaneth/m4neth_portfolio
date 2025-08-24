import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { GridBackgroundDemo } from './ui/Grid'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className="-top-40 -left-10 
            md:-left-32 md:-top-20 h-screen" fill='white' />
            </div>
            <div>
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill='purple' />
            </div>
            <div>
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill='blue' />
            </div>

            <GridBackgroundDemo />

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>WELCOME TO MY DEV IDENTITY</h2>
                    <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Bringing you the Uniqueness'/>
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi! I am m4neth, your Front End Developer :)</p>

                    <a href='#about'>
                        <MagicButton 
                        title="Show My Work"
                        icon={<FaLocationArrow />}
                        position='right'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
