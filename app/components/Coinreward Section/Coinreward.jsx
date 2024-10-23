import React from 'react'

export const Coinreward = () => {
  return (
    <>
     <div className="bg-[#FFFFFF0F] border border-[#FFFFFF29] w-[95%] h-auto pb-10 m-auto rounded-lg mt-6" >
    <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1.3em] sm:text-[1.8em]">
    Claim Rewards
        </h1>
        <div className='flex justify-around items-center mt-3'>
        <p className='text-[#fff] text-[16px] sm:text-[18px] font-medium sm:font-bold'>Total Claim Rewards</p>
        <p className='text-[#fff] text-[20px] sm:text-[24px] font-medium sm:font-bold '>$456.78</p>

        </div>
       
        <div className='flex justify-around items-center mt-1'>
        <p className='text-[#fff] text-[16px] sm:text-[18px] font-medium sm:font-bold'>Rewards Claimed</p>
        <p className='text-[#fff] text-[20px] sm:text-[24px] font-medium sm:font-bold'>$456.78</p>

        </div>
        <div className=' mt-6 text-center'>
        <input
              type="text"
              className="w-[70%] bg-[#F3933F30] rounded-xl h-[50px] px-4 text-[.8em] sm:text-[1em] text-white"
              placeholder="Enter Smart Contract Address"
            />
<div className="w-[70%] mt-10 p-[2px] rounded-[8px] bg-gradient-to-r from-[#EFCB97] via-[#F3933F] to-[#F3933F] mx-auto">
  <button className="w-full h-[50px] bg-[#422914] text-white text-[1.1em] font-semibold rounded-[8px]">
    Claim
  </button>
</div>

 <button className="w-[70%] bg-gradient-to-r from-[#EFCB97] to-[#F3933F] h-[50px] rounded-[8px] mt-2  text-white text-[1.1em] font-semibold">
 Bulk Claim
              </button>
        </div>

       
        
    </div>
    </>
  )
}
