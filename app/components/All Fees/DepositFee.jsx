import React from 'react';

const DepositFees = () => {
  const data = {
    partialUnlocks: [
      {
        DepositAmount: '< $1,000',
        Fee: '0.5%',
        MinimumFee: '$5',
      },
      {
        DepositAmount: '< $1,000',
        Fee: '0.5%',
        MinimumFee: '$5',
      },
      {
        DepositAmount: '< $1,000',
        Fee: '0.5%',
        MinimumFee: '$5',
      },
    ],
  };

  return (
<>
    <div className="text-white rounded-lg mt-14">
      <h2 className="text-[20px] sm:text-[30px] font-bold Jost mb-4 ">Deposit Fees</h2>
      <div className="overflow-auto mt-10 max-h-[350px] tableScroler2">
        <table className="w-full md:w-[600px] bg-[#0C0507]">
          <thead className="bg-[#31231F] h-[70px]">
            <tr className="text-left border-b border-gray-700">
              <th className="py-2 px-4 text-[14px] font-bold rounded-tl-[10px] rounded-tr-[0px]">Deposit Amount</th>
              <th className="py-2 px-4 text-[14px] font-bold">Fee (%)</th>
              <th className="py-2 px-4 text-[14px] font-bold rounded-tl-[0px] rounded-tr-[10px]">Minimum Fee</th>

            </tr>
          </thead>
          <tbody>
            {data.partialUnlocks.map((item, index) => (
              <tr key={index} className="border-b border-gray-800">
                <td className="py-2 px-4 flex items-center">
                  {item.DepositAmount}
                </td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.Fee}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.MinimumFee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="flex font-[16px] gap-2 mt-8 jost">
        <img className='w-[24px] h-[24px]' src="/info.png" alt=""  />
        <p className='text-white md:pr-10 text-[.8em] sm:text-[1em]'>For deposits under $1,000, the user pays a 0.5% fee, with a minimum of $5. As the deposit amount increases, the percentage decreases, but larger deposits might incur a higher minimum fee.</p>
    </div>
</>

  );
};

export default DepositFees;