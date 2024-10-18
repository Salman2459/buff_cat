// LockingHistoryTable.js
import React from 'react';

const LockingHistoryTable = () => {
  const data = {
    lockingHistory: [
      { name: 'ETH', amountLocked: 500, startDate: '15 Oct 2024', endDate: '15 Nov 2024', status: 'Active', duration: '10 Hours', hashId: '#34516', autoCompound: 'Yes' },
      { name: 'ETH', amountLocked: 500, startDate: '15 Oct 2024', endDate: '15 Nov 2024', status: 'Active', duration: '10 Hours', hashId: '#34516', autoCompound: 'Yes' },
      { name: 'ETH', amountLocked: 500, startDate: '15 Oct 2024', endDate: '15 Nov 2024', status: 'Active', duration: '10 Hours', hashId: '#34516', autoCompound: 'Yes' },
      { name: 'ETH', amountLocked: 500, startDate: '15 Oct 2024', endDate: '15 Nov 2024', status: 'Active', duration: '10 Hours', hashId: '#34516', autoCompound: 'Yes' },
      { name: 'ETH', amountLocked: 500, startDate: '15 Oct 2024', endDate: '15 Nov 2024', status: 'Active', duration: '10 Hours', hashId: '#34516', autoCompound: 'Yes' },
      { name: 'ETH', amountLocked: 500, startDate: '15 Oct 2024', endDate: '15 Nov 2024', status: 'Active', duration: '10 Hours', hashId: '#34516', autoCompound: 'Yes' },
      { name: 'ETH', amountLocked: 500, startDate: '15 Oct 2024', endDate: '15 Nov 2024', status: 'Active', duration: '10 Hours', hashId: '#34516', autoCompound: 'Yes' },
      { name: 'ETH', amountLocked: 500, startDate: '15 Oct 2024', endDate: '15 Nov 2024', status: 'Active', duration: '10 Hours', hashId: '#34516', autoCompound: 'Yes' },
      // ... add more items as needed
    ],
  };

  return (
    <div className="text-white pl-[50] pr-[0] rounded-lg">
      <h2 className="text-[30px] font-bold Jost mb-4">Locking History</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-[#0C0507]">
          <thead className=' bg-[#31231F] h-[70px]'>
            <tr className="text-left border-b border-gray-700">
              <th className="py-2 px-4 text-[14px] font-bold ">Name</th>
              <th className="py-2 px-4 text-[14px] font-bold">Amount Locked</th>
              <th className="py-2 px-4 text-[14px] font-bold">Start Date</th>
              <th className="py-2 px-4 text-[14px] font-bold">End Date</th>
              <th className="py-2 px-4 text-[14px] font-bold">Status</th>
              <th className="py-2 px-4 text-[14px] font-bold">Duration</th>
              <th className="py-2 px-4 text-[14px] font-bold">Hash ID</th>
              <th className="py-2 px-4 text-[14px] font-bold">Auto Compound</th>
            </tr>
          </thead>
          <tbody>
            {data.lockingHistory.map((item, index) => (
              <tr key={index} className="border-b border-[#6A6A6A]">
                <td className="py-2 px-4 flex items-center">
                  <div className="">
                    <img className="w-[16px] h-[16px] mr-1" src="./eth.png" alt="" />
                  </div>
                  <p className="Jost text-[14px] font-medium">

                  {item.name}
                  </p>
                </td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.amountLocked}
                </td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.startDate}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.endDate}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-[50px]">
                    {item.status}
                  </span>
                </td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.duration}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.hashId}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.autoCompound}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LockingHistoryTable;
