'use client'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';


const HeroSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: "ease-in-out", 
            once: true, 
            mirror: false,
        });
    }, []);

    return (
        <div className='px-5 md:px-10'>
            <div className='flex  flex-col md:flex-row'>
                <div className='pt-10 md:pt-20 h-[70vh] flex-1 px-4 xl:px-20 md:px-10 xl:flex xl:flex-col xl:justify-center' data-aos="fade-right">
                    <h1 className=' flex flex-col text-2xl sm:text-4xl 2xl:text-6xl  pt-10 text-center md:text-left'>
                        <span className='text-white  Dosis font-bold '>Experience Parabolic Gains</span>
                        <span className='outlined-text  Dosis font-bold mt-4'> ZERO RISK - ZERO DYOR - </span>
                        <span className='text-white outline-text Dosis  font-bold mt-4'>ZERO FOMO </span>
                    </h1>
                    <p className='text-white mt-8 text-[.7em] sm:text-[.8em] flex md:items-center justify-center md:justify-normal'><span className='text-[1em] sm:text-[1.2em] font-bold mr-1 text-[#F3933F]'>“Bagging”- </span> Lock your bags, and earn other people's bags</p>
                    <button className='text-white bg-gradient-to-r from-[#EFCB97] to-[#F3933F] px-[25px] py-[15px]  rounded-md m-auto md:m-0 !mt-8 block max-w-[200px]'><Link href={'/MainHome'}>Start Bagging Today</Link></button>
                </div>

                <div className='pt-10 h-[70vh] flex items-center justify-center flex-1 ' data-aos="fade-right">
                    <img src="/HeroBuff.jpeg" alt="" className='w-[60%] h-[60vh] sm:w-[70%] sm:h-[70vh] transform scale-x-[-1]' />
                </div>
            </div>

            <div>
                <div className="rounded-md w-[95%] md:w-[80%] min-h-[200px] p-5 bg-[#f39542] m-auto d-block mt-28 !mb-20 " data-aos="fade-up">
                    <h1 className='text-center text-[#eeeeee] font-semibold text-[1.5em] Dosis'>What Is Bagging?</h1>
                    <p className='text-white md:px-10 leading-[18px] text-justify md:text-center text-[.8em] md:text-[.9em]'>A next-generation DeFi innovation where you can lock any token you strongly believe in and passively earn a diverse portfolio of other tokens that other people believed enough in to lock up.

                        Don’t you hate seeing those $10,000x gains that rarely happen and wish you bought some?

                        Buff Cat allows you to earn it, experiencing these parabolic gains with no risk.

                        Don’t you hate when you sell your most believed-in tokens too early because you fear that you will miss out on other gains?

                        Buff Cat incentivizes you to stay disciplined with your bags, by earning other people's most believed-in tokens, removing the fear of missing out.

                        Don't you hate it when after a token pumps, it dumps just as much and doesn't stabilize itself?

                        Buff Cat gives low-cap coins a place to lock liquidity to stabilize the low-cap market.

                        Don’t you hate not knowing how to do good enough research to find the best tokens to buy?

                        Buff Cat shows you all the tokens others strongly believe in, eliminating the need for you to do technical research.
                    </p>
                    <p className='text-[#eeeeee] text-center text-[.7em] mt-2'>
                        <b className=''>Visual Aid</b>: A dynamic infographic showing tokens being locked (bagged) and rewards <br></br> flowing back in a variety of tokens. (And or, a info graphic for each pain point)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection