'use client'
import Sidebar from '@/app/components/Sidebar/sidebar'
import Navbar from '@/app/components/UserConnectedNavbar/Navbar'
import { useParams } from 'next/navigation'
import React from 'react'

const VsTAbTAble = () => {

    let params = useParams()

    const data = {
        partialUnlocks: [
            {
                Investor: 'Solana',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'Solana',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'Solana',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'Solana',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'Solana',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'Aptos',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'Aptos',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'Aptos',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'Aptos',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'Aptos',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'SUI',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'SUI',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'SUI',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'SUI',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'SUI',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'Avalanche',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'Avalanche',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'Avalanche',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'Avalanche',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'Avalanche',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'OPTIMISM',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'OPTIMISM',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'OPTIMISM',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'OPTIMISM',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            },
            {
                Investor: 'OPTIMISM',
                Token: 'SQL',
                LockedAmount: '1,000,000',
                UnlockDate: '01/15/2025',
                VestingPeriod: '12 months'
            }
        ],
    };

    return (
        <div className='flex w-[100%] '>
            <Sidebar className='flex text-black' />
            <div className="rightbar w-[90%] sm:w-[95%] xl:w-[75%] absolute right-0">
                <Navbar />
                <div className='bg-[#170A05] min-h-[100vh] w-full pt-6 px-5 '>
                    <div className="text-white rounded-lg mt-14 relative">

                        <h1 className='text-white font-semibold text:[28px] sm:text-[34px] Jost text-left lg:ml-10 mt-5'>Institutional Vesting Schedules</h1>

                        <div className='flex flex-col lg::flex-row pt-10 pb-16'>
                            <div className="relative flex items-center w-[80%]  lg:w-80 m-auto lg:m-0">
                                <input
                                    type="text"
                                    className=" pl-4 pr-10 py-2 border border-[#7E7E7E] rounded-full focus:outline-none w-full lg::w-[300px] bg-[#1A0B06] text-white m-auto lg:ml-10 "
                                    placeholder="Search for institutional investors or tokens."
                                />
                                <svg
                                    className="absolute right-2"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.3569 16.0416H17.4599L17.142 15.735C18.2933 14.3998 18.926 12.6951 18.9246 10.9321C18.9246 9.47241 18.4918 8.0455 17.6808 6.83181C16.8699 5.61811 15.7172 4.67216 14.3686 4.11356C13.02 3.55496 11.5361 3.4088 10.1045 3.69357C8.67281 3.97834 7.35776 4.68125 6.3256 5.71341C5.29344 6.74557 4.59053 8.06063 4.30576 9.49227C4.02098 10.9239 4.16714 12.4079 4.72574 13.7564C5.28434 15.105 6.2303 16.2577 7.44399 17.0686C8.65768 17.8796 10.0846 18.3125 11.5443 18.3125C13.3723 18.3125 15.0528 17.6425 16.3472 16.5298L16.6538 16.8477V17.7447L22.3309 23.4106L24.0228 21.7188L18.3569 16.0416ZM11.5443 16.0416C8.71705 16.0416 6.43482 13.7593 6.43482 10.9321C6.43482 8.10487 8.71705 5.82264 11.5443 5.82264C14.3715 5.82264 16.6538 8.10487 16.6538 10.9321C16.6538 13.7593 14.3715 16.0416 11.5443 16.0416Z"
                                        fill="#EFCB97"
                                    />
                                </svg>
                            </div>
                            <div className=' flex flex-col sm:flex-row  items-center sm:justify-around lg:justify-normal lg:absolute right-10 mt-10 lg:mt-0'>
                                <select className='w-[130px] h-[45px] bg-[#31231F] rounded-full px-3 border border-[#FFFFFF59] outline-none lg:mr-8 mt-5 sm:mt-0'>
                                    <option disabled selected>Date</option>
                                    <option>1 Nov</option>
                                    <option>2 Nov</option>
                                    <option>3 Nov</option>
                                    <option>4 Nov</option> 

                                </select>

                                <select className='w-[130px] h-[45px] bg-[#31231F] rounded-full px-3 border border-[#FFFFFF59] outline-none mt-5 sm:mt-0'>
                                    <option disabled selected>Token</option>
                                    <option>1 Nov</option>
                                    <option>2 Nov</option>
                                    <option>3 Nov</option>
                                    <option>4 Nov</option>

                                </select>

                                <select className='w-[130px] h-[45px] bg-[#31231F] rounded-full px-3 border border-[#FFFFFF59] outline-none lg:ml-8 mt-5 sm:mt-0'>
                                    <option disabled selected>Investor</option>
                                    <option>1 Nov</option>
                                    <option>2 Nov</option>
                                    <option>3 Nov</option>
                                    <option>4 Nov</option>

                                </select>
                            </div>
                        </div>


                        <h2 className="text-[18px] sm:text-[25px] font-bold Jost mb-1 lg:ml-10  ">Vesting Schedule List:</h2>
                        <div className="overflow-auto mt-5 max-h-[350px] tableScroler2 lg:ml-10 ">
                            <table className="w-full md:w-[600px] bg-[#0C0507]">
                                <thead className="bg-[#31231F] h-[70px]">
                                    <tr className=" border-b border-gray-700 text-center">
                                        <th className="py-2 px-4 text-[14px] font-bold rounded-tl-[10px] rounded-tr-[0px]">Insvestor</th>
                                        <th className="py-2 px-4 text-[14px] font-bold">Token</th>
                                        <th className="py-2 px-4 text-[14px] font-bold rounded-tl-[0px]">Locked Amount</th>
                                        <th className="py-2 px-4 text-[14px] font-bold rounded-tl-[0px]">Unlock Date</th>
                                        <th className="py-2 px-4 text-[14px] font-bold rounded-tl-[0px] rounded-tr-[10px]">Vesting Period</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.partialUnlocks.map((item, index) => {
                                        if (params.VS.toLowerCase() == item.Investor.toLowerCase()) {
                                            return <tr key={index} className="border-b border-gray-800 text-center">
                                                <td className="py-2 px-4 flex items-center">{item.Investor}</td>
                                                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.Token}</td>
                                                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.LockedAmount}</td>
                                                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.UnlockDate}</td>
                                                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.VestingPeriod}</td>

                                            </tr>
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VsTAbTAble