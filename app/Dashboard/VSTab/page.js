import React from 'react'
import Link from 'next/link'

let tokenDetail = [
    {
        name: 'Solana',
        img: '/solana.png',
        desc: '[Please Make Vesting Schedule Transparent]'
    },
    {
        name: 'SUI',
        img: '/sui.png',
        desc: '[Please Make Vesting Schedule Transparent]'
    },
    {
        name: 'Avalanche',
        img: '/avalanche.png',
        desc: '[Please Make Vesting Schedule Transparent]'
    },
    {
        name: 'Optimism',
        img: '/optimism.png',
        desc: '[Please Make Vesting Schedule Transparent]'
    },
    {
        name: 'Aptos',
        img: '/aptos.png',
        desc: '[Please Make Vesting Schedule Transparent]'
    },
]

const VsTabCoin = ({ name, img, desc }) => {

    return <div>
        <Link href={'./VSTab/' + name}>
            <div className='cursor-pointer  w-full sm:w-[450px] min-h-[70px] bg-[#251914]  sm:mr-5 sm:flex items-center text-white px-3 relative mt-5  sm:mt-10 py-4 sm:py-0 border-l-2 border-[#F3933F]'>
                <div className='flex items-center justify-center sm:justify-normal'>
                    <img src={img} alt="" className='w-[30px] h-[30px] ' />
                    <p className='ml-3 text-[1.1em] font-semibold '>{name}</p>
                </div>
                <p className=' text-[.9em] sm:absolute text-center right-3 text-[#E0E0E0] font-light mt-3 sm:mt-0'>{desc}</p>
            </div>
        </Link>
    </div>
}

const VStab = () => {
    return (

        <div className='bg-[#170A05] min-h-[100vh] w-full pt-6 px-2 sm:px-5 '>
            <div className='flex flex-wrap justify-around xl:justify-normal'>
                {
                    tokenDetail.map((data, index) => {
                        return <VsTabCoin key={index} name={data.name} img={data.img} desc={data.desc} />
                    })
                }
            </div>
        </div>

    )
}

export default VStab