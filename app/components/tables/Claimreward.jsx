import React from 'react';

const ClaimedRewards = () => {
  const data = {
    lockingHistory: [
      {
        name: 'ETH',
        AmountClaimed: 500,
        DateandTimeofClaim	: '15 Oct 2024',
        ClaimStats: 'Active',
        ClaimingMethod	: '10 Hours',
        hashId: '#34516',
        
      },
      {
        name: 'ETH',
        AmountClaimed: 500,
        DateandTimeofClaim	: '15 Oct 2024',
        ClaimStats: 'Active',
        ClaimingMethod	: '10 Hours',
        hashId: '#34516',
        
      },
      {
        name: 'ETH',
        AmountClaimed: 500,
        DateandTimeofClaim	: '15 Oct 2024',
        ClaimStats: 'Active',
        ClaimingMethod	: '10 Hours',
        hashId: '#34516',
        
      },
      {
        name: 'ETH',
        AmountClaimed: 500,
        DateandTimeofClaim	: '15 Oct 2024',
        ClaimStats: 'Active',
        ClaimingMethod	: '10 Hours',
        hashId: '#34516',
        
      },
      {
        name: 'ETH',
        AmountClaimed: 500,
        DateandTimeofClaim	: '15 Oct 2024',
        ClaimStats: 'Active',
        ClaimingMethod	: '10 Hours',
        hashId: '#34516',
        
      },
      {
        name: 'ETH',
        AmountClaimed: 500,
        DateandTimeofClaim	: '15 Oct 2024',
        ClaimStats: 'Active',
        ClaimingMethod	: '10 Hours',
        hashId: '#34516',
        
      },
      {
        name: 'ETH',
        AmountClaimed: 500,
        DateandTimeofClaim	: '15 Oct 2024',
        ClaimStats: 'Active',
        ClaimingMethod	: '10 Hours',
        hashId: '#34516',
        
      },
      {
        name: 'ETH',
        AmountClaimed: 500,
        DateandTimeofClaim	: '15 Oct 2024',
        ClaimStats: 'Active',
        ClaimingMethod	: '10 Hours',
        hashId: '#34516',
        
      },

    ],
  };

  return (
    <div className="text-white pr-0 rounded-lg mt-10">
      <h2 className="text-[22px] md:text-[30px]  font-bold Jost mb-4">Claimed Rewards</h2>
      <div className="overflow-auto max-h-[400px] tableScroler2">
        <table className="w-full bg-[#0C0507]">
          <thead className="bg-[#31231F] h-[70px]">
            <tr className="text-left border-b border-gray-700 ">
              <th className="py-2 px-4 text-[14px] font-bold  rounded-tl-[10px] rounded-tr-[0px]">Name</th>
              <th className="py-2 px-4 text-[14px] font-bold">Amount Claimed</th>
              <th className="py-2 px-4 text-[14px] font-bold">Date and Time of Claim</th>
              <th className="py-2 px-4 text-[14px] font-bold">Claim Status</th>
              <th className="py-2 px-4 text-[14px] font-bold">Claiming Method </th>
              <th className="py-2 px-4 text-[14px] font-bold rounded-tl-[0px] rounded-tr-[10px]">Hash ID</th>
              
            </tr>
          </thead>
          <tbody>
            {data.lockingHistory.map((item, index) => (
              <tr key={index} className="border-b border-[#6A6A6A] relative">
                <td className="py-2 px-4 flex items-center absolute inset-0 m-auto">
                  <img className="w-[16px] h-[16px] mr-1" src="./eth.png" alt="ETH Logo" />
                  <p className="Jost text-[14px] font-medium ">{item.name}</p>
                </td>
                <td className="py-2 px-4 Jost text-[14px] font-medium ">{item.AmountClaimed}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium ">{item.DateandTimeofClaim}</td>
                {/* <td className="py-2 px-4 Jost text-[14px] font-medium">{item.endDate}</td> */}
                <td className="py-2 px-4 Jost text-[14px] font-medium ">
                  <span className="bg-[#10C717] text-white px-3 py-1 rounded-[50px]">{item.ClaimStats}</span>
                </td>
                <td className="py-2 px-4 Jost text-[14px] font-medium ">{item.ClaimingMethod}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium ">{item.hashId}</td>
                {/* <td className="py-2 px-4 Jost text-[14px] font-medium">{item.autoCompound}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClaimedRewards;