import React from 'react';

const WhaleFees = () => {
  const data = {
    partialUnlocks: [
      {
        WithdrawaltAmountwhale: '< $1,000000',
        Fee: '3%-4%',
        baseon: 'Standard market-cap based',
      },
      {
        WithdrawaltAmountwhale: '< $1,000000',
        Fee: '3%-4%',
        baseon: 'Standard market-cap based',
      },
      {
        WithdrawaltAmountwhale: '< $1,000000',
        Fee: '3%-4%',
        baseon: 'Standard market-cap based',
      },
      {
        WithdrawaltAmountwhale: '< $1,000000',
        Fee: '3%-4%',
        baseon: 'Standard market-cap based',
      },
      
     
      
    ],
  };

  return (
<>
    <div className="text-white rounded-lg mt-14">
      <h2 className="text-[20px] sm:text-[30px] font-bold Jost mb-4">Whale Fees (For Large Investors)</h2>
      <div className="overflow-auto mt-10 max-h-[350px] tableScroler2">
        <table className="w-full md:w-[600px] bg-[#0C0507]">
          <thead className="bg-[#31231F] h-[70px]">
            <tr className="text-left border-b border-gray-700">
              <th className="py-2 px-4 text-[14px] font-bold rounded-tl-[10px] rounded-tr-[0px]">Withdrawal Amount (Whale)</th>
              <th className="py-2 px-4 text-[14px] font-bold">Fees</th>
              <th className="py-2 px-4 text-[14px] font-bold rounded-tl-[0px] rounded-tr-[10px]">Based on</th>

            </tr>
          </thead>
          <tbody>
            {data.partialUnlocks.map((item, index) => (
              <tr key={index} className="border-b border-gray-800">
                <td className="py-2 px-4 flex items-center">
                  {item.WithdrawaltAmountwhale}
                </td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.Fee}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.baseon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="flex text-[13px] sm:font-[16px] gap-2 mt-8 jost">
        <img className='w-[24px] h-[24px]' src="/info.png" alt=""  />
        <p className='text-white'>
        Only up to 1% of the total liquidity can be unlocked daily.
         </p>
    </div>
</>

  );
};

export default WhaleFees;