import React from 'react'

const Leaderboard = () => {
  return (
    <>
    <div className="bg-[#FFFFFF0F] border border-[#FFFFFF29] w-[95%] h-auto pb-10 m-auto rounded-lg mt-6" >
    <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1.3em] sm:text-[1.8em] pb-5">
    Leaderboards
        </h1>
    <h2 className="text-center text-[#fff] font-bold mt-0 text-[1.3em] sm:text-[1.8em] pb-5">
    Top Lockers
        </h2>
        <div className='flex justify-around items-center mt-5'>
        <p className='text-[#fff]'>01</p>
        <p className='text-[#fff]'>John Doe</p>
        <p className='text-[#fff] text-[1.2rem] '>$10000</p>

        </div>
        <hr className='bg-[#7E6A56] w-[95%] mx-auto mt-3' />
        <div className='flex justify-around items-center mt-5'>
        <p className='text-[#fff]'>01</p>
        <p className='text-[#fff]'>John Doe</p>
        <p className='text-[#fff] text-[1.2rem] '>$10000</p>

        </div>
        <hr className='bg-[#7E6A56] w-[95%] mx-auto mt-3' />
        <div className='flex justify-around items-center mt-6'>
        <p className='text-[#fff]'>01</p>
        <p className='text-[#fff]'>John Doe</p>
        <p className='text-[#fff] text-[1.2rem] font-bold '>$10000</p>

        </div>
       
        
    </div>
    </>
  )
}

export default Leaderboard