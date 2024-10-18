// PartialUnlocksTable.js
import React from 'react';

const PartialUnlocksTable = () => {
  const data = {
    partialUnlocks: [
      { name: 'ETH', amountUnlocked: 500, unlockDate: '15 Oct 2024', remainingLockedAmount: '$34563', penaltyFee: '$45.95' },
      // ... add more items as needed
    ],
  };

  return (
    <div className="text-white  rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Partial Unlocks</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Amount Unlocked</th>
              <th className="py-2 px-4">Unlock Date</th>
              <th className="py-2 px-4">Remaining Locked Amount</th>
              <th className="py-2 px-4">Penalty Fee (if early unlock)</th>
            </tr>
          </thead>
          <tbody>
            {data.partialUnlocks.map((item, index) => (
              <tr key={index} className="border-b border-gray-800">
                <td className="py-2 px-4 flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                  {item.name}
                </td>
                <td className="py-2 px-4">{item.amountUnlocked}</td>
                <td className="py-2 px-4">{item.unlockDate}</td>
                <td className="py-2 px-4">{item.remainingLockedAmount}</td>
                <td className="py-2 px-4">{item.penaltyFee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartialUnlocksTable;
