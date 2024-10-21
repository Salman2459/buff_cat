import React from 'react'
import Sidebar from '../components/Sidebar/sidebar'
import Navbar from '../components/UserConnectedNavbar/Navbar'
import Link from 'next/link'


let tokenDetail = [
    {
        name: 'CoinBase',
        img: '/coinbase.png',
        desc: '[Please Lock Liquidity For Transparency]'
    },
    {
        name: 'Binance',
        img: '/binance.png',
        desc: '[Please Lock Liquidity For Transparency]'
    },
    {
        name: 'Crypto',
        img: '/crypto.png',
        desc: '[Please Lock Liquidity For Transparency]'
    },
    {
        name: 'OKX',
        img: '/okx.png',
        desc: '[Please Lock Liquidity For Transparency]'
    },
    {
        name: 'Ku Coin',
        img: '/kucoin.png',
        desc: '[Please Lock Liquidity For Transparency]'
    },
]

const CEXSCoin = ({ name, img, desc }) => {

    return <div>
        <Link href={'/CEXSdata'}>
            <div className='cursor-pointer  w-full sm:w-[450px] min-h-[70px] bg-[#251914] sm:ml-5 sm:mr-5 sm:flex items-center text-white px-3 relative mt-5 sm:mt-10 py-4 sm:py-0 border-l-2 border-[#F3933F]'>
                <div className='flex items-center justify-center sm:justify-normal'>
                    <img src={img} alt="" className='w-[30px] h-[30px] ' />
                    <p className='ml-3 text-[1.1em] font-semibold '>{name}</p>
                </div>
                <p className=' text-[.9em] sm:absolute text-center right-3 text-[#E0E0E0] font-light mt-3 sm:mt-0'>{desc}</p>
            </div>
        </Link>
    </div>
}

const CEXS = () => {
    return (
        <div>
            <div className='flex w-[100%] '>
                <Sidebar className='flex text-black' />
                <div className="rightbar w-[90%] sm:w-[95%] xl:w-[75%] absolute right-0">
                    <Navbar />
                    <div className='bg-[#170A05] min-h-[100vh] w-full pt-6 '>
                        <div>
                            <div className='flex flex-wrap justify-around xl:justify-normal'>
                                {
                                    tokenDetail.map((data,index) => {
                                        return <CEXSCoin key={index} name={data.name} img={data.img} desc={data.desc} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CEXS