import React, { useEffect } from 'react';
import { useAppKit } from '@reown/appkit/react';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import buffCatStore from '@/store/store';
import { useAccount } from 'wagmi';
import { userAddress } from '@/store/storeSlice';
import { useSelector } from 'react-redux';

const DashboardNavbar = () => {
  return <Provider store={buffCatStore}>
    <ShowDashboardNavbar />
  </Provider>
}


const ShowDashboardNavbar = () => {
  const { open } = useAppKit()
  let { address } = useAccount()

  let dispatch = useDispatch()

 

  useEffect(() => {
    if (address) {
      dispatch(userAddress(address))
    } else {
      dispatch(userAddress('some'))
    }

  }, [address])

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-[#170A05] w-[100%]" onClick={() => console.log(address)}>

        {/* Search Bar */}
        <div className="relative flex items-center w-[80%] m-auto md:m-0 md:w-auto mb-4 md:mb-0 ">
          <input
            type="text"
            className="grow pl-4 pr-10 py-2 border border-[#7E7E7E] rounded-full focus:outline-none w-full md:w-[300px] ml-[60px]"
            placeholder="Search here"
          />
          <svg
            className="absolute right-2"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3569 16.0416H17.4599L17.142 15.735C18.2933 14.3998 18.926 12.6951 18.9246 10.9321C18.9246 9.47241 18.4918 8.0455 17.6808 6.83181C16.8699 5.61811 15.7172 4.67216 14.3686 4.11356C13.02 3.55496 11.5361 3.4088 10.1045 3.69357C8.67281 3.97834 7.35776 4.68125 6.3256 5.71341C5.29344 6.74557 4.59053 8.06063 4.30576 9.49227C4.02098 10.9239 4.16714 12.4079 4.72574 13.7564C5.28434 15.105 6.2303 16.2577 7.44399 17.0686C8.65768 17.8796 10.0846 18.3125 11.5443 18.3125C13.3723 18.3125 15.0528 17.6425 16.3472 16.5298L16.6538 16.8477V17.7447L22.3309 23.4106L24.0228 21.7188L18.3569 16.0416ZM11.5443 16.0416C8.71705 16.0416 6.43482 13.7593 6.43482 10.9321C6.43482 8.10487 8.71705 5.82264 11.5443 5.82264C14.3715 5.82264 16.6538 8.10487 16.6538 10.9321C16.6538 13.7593 14.3715 16.0416 11.5443 16.0416Z"
              fill="#EFCB97"
            />
          </svg>
        </div>

        {/* Social Media & User Actions */}
        <div className="w-full md:w-[430px] md:flex items-center space-x-4 flex-col md:flex-row">
          {/* Social Media Icons */}
          <div className="flex space-x-2 justify-center w-[70%] m-auto md:w-full">
            <img src="./facebook.png" alt="Facebook" className="w-[40px] h-[40] cursor-pointer ml-5" />
            <img src="./youtube.png" alt="YouTube" className="w-[40] h-[40] cursor-pointer ml-5 mr-5" />
            <img src="./x.png" alt="X" className="w-[40] h-[40] cursor-pointer ml-5 mr-5" />
            <img src="./teligran.png" alt="Telegram" className="w-[40] h-[40] cursor-pointer ml-5 mr-5" />
          </div>

          {/* Notification, Help, and Logout Button */}
          <div className='flex '>
            {/* ======== */}
            <div className="flex items-center space-x-4  w-full justify-center md:justify-normal">
              <div className="relative p-3 flex ">
                <img className="w-[30px] h-[30px] min-w-[30px]" src="./notificaation.png" alt="Notification" />

                {/* Notification Badge */}
                <div className="absolute top-0 right-0 bg-[#D9D9D9] text-[#000] text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  99+
                </div>
              </div>



              <img className="w-[30px] h-[30px]" src="./question.png" alt="Help" />
            </div>
          </div>
          <div className='flex justify-center w-full'>
            <button onClick={() => open()} className="ml-5 bg-gradient-to-r from-[#EFCB97] to-[#F3933F] w-[80%] md:w-[130px] md:h-[50px] rounded-md text-white text-lg font-semibold px-4 py-2">
              Logout
            </button>
          </div>
        </div>
      </div>
      <LockingHistoryTable/>
      <PartialUnlocksTable/>
    
    </>
  );
};

export default DashboardNavbar
  ;
