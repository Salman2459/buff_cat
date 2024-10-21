import React from 'react';

const UnclaimedRewards = () => {
  const data = {
    partialUnlocks: [
      {
        name: 'ETH',
        AmountAvailableforClaim: 500,
        NextClaimableDate: '15 Oct 2024,5:00 am',
        ClaimingMethod: '10 Hours',
        HashID: '#34536',
      },
      {
        name: 'ETH',
        AmountAvailableforClaim: 500,
        NextClaimableDate: '15 Oct 2024,5:00 am',
        ClaimingMethod: '10 Hours',
        HashID: '#34536',
      },
      {
        name: 'ETH',
        AmountAvailableforClaim: 500,
        NextClaimableDate: '15 Oct 2024,5:00 am',
        ClaimingMethod: '10 Hours',
        HashID: '#34536',
      },
      {
        name: 'ETH',
        AmountAvailableforClaim: 500,
        NextClaimableDate: '15 Oct 2024,5:00 am',
        ClaimingMethod: '10 Hours',
        HashID: '#34536',
      },
      {
        name: 'ETH',
        AmountAvailableforClaim: 500,
        NextClaimableDate: '15 Oct 2024,5:00 am',
        ClaimingMethod: '10 Hours',
        HashID: '#34536',
      },
      {
        name: 'ETH',
        AmountAvailableforClaim: 500,
        NextClaimableDate: '15 Oct 2024,5:00 am',
        ClaimingMethod: '10 Hours',
        HashID: '#34536',
      },
      {
        name: 'ETH',
        AmountAvailableforClaim: 500,
        NextClaimableDate: '15 Oct 2024,5:00 am',
        ClaimingMethod: '10 Hours',
        HashID: '#34536',
      },
      {
        name: 'ETH',
        AmountAvailableforClaim: 500,
        NextClaimableDate: '15 Oct 2024,5:00 am',
        ClaimingMethod: '10 Hours',
        HashID: '#34536',
      },

    

      

      

     

    
    ],
  };

  return (
    <div className="text-white rounded-lg mt-10">
      <h2 className="text-[22px] md:text-[30px]  font-bold Jost mb-4">Unclaimed Rewards:</h2>
      <div className="overflow-auto max-h-[400px] tableScroler2">
        <table className="w-full bg-[#0C0507]">
          <thead className="bg-[#31231F] h-[70px]">
            <tr className="text-left border-b border-gray-700">
              <th className="py-2 px-4 text-[14px] font-bold rounded-tl-[10px] rounded-tr-[0px]">Name</th>
              <th className="py-2 px-4 text-[14px] font-bold">Amount Available for Claim</th>
              <th className="py-2 px-4 text-[14px] font-bold">Next Claimable Date</th>
              <th className="py-2 px-4 text-[14px] font-bold">Claiming Method </th>
              <th className="py-2 px-4 text-[14px] font-bold rounded-tl-[0px] rounded-tr-[10px]">Hash ID</th>
            </tr>
          </thead>
          <tbody>
            {data.partialUnlocks.map((item, index) => (
              <tr key={index} className="border-b border-gray-800">
                <td className="py-2 px-4 flex items-center">
                  <div className="w-4 h-4 rounded-full mr-2">
                    <img className="w-[16px] h-[16px] mr-1" src="./eth.png" alt="ETH" />
                  </div>
                  {item.name}
                </td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.AmountAvailableforClaim}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.NextClaimableDate}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.ClaimingMethod}</td>
                <td className="py-2 px-4 Jost text-[14px] font-medium">{item.HashID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UnclaimedRewards