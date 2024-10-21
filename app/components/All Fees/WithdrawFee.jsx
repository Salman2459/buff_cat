import React from 'react';

const WithdrawalFees = () => {
  const data = {
    partialUnlocks: [
      {
        WithdrawaltAmount: '< $1,000',
        Fee: '0.5%',
        EarlyWithdrawalPenalty: '2% (if within lock period)',
      },
      {
        WithdrawaltAmount: '< $1,000',
        Fee: '0.5%',
        EarlyWithdrawalPenalty: '2% ',
      },
      {
        WithdrawaltAmount: '< $1,000',
        Fee: '0.5%',
        EarlyWithdrawalPenalty: '2%',
      },
     
      
    ],
  };

  return (
<>
    <div className="text-white rounded-lg mt-14">
      <h2 className="text-[20px] sm:text-[30px]  font-bold Jost mb-4">Withdrawal Fees</h2>
      <div className="overflow-auto mt-10 max-h-[350px] tableScroler2">
        <table className="w-full md:w-[600px] bg-[#0C0507]">
          <thead className="bg-[#31231F] h-[70px]">
            <tr className="text-left border-b border-gray-700">
              <th className="py-2 px-4 text-[14px] font-bold rounded-tl-[10px] rounded-tr-[0px]">Withdrawal Amount</th>
              <th className="py-2 px-4 text-[14px] font-bold">Fee (%)</th>
              <th className="py-2 px-4 text-[14px] font-bold rounded-tl-[0px] rounded-tr-[10px]">Early Withdrawal Penalty (%)</th>

            </tr>
          </thead>
          <tbody>
            {data.partialUnlocks.map((item, index) => (
              <tr key={index} className="border-b border-gray-800">
                <td className="py-2 px-4 flex items-center">
                  {item.WithdrawaltAmount}
                </td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.Fee}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.EarlyWithdrawalPenalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="flex text-[13px] sm:font-[16px] gap-2 mt-8 jost">
        <img className='w-[24px] h-[24px]' src="/info.png" alt=""  />
        <p className='text-white'>
        Withdrawal Fee: 10%
         </p>
    </div>
</>

  );
};

export default WithdrawalFees;