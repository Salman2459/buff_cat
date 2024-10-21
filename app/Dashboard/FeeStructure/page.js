'use client'
import React, { useState } from 'react'
import DepositFees from '@/app/components/All Fees/DepositFee'
import WithdrawalFees from '@/app/components/All Fees/WithdrawFee'
import WhaleFees from '@/app/components/All Fees/WhaleFee'



const FeeStructure = () => {
    let [activatedTab, setactivatedTab] = useState('depositfee')

    return (


        <div className='bg-[#170A05] min-h-[100vh] w-full pt-6 '>


            <div>
                <div className='w-full  sm:w-[90%]  m-auto mt-10 '>
                    <div className='h-[70px] bg-[#FFFFFF0F]  '>
                        <ol className='flex h-[70px] justify-around items-center text-white text-[0.68em] sm:text-[0.7em] md:text-[0.9em] font-medium cursor-pointer '>
                            <li className={activatedTab == 'depositfee' ? 'w-full h-[70px] flex justify-center items-center border-b-4 border-[#F3933F]' : 'w-full h-[70px] flex justify-center items-center pl-2 sm:pl-0'} onClick={() => setactivatedTab('depositfee')}>Deposit Fee</li>
                            <li className={activatedTab == 'withdrawfee' ? 'w-full h-[70px] flex justify-center items-center border-b-4 border-[#F3933F] text-center' : 'w-full h-[70px] flex justify-center items-center text-center'} onClick={() => setactivatedTab('withdrawfee')}>Withdraw Fee</li>
                            <li className={activatedTab == 'whalefee' ? 'w-full h-[70px] flex justify-center items-center border-b-4 border-[#F3933F]' : 'w-full h-[70px] flex justify-center items-center '} onClick={() => setactivatedTab('whalefee')}>Whale Fee</li>
                        </ol>
                    </div>
                </div>



                {
                    activatedTab == 'depositfee' ?
                        <div className='px-3 sm:px-10 '>
                            <DepositFees />
                        </div> : activatedTab == 'withdrawfee' ? <div className='px-3 sm:px-10 '>
                            <WithdrawalFees />
                        </div> : <div className='px-3 sm:px-10 '>
                            <WhaleFees />
                        </div>
                }


            </div>

        </div>
            
    )
}

export default FeeStructure