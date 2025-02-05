import { GetTotalLocked, GetuserLocked } from '@/app/ContractFunction'
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

const Dashboard = () => {
    const {address} = useAccount()
    const [TotalLocked,setTotalLocked] = useState(0)
    const [TotalUserLocked,setTotalUserLocked] = useState(0)
    const [ExpectedReward,setExpectedReward] = useState(0)
    const [totalClaimableReward,settotalClaimableReward] = useState(0)
    const [totalRewardClaimed,settotalRewardClaimed] = useState(0)



    useEffect(()=>{
        const GetUserLocked = async () =>{
          const Locked = await GetuserLocked(address)
          const TotalLocked = await GetTotalLocked()
          setTotalLocked(String(Number(TotalLocked) / 1e18).slice(0,6))
          setTotalUserLocked(String(Number(Locked[0]) / 1e18).slice(0,6))
          setExpectedReward(String(Number(Locked[1]) / 1e18).slice(0,6))
          settotalClaimableReward(String(Number(Locked[2]) / 1e18).slice(0,6))
          settotalRewardClaimed(BigInt(String(Number(Locked[3]) / 1e18).slice(0,6)))
        }

        GetUserLocked()
    },[])
  return (
    <div className='text-[1.2em]'>
        {/* DashBoard Section  */}
        <div className="w-[95%] !h-[220px]  bg-[#FFFFFF0F] border border-[#FFFFFF29] m-auto rounded-lg mt-8 px-3 sm:px-7">
                <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1em] sm:text-[1.3em] ">TOTAL VALUE LOCKED</h1>

                <div className="flex  relative mt-4 tracking-wide items-center">
                    <p className="text-white text-[.7em] sm:text-[.8em]">Total Value Locked</p>
                    <p className="absolute right-0 text-white text-[.9em] sm:text-[1.1em] font-bold">${TotalLocked} M</p>
                </div>

                <div className="flex  relative mt-6 tracking-wide items-center">
                    <p className="text-white text-[.7em] sm:text-[.8em]">Total Participants</p>
                    <p className="absolute right-0 text-white  text-[.9em] sm:text-[1.1em] font-bold">1500</p>
                </div>

                <div className="flex  relative mt-6 tracking-wide items-center">
                    <p className="text-white text-[.7em] sm:text-[.8em]">Average Lock Duration</p>
                    <p className="absolute right-0 text-white  text-[.9em] sm:text-[1.1em] font-bold">90 days</p>
                </div>
            </div>

            {/* you Locks  */}

            <div className="w-[95%] h-[200px] bg-[#FFFFFF0F] border border-[#FFFFFF29] m-auto rounded-lg mt-6 px-3 sm:px-7">
                <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1em] sm:text-[1.3em]">YOUR LOCKS</h1>

                <div className="flex  relative mt-4 tracking-wide items-center">
                    <p className="text-white text-[.7em] sm:text-[.8em]">Total Locked</p>
                    <p className="absolute right-0 text-white text-[.9em]  sm:text-[1.1em] font-bold">${TotalUserLocked}</p>
                </div>

                <div className="flex  relative mt-6 tracking-wide items-center">
                    <p className="text-white text-[.7em] sm:text-[.8em]">Locked Duration</p>
                    <p className="absolute right-0 text-white text-[.9em]  sm:text-[1.1em] font-bold">90 days</p>
                </div>

                <div className="flex  relative mt-6 tracking-wide items-center">
                    <p className="text-white text-[.7em] sm:text-[.8em]">Expected Rewards</p>
                    <p className="absolute right-0 text-white text-[.9em]  sm:text-[1.1em] font-bold">{ExpectedReward}</p>
                </div>
            </div>

            {/* Rewards Earn  */}

            <div className="w-[95%] h-[170px] bg-[#FFFFFF0F] border border-[#FFFFFF29] m-auto rounded-lg mt-6 px-3 sm:px-7">
                <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1em] sm:text-[1.3em] ">REWARDS EARN</h1>

                <div className="flex  relative mt-4 tracking-wide items-center">
                    <p className="text-white text-[.7em] sm:text-[.8em]">Total Reward Earned</p>
                    <p className="absolute right-0 text-white text-[.9em]  sm:text-[1.1em] font-bold">${totalClaimableReward}</p>
                </div>

                <div className="flex  relative mt-6 tracking-wide items-center">
                    <p className="text-white text-[.7em] sm:text-[.8em] ">Reward Clamied</p>
                    <p className="absolute right-0 text-white text-[.9em]  sm:text-[1.1em] ">${totalRewardClaimed}</p>
                </div>
            </div>

            {/* Point Earn  */}

            <div className="w-[95%] h-[120px] bg-[#FFFFFF0F] border border-[#FFFFFF29] m-auto rounded-lg mt-6 px-3 sm:px-7">
                <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1em] sm:text-[1.3em] ">POINTS EARN</h1>

                <div className="flex  m-auto  relative mt-4 tracking-wide items-center">
                    <p className="text-white text-[.7em] sm:text-[.8em]">Total Points Earned</p>
                    <p className="absolute right-0 text-white text-[.9em]  sm:text-[1.1em] font-bold">5000</p>
                </div>
            </div>
    </div>
  )
}

export default Dashboard