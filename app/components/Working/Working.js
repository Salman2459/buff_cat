'use client'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; import { Timeline } from 'antd';

const Working = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <div className='text-white ' data-aos="fade-right">
      <Timeline
        className="custom-timeline mt-28 ml-3 md:ml-10"
        items={[
          {

            children: <div className=' ml-2 md:ml-5 pt-5'> <h1 className='text-[1.7em] font-bold'>How Does Buff Cat Work? </h1>
              <p className='ml-2 text-[1.2em]'>How Does Buff Cat Work? </p>

              <p className='text-[1.1em] font-extrabold mt-3'>1. Lock Your Bags</p>
              <p className='ml-4 text-[.9em] mt-1'>Lock any token of your choice in Buff Cat.</p>

              <p className='text-[1.1em] font-extrabold mt-3'>2. Earn Diverse Rewards</p>
              <p className='ml-4 text-[.9em] mt-1'>Get daily and monthly proportional rewards from other locked tokens in the ecosystem.</p>
              <p className='ml-4 text-[.9em] mt-1'>Rewards include everything from meme coins to high-cap tokens.</p>

              <p className='text-[1.1em] font-extrabold mt-3'>3. Flexible Control</p>
              <p className='ml-4 text-[.9em] mt-1'>Choose your bagging period and unlock your tokens when it's done, or whenever you want; we don’t penalize you.</p>

              <p className='text-[1.1em] font-extrabold mt-3'>4. Grow Your Bags</p>
              <p className='ml-4 text-[.9em] mt-1'>Lock more, reinvest your rewards, or withdraw it all. It’s your call!</p>

              <p className='text-[1.1em] font-extrabold mt-3'>5. Stay Locked</p>
              <p className='ml-4 text-[.9em] mt-1'>Keep at least 3% value locked to continue to earn your redistributed monthly rewards.</p>

              <p className='ml-8 text-[#F39542] text-[.7em] mt-2'>Visual Aid: A simple, interactive timeline or flowchart with animations to showcase the process.</p></div>

          },
          {
            children: <div className='pt-24'>
              <div className='flex flex-col md:flex-row w-[100%] md:w-[60%] h-auto md:h-[100px] bg-[#F39542]  justify-between relative rounded-md'>
                <p className='mt-3 md:ml-3 text-[1.3em] text-center'>Valhalla means achieving great success after huge problems.</p>
                <img src="/Vahalla.png" alt="" width={200} height={200} className='m-auto md:relative -top-[100px]' />
              </div>
            </div>,
          },
          {
            children: <div className=' ml-2 md:ml-5 pt-5'>
              <h1 className='text-[1.7em] font-bold'>Why Choose Buff Cat?</h1>
              <ol>
                <li className='text-[.8em] mt-3'><span className='text-[1.2em] font-bold'>▪ Diversified Rewards:</span> Earn a variety of speculative and established tokens backed by belief and conviction without lifting a finger.</li>
                <li className='text-[.8em] mt-3'><span className='text-[1.2em] font-bold'>▪ Parabolic Gains:</span> Earn a variety of speculative and established tokens backed by belief and conviction without lifting a finger.</li>
                <li className='text-[.8em] mt-3'><span className='text-[1.2em] font-bold'>▪ Market Stability:</span> Earn a variety of speculative and established tokens backed by belief and conviction without lifting a finger.</li>
                <li className='text-[.8em] mt-3'><span className='text-[1.2em] font-bold'>▪ Non-Emotional:</span> Earn a variety of speculative and established tokens backed by belief and conviction without lifting a finger.</li>
                <li className='text-[.8em] mt-3'><span className='text-[1.2em] font-bold'>▪ Memecoin Supercycle:</span> Earn a variety of speculative and established tokens backed by belief and conviction without lifting a finger.</li>
                <li className='text-[.8em] mt-3'><span className='text-[1.2em] font-bold'>▪ Safe Speculation:</span> Earn a variety of speculative and established tokens backed by belief and conviction without lifting a finger.</li>
                <li className='text-[.8em] mt-3'><span className='text-[1.2em] font-bold'>▪ Incentivize CEX’s:</span> Earn a variety of speculative and established tokens backed by belief and conviction without lifting a finger.</li>
                <li className='text-[.8em] mt-3'><span className='text-[1.2em] font-bold'>▪ Faster CEX listings:</span> Earn a variety of speculative and established tokens backed by belief and conviction without lifting a finger.</li>
                <li className='text-[.8em] mt-3'><span className='text-[1.2em] font-bold'>▪ Inclusive for Al:</span> Earn a variety of speculative and established tokens backed by belief and conviction without lifting a finger.</li>

              </ol>
            </div>,
          },
          {
          },
        ]}
      />
    </div>
  )
}

export default Working