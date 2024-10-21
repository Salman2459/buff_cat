// PartialUnlocksTable.js
import React from 'react';

const PartialUnlocksTable = () => {
  const data = {
    partialUnlocks: [
      {
        name: 'ETH',
        amountUnlocked: 500,
        unlockDate: '15 Oct 2024',
        remainingLockedAmount: '$34,563',
        penaltyFee: '$45.95',
      },

      {
        name: 'ETH',
        amountUnlocked: 500,
        unlockDate: '15 Oct 2024',
        remainingLockedAmount: '$34,563',
        penaltyFee: '$45.95',
      },

      {
        name: 'ETH',
        amountUnlocked: 500,
        unlockDate: '15 Oct 2024',
        remainingLockedAmount: '$34,563',
        penaltyFee: '$45.95',
      },

      {
        name: 'ETH',
        amountUnlocked: 500,
        unlockDate: '15 Oct 2024',
        remainingLockedAmount: '$34,563',
        penaltyFee: '$45.95',
      },

      {
        name: 'ETH',
        amountUnlocked: 500,
        unlockDate: '15 Oct 2024',
        remainingLockedAmount: '$34,563',
        penaltyFee: '$45.95',
      },


      {
        name: 'ETH',
        amountUnlocked: 500,
        unlockDate: '15 Oct 2024',
        remainingLockedAmount: '$34,563',
        penaltyFee: '$45.95',
      },
    ],
  };

  return (
    <div className="text-white rounded-lg mt-20">
      <h2 className="text-[22px] md:text-[30px] font-bold Jost mb-4 ">Partial Unlocks</h2>
      <div className="overflow-auto max-h-[400px] tableScroler2">
        <table className="w-full bg-[#0C0507]">
          <thead className="bg-[#31231F] h-[70px]">
            <tr className="text-center border-b border-gray-700">
              <th className="py-2 px-4 text-[14px] font-bold">Name</th>
              <th className="py-2 px-4 text-[14px] font-bold">Amount Unlocked</th>
              <th className="py-2 px-4 text-[14px] font-bold">Unlock Date</th>
              <th className="py-2 px-4 text-[14px] font-bold">Remaining Locked Amount</th>
              <th className="py-2 px-4 text-[14px] font-bold">Penalty Fee (if early unlock)</th>
            </tr>
          </thead>
          <tbody>
            {data.partialUnlocks.map((item, index) => (
              <tr key={index} className="border-b border-gray-800 text-center">
                <td className="py-2 px-4 flex items-center">
                  <div className="w-4 h-4 rounded-full mr-2">
                    <img className="w-[20px] h-[20px] " src="./eth.png" alt="ETH" />
                  </div>
                  {item.name}
                </td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.amountUnlocked}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.unlockDate}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.remainingLockedAmount}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.penaltyFee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartialUnlocksTable;
