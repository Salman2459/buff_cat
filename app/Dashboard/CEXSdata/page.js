import React from 'react'


const CexData = () => {
    const data = {
        partialUnlocks: [
          {
            DepositAmount: 'Coinbase',
            Fee: '500,000 tokens',
            MinimumFee: '30%',
            img:'/coinbase.png'
          },
          {
            DepositAmount: 'Binance',
            Fee: '1,000,000 tokens',
            MinimumFee: '25%',
            img:'/binance.png'
          },
          {
            DepositAmount: 'Crypto.com',
            Fee: '300,000 tokens',
            MinimumFee: '15%',
            img:'/crypto.png'

          },
          {
            DepositAmount: 'OKX',
            Fee: '250,000 tokens',
            MinimumFee: '20%',
            img:'/okx.png'

          },
          {
            DepositAmount: 'Kucoin',
            Fee: '150,000 tokens',
            MinimumFee: '10%',
            img:'/kucoin.png'

          },
        ],
      };
    return (
                <div className='bg-[#170A05] min-h-[100vh] w-full'>
                    <div className='w-[280px] sm:w-[450px] m-auto relative pt-10 flex justify-center items-center'>
                        {/* =============================== */}
                        <div className='text-white w-[100px]   absolute left-[60px] top-[30px]  sm:left-[100px] sm:top-[50px]'>
                            <p className='text-[.9em] sm:text-[1.3em] font-semibold'>10%</p>
                            <div className='flex sm:mt-1 items-center'>
                                <p className='text-[.8em] sm:text-[1.1em]'>Kucoin </p>
                                <div className='ml-3 w-[10px] h-[10px] bg-[#A85300] rounded-full'></div>
                            </div>
                        </div>

                        {/* =============================== */}
                        <div className='text-white w-[100px] absolute left-[0] top-[100px] sm:left-[-17px] sm:top-[200px]'>
                            <p className='text-[.9em] sm:text-[1.3em] font-semibold'>20%</p>
                            <div className='flex sm:mt-1 items-center'>
                                <p className='text-[.8em] sm:text-[1.1em]'>OKX </p>
                                <div className='ml-3 w-[10px] h-[10px] bg-[#EFCB97] rounded-full'></div>
                            </div>
                        </div>

                        {/* =============================== */}
                        <div className='text-white w-[100px] absolute left-[0px] top-[230px] sm:left-[-7px] sm:top-[380px]'>
                            <p className='text-[.9em] sm:text-[1.3em] font-semibold text-center'>15%</p>
                            <div className='flex sm:mt-1 items-center'>
                                <div className='mr-3 w-[10px] h-[10px] bg-[#FFBB7A] rounded-full absolute top-[-10px] right-[0px]'></div>
                                <p className='text-[.8em] sm:text-[1.1em]'>Crypto.com </p>
                            </div>
                        </div>

                        {/* =============================== */}
                        <div className='text-white w-[80px] sm:w-[100px] absolute right-[0px] top-[50px] sm:right-[-40px] sm:top-[140px]'>
                            <p className='text-[.9em] sm:text-[1.3em] font-semibold'>30%</p>
                            <div className='flex sm:mt-1 items-center'>
                                <div className='mr-3 w-[10px] h-[10px] bg-[#EF7A06] rounded-full'></div>
                                <p className='text-[.8em] sm:text-[1.1em]'>Coinbase </p>
                            </div>
                        </div>

                        {/* =============================== */}
                        <div className='text-white w-[70px] sm:w-[100px] absolute right-[30px] top-[235px] sm:right-[-50px] sm:top-[340px]'>
                            <p className='text-[.9em] sm:text-[1.3em] font-semibold'>25%</p>
                            <div className='flex sm:mt-1 items-center'>
                                <div className='mr-3 w-[10px] h-[10px] bg-[#F3933F] rounded-full absolute top-0 left-[-20px]'></div>
                                <p className='text-[.8em] sm:text-[1.1em]'>Binance </p>
                            </div>
                        </div>
                        <img src="/chart.png" alt="" className='w-[220px] h-[220px] sm:w-[450px] sm:h-[450px]' />
                    </div>





                    <div className="text-white rounded-lg mt-14 w-full px-5 pt-10 md:pt-0 pb-5">
                        <div className="overflow-auto mt-10 max-h-[400px] tableScroler2">
                            <table className="w-full md:w-[700px] bg-[#0C0507] m-auto">
                                <thead className="bg-[#31231F] h-[70px]">
                                    <tr className=" border-b border-gray-700 text-center">
                                        <th className="py-2 px-4 text-[14px] sm:text-[19px] font-bold rounded-tl-[10px] rounded-tr-[0px]">Exchanges</th>
                                        <th className="py-2 px-4 text-[14px] sm:text-[19px] font-bold">Liquidity Locked (in token)</th>
                                        <th className="py-2 px-4 text-[14px] sm:text-[19px] font-bold rounded-tl-[0px] rounded-tr-[10px]">Percentage of Total Supply</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {data.partialUnlocks.map((item, index) => (
                                        <tr key={index} className="border-b border-gray-800 h-[60px] text-center">
                                            <td className="py-2 px-4 flex items-center  text-[12px] sm:text-[17px]">
                                                <img src={item.img} alt="" />
                                                <p className='ml-2'>{item.DepositAmount}</p>
                                            </td>
                                            <td className="py-2 px-4 Jost text-[12px] sm:text-[17px] font-medium text-center">{item.Fee}</td>
                                            <td className="py-2 px-4 Jost text-[12px] sm:text-[17px] font-medium text-center">{item.MinimumFee}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>

    )
}

export default CexData