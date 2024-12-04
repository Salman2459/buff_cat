import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#291B0E] mt-10'>
      <div className='flex'>
        <div className='flex-1 flex justify-center mt-5 text-white items-center'><Link href={'/MainHome'}>Open App</Link></div>
        <div className='flex-1 flex justify-center mt-5 text-white items-center'><Link href={'https://x.com/BuffCatOfficial'}><img src='/mainsX.png' /></Link></div>
        <div className='flex-1 flex justify-center mt-5 text-white items-center' ><Link href={'https://docs.buffcat.org/ '}>Docs</Link></div>

      </div>
    </div>
  )
}

export default Footer