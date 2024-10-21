'use client'
import React, { useState,useEffect } from 'react'
import LockingHistoryTable from '../tables/LockingHistoryTable'
import PartialUnlocksTable from '../tables/PartialUnlocksTable'
import DepositHistory from '../tables/DepositHistory'
import WithdrawalHistory from '../tables/Withdrawhistory'
import ClaimedRewards from '../tables/Claimreward'
import UnclaimedRewards from '../tables/UnclaimReward'
import { useRouter } from 'next/navigation'
import { useAccount } from 'wagmi'

const ToatalDataBox = ({ values, data }) => {
    return <div className='m-4 sm:mt-9 py-3  md:py-7 sm:pl-10'>
        <div className='w-[180px] h-[80px] md:w-[200px] md:h-[90px] bg-[#FFFFFF0F] rounded-lg '>
            <h1 className='text-center text-[#F3933F] text-[1.2em] md:text-[1.3em] font-semibold relative top-3 '>{values}</h1>
            <h1 className='text-center mt-4 text-[1em] md:text-[1.qem] font-bold text-white'>{data}</h1>
        </div>
    </div>
}

const UserActivityNavigation = () => {

    let route = useRouter()
    let {address} = useAccount()


    useEffect(()=>{
      if (address.length < 20) {
        route.push('/')
      }
    },[address])

    let [activatedTab, setactivatedTab] = useState('lockingActivity')

    return (
        <div >
            <div className='w-full  sm:w-[90%]  m-auto mt-10 '>
                <div className='h-[70px] bg-[#FFFFFF0F] '>
                    <ol className='flex h-[70px] justify-around items-center text-white text-[0.68em] sm:text-[0.7em] md:text-[0.9em] font-medium cursor-pointer '>
                        <li className={activatedTab == 'lockingActivity' ? 'w-full h-[70px] flex justify-center items-center border-b-4 border-[#F3933F]' : 'w-full h-[70px] flex justify-center items-center pl-2 sm:pl-0'} onClick={() => setactivatedTab('lockingActivity')}>Locking Activity</li>
                        <li className={activatedTab == 'Dep&With' ? 'w-full h-[70px] flex justify-center items-center border-b-4 border-[#F3933F] text-center' : 'w-full h-[70px] flex justify-center items-center text-center'} onClick={() => setactivatedTab('Dep&With')}>Deposits & Withdrawals</li>
                        <li className={activatedTab == 'RewardEarn' ? 'w-full h-[70px] flex justify-center items-center border-b-4 border-[#F3933F]' : 'w-full h-[70px] flex justify-center items-center '} onClick={() => setactivatedTab('RewardEarn')}>Rewards Earned</li>
                    </ol>
                </div>
            </div>

            {
                activatedTab == 'lockingActivity' ?
                    <div className='flex flex-col sm:flex-row items-center'>
                        <ToatalDataBox values={345} data={'Total Locks'} />
                        <ToatalDataBox values={345} data={'Total Unlock'} />
                    </div> : activatedTab == 'Dep&With' ? <div className='flex flex-col sm:flex-row items-center    '>
                        <ToatalDataBox values={345} data={'Total Deposit'} />
                        <ToatalDataBox values={345} data={'Total Withdraw'} />
                    </div> : <div className='flex flex-col sm:flex-row items-center '>
                        <ToatalDataBox values={'$4,500'} data={'Total Reward'} />
                    </div>

            }

            {
                activatedTab == 'lockingActivity' ?
                    <div className='px-3 sm:px-10'>
                        <LockingHistoryTable />
                        <PartialUnlocksTable />
                    </div> : activatedTab == 'Dep&With' ? <div className='px-3 sm:px-10'>
                        <DepositHistory />
                        <WithdrawalHistory />
                    </div> :<div className='px-3 sm:px-10'>
                        <ClaimedRewards />
                        <UnclaimedRewards />
                    </div>
            }


        </div>
    )
}

export default UserActivityNavigation