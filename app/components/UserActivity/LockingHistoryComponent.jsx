import React from 'react';

const LockingHistoryTable = ({ data }) => (
  <div className="text-white p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-4 ">Locking History</h2>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className='bg-[#31231F] rounded-r-full'>
          <tr className="text-left border-b border-gray-700">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Amount Locked</th>
            <th className="py-2 px-4">Start Date</th>
            <th className="py-2 px-4">End Date</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Duration</th>
            <th className="py-2 px-4">Hash ID</th>
            <th className="py-2 px-4">Auto Compound</th>
          </tr>
        </thead>
        <tbody>
          {data.lockingHistory.map((item, index) => (
            <tr key={index} className="border-b border-gray-800">
              <td className="py-2 px-4 flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                {item.name}
              </td>
              <td className="py-2 px-4">{item.amountLocked}</td>
              <td className="py-2 px-4">{item.startDate}</td>
              <td className="py-2 px-4">{item.endDate}</td>
              <td className="py-2 px-4">
                <span className="bg-green-500 text-black px-2 py-1 rounded">
                  {item.status}
                </span>
              </td>
              <td className="py-2 px-4">{item.duration}</td>
              <td className="py-2 px-4">{item.hashId}</td>
              <td className="py-2 px-4">{item.autoCompound}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const PartialUnlocksTable = ({ data }) => (
  <div className="bg-gray-900 text-white p-6 rounded-lg mt-8">
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

const LockingHistoryComponent = () => {
  const data = {
    lockingHistory: [
      { name: 'ETH', amountLocked: 500, startDate: '15 Oct 2024', endDate: '15 Nov 2024', status: 'Active', duration: '10 Hours', hashId: '#34516', autoCompound: 'Yes' },
      // ... add more items as needed
    ],
    partialUnlocks: [
      { name: 'ETH', amountUnlocked: 500, unlockDate: '15 Oct 2024', remainingLockedAmount: '$34563', penaltyFee: '$45.95' },
      // ... add more items as needed
    ]
  };

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <LockingHistoryTable data={data} />
      <PartialUnlocksTable data={data} />
    </div>
  );
};

export default LockingHistoryComponent;