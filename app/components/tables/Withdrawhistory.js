import React from 'react';

const WithdrawalHistory = () => {
  const data = {
    lockingHistory: [
      {
        name: 'ETH',
        AmountWithdrawn: 500,
        DateofWithdrawal: '15 Oct 2024',
        TimeofWithdrawal: '18:18:00',
        WithdrawalStatus: 'Completed',
        duration: '10 Hours',
      
      },

    ],
  };

  return (
    <div className="text-white pr-0 rounded-lg mt-10">
      <h2 className="text-[22px] md:text-[30px]  font-bold Jost mb-4">Withdrawal History:</h2>
      <div className="overflow-auto max-h-[400px] tableScroler2">
        <table className="w-full bg-[#0C0507]">
          <thead className="bg-[#31231F] h-[70px]">
            <tr className="text-left border-b border-gray-700 ">
              <th className="py-2 px-4 text-[14px] font-bold  rounded-tl-[10px] rounded-tr-[0px]">Name</th>
              <th className="py-2 px-4 text-[14px] font-bold">Amount Withdrawn</th>
              <th className="py-2 px-4 text-[14px] font-bold">Date of Withdrawal</th>
              <th className="py-2 px-4 text-[14px] font-bold">Time of Withdrawal</th>
              <th className="py-2 px-4 text-[14px] font-bold">Withdrawal Status</th>
              <th className="py-2 px-4 text-[14px] font-bold rounded-tl-[0px] rounded-tr-[10px]">Lock Duration </th>
              {/* <th className="py-2 px-4 text-[14px] font-bold">Hash ID</th> */}
              {/* <th className="py-2 px-4 text-[14px] font-bold  rounded-tl-[0px] rounded-tr-[10px]">Auto Compound</th> */}
            </tr>
          </thead>
          <tbody>
            {data.lockingHistory.map((item, index) => (
              <tr key={index} className="border-b border-[#6A6A6A]">
                <td className="py-2 px-4 flex items-center">
                  <img className="w-[16px] h-[16px] mr-1" src="./eth.png" alt="ETH Logo" />
                  <p className="Jost text-[14px] font-medium">{item.name}</p>
                </td>
                <td className="py-2 px-4 Jost text-[14px] font-medium ">{item.AmountWithdrawn}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium ">{item.DateofWithdrawal}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium ">{item.TimeofWithdrawal}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium ">
                  <span className="bg-[#10C717] text-white px-3 py-1 rounded-[50px]">{item.WithdrawalStatus}</span>
                </td>
                <td className="py-2 px-4 Jost text-[14px] font-medium ">{item.duration}</td>
    
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithdrawalHistory;