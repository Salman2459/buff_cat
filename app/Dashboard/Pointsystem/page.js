import React from 'react'


const BoxinBOx = ({ number, head1, head2, para1, para2 }) => {
  return <div className="bg-[#2a1a12] text-white rounded-lg p-5 w-[270px] shadow-md font-sans mt-10  border-b border-[#F3933F] min-h-[270px] ml-2 mr-2 lg:ml-10 lg:mr-5" >
    <div className="bg-[#170A05] text-[#F3933F] rounded-full w-10 h-10 flex justify-center items-center text-lg font-bold  border-e-[1px] border-b border-[#F3933F]">
      {number}
    </div>
    <div className="flex items-center">
      <div>
        <h3 className="text-[1.2em] font-semibold mt-3">{head1}</h3>
        <p className="text-[.8em] text-[#d3c7bb] mt-2 ">
          {para1}
        </p>
      </div>
    </div>
    {
      number < 3 ? <div className="bg-[#3e2d23] rounded-md p-4 mt-3 text-sm">
        <strong className='text-[1.1em] text-[#F3933F]'>{head2}</strong>
        <p className="mt-1 text-[#f1e7d8] text-[1.1em]">{para2}</p>
      </div> : null
    }
  </div>
}

const Pointsystem = () => {
  return (

    <div className='bg-[#170A05] min-h-[100vh] w-full pt-6 '>
      <h1 className='text-white font-semibold text:[1.5em] md:text-[1.8em] Jost text-center lg:text-left lg:ml-10 mt-5'>Point System Overview OFF-CHAIN</h1>
      <div>
        {/* ========= */}
        <div className='flex flex-wrap justify-around lg:justify-normal'>
          <BoxinBOx number={1} head1={'Points for Locking Tokens'} head2={'Formula'} para1={'Users earn points based on the value amount locked and lock duration.'} para2={'1 point for every $100 locked per month.'} />
          <BoxinBOx number={2} head1={'Multiplier for Lock Duration'} head2={'Example'} para1={'Longer lock durations (e.g., 6 months, 1 year) increase points with a multiplier.'} para2={' 2x multiplier for locks over 6 months.'} />
          <BoxinBOx number={3} head1={'Bonus for Multiple Tokens'} head2={'Example'} para1={'Locking 2+ tokens gives a 10% bonus in points.'} para2={' 2x multiplier for locks over 6 months.'} />
          <BoxinBOx number={4} head1={'Tracking Points'} head2={'Example'} para1={`Points are calculated and displayed on the user dashboard. These points can be redeemable for rewards or later converted to DAO tokens when launched.`} para2={' 2x multiplier for locks over 6 months.'} />
          <BoxinBOx number={5} head1={'Referal Bonus'} head2={'Example'} para1={'Users earn points for referring someone, and the person that was refered and signs up through the referral link gets points.'} para2={' 2x multiplier for locks over 6 months.'} />

        </div>
      </div>
    </div>
  )
}

export default Pointsystem