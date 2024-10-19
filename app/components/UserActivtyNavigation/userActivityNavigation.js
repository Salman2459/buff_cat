import React, { useState } from 'react'
import LockingHistoryTable from '../DashboardNavbar/tables/LockingHistoryTable'
import PartialUnlocksTable from '../DashboardNavbar/tables/PartialUnlocksTable'

const ToatalDataBox = ({ values, data }) => {
    return <div className='m-4 sm:mt-9 py-3  md:py-10 pl-10'>
        <div className='w-[180px] h-[80px] md:w-[250px] md:h-[120px] bg-[#FFFFFF0F] rounded-lg '>
            <h1 className='text-center text-[#F3933F] text-[1.3em] md:text-[1.7em] font-semibold relative top-3 md:top-5 '>{values}</h1>
            <h1 className='text-center mt-4 text-[1em] md:text-[1.6em] font-bold text-white'>{data}</h1>
        </div>
    </div>
}

const UserActivityNavigation = () => {
    let [activatedTab, setactivatedTab] = useState('lockingActivity')

    return (
        <div>
            <div className='w-full sm:w-[85%] md:w-[80%]  m-auto mt-10'>
                <div className='ml-[40px] md:ml-0 h-[70px] bg-[#FFFFFF0F] '>
                    <ol className='flex h-[70px] justify-around items-center text-white text-[0.66em] sm:text-[0.7em] md:text-[0.9em] font-medium cursor-pointer '>
                        <li className={activatedTab == 'lockingActivity' ? 'w-full h-[70px] flex justify-center items-center border-b-4 border-[#F3933F]' : 'w-full h-[70px] flex justify-center items-center pl-2 sm:pl-0'} onClick={() => setactivatedTab('lockingActivity')}>Locking Activity</li>
                        <li className={activatedTab == 'Dep&With' ? 'w-full h-[70px] flex justify-center items-center border-b-4 border-[#F3933F] text-center' : 'w-full h-[70px] flex justify-center items-center text-center'} onClick={() => setactivatedTab('Dep&With')}>Deposits & Withdrawals</li>
                        <li className={activatedTab == 'RewardEarn' ? 'w-full h-[70px] flex justify-center items-center border-b-4 border-[#F3933F]' : 'w-full h-[70px] flex justify-center items-center '} onClick={() => setactivatedTab('RewardEarn')}>Rewards Earned</li>
                    </ol>
                </div>
            </div>

            {
                activatedTab == 'lockingActivity' ?
                    <div className='flex flex-col sm:flex-row items-center sm:ml-[30px] xl:ml-[70px]'>
                        <ToatalDataBox values={345} data={'Total Locks'} />
                        <ToatalDataBox values={345} data={'Total Unlock'} />
                    </div> : activatedTab == 'Dep&With' ? <div className='flex flex-col sm:flex-row items-center'>
                        <ToatalDataBox values={345} data={'Total Deposit'} />
                        <ToatalDataBox values={345} data={'Total Withdraw'} />
                    </div> : <div className='flex flex-col sm:flex-row items-center'>
                        <ToatalDataBox values={'$4,500'} data={'Total Reward'} />
                    </div>

            }

            {
                activatedTab == 'lockingActivity' ?
                    <div className='pl-20 pr-10 '>
                        <LockingHistoryTable />
                        <PartialUnlocksTable />
                    </div> : null
            }


        </div>
    )
}

export default UserActivityNavigation