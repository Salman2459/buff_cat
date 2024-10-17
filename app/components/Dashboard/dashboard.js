import React from 'react'

const Dashboard = () => {
  return (
    <div>
        {/* DashBoard Section  */}
        <div className="w-[95%] !h-[220px]  bg-[#FFFFFF0F] border border-[#FFFFFF29] m-auto rounded-lg mt-8">
                <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1.1em] ">TOTAL VALUE LOCKED</h1>

                <div className="flex w-[80%] m-auto  relative mt-4 tracking-wide">
                    <p className="text-white text-[.8em]">Total Value Locked</p>
                    <p className="absolute right-0 text-white text-[1.1em] font-bold">$12.3 M</p>
                </div>

                <div className="flex w-[80%] m-auto  relative mt-6 tracking-wide">
                    <p className="text-white text-[.8em]">Total Participants</p>
                    <p className="absolute right-0 text-white text-[1.1em] font-bold">1500</p>
                </div>

                <div className="flex w-[80%] m-auto  relative mt-6 tracking-wide">
                    <p className="text-white text-[.8em]">Avrage Lock Duration</p>
                    <p className="absolute right-0 text-white text-[1.1em] font-bold">90 days</p>
                </div>
            </div>

            {/* you Locks  */}

            <div className="w-[95%] h-[200px] bg-[#FFFFFF0F] border border-[#FFFFFF29] m-auto rounded-lg mt-6">
                <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1.1em] ">YOUR LOCKS</h1>

                <div className="flex w-[80%] m-auto  relative mt-4 tracking-wide">
                    <p className="text-white text-[.8em]">Total Locked</p>
                    <p className="absolute right-0 text-white text-[1.1em] font-bold">$5,678</p>
                </div>

                <div className="flex w-[80%] m-auto  relative mt-6 tracking-wide">
                    <p className="text-white text-[.8em]">Locked Duration</p>
                    <p className="absolute right-0 text-white text-[1.1em] font-bold">90 days</p>
                </div>

                <div className="flex w-[80%] m-auto  relative mt-6 tracking-wide">
                    <p className="text-white text-[.8em]">Expected Rewards</p>
                    <p className="absolute right-0 text-white text-[1.1em] font-bold">123.45</p>
                </div>
            </div>

            {/* Rewards Earn  */}

            <div className="w-[95%] h-[170px] bg-[#FFFFFF0F] border border-[#FFFFFF29] m-auto rounded-lg mt-6">
                <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1.1em] ">REWARDS EARN</h1>

                <div className="flex w-[80%] m-auto  relative mt-4 tracking-wide">
                    <p className="text-white text-[.8em]">Total Reward Earned</p>
                    <p className="absolute right-0 text-white text-[1.1em] font-bold">$5456.78</p>
                </div>

                <div className="flex w-[80%] m-auto  relative mt-6 tracking-wide">
                    <p className="text-white text-[.8em]">Reward Clamied</p>
                    <p className="absolute right-0 text-white text-[1.1em] font-bold">$345.67</p>
                </div>
            </div>

            {/* Point Earn  */}

            <div className="w-[95%] h-[120px] bg-[#FFFFFF0F] border border-[#FFFFFF29] m-auto rounded-lg mt-6">
                <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1.1em] ">POINTS EARN</h1>

                <div className="flex w-[80%] m-auto  relative mt-4 tracking-wide">
                    <p className="text-white text-[.8em]">Total POINTS EARNED</p>
                    <p className="absolute right-0 text-white text-[1.1em] font-bold">5000</p>
                </div>
            </div>
    </div>
  )
}

export default Dashboard