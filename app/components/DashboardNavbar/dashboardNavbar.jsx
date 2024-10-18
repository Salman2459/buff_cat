import React from 'react';
import LockingHistoryTable from './tables/LockingHistoryTable';
import PartialUnlocksTable from './tables/PartialUnlocksTable';

const DashboardNavbar
 = () => {
  return (
    <>
    <div className=' bg-[#170A05] w-[100%] h-[auto]'>

      <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-[#170A05]">
        
        {/* Search Bar */}
        <div className="relative flex items-center w-full md:w-auto mb-4 md:mb-0">
          <input 
            type="text" 
            className="pl-10 pr-10 py-2 border border-[#7E7E7E] rounded-full focus:outline-none w-full   md:w-[300px] " 
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
        <div className="flex items-center space-x-4">
          {/* Social Media Icons */}
          <div className="flex space-x-2">
            <img src="./facebook.png" alt="Facebook" className="w-[37.93px] h-[37.93px]" />
            <img src="./youtube.png" alt="YouTube" className="w-[37.93px] h-[37.93px]" />
            <img src="./x.png" alt="X" className="w-[37.93px] h-[37.93px]" />
            <img src="./teligran.png" alt="Telegram" className="w-[37.93px] h-[37.93px]" />
          </div>

          {/* Notification, Help, and Logout Button */}
          <div className="flex items-center space-x-4">
          <div className="relative p-3">
  <img className="w-[30px] h-[30px] min-w-[30px]" src="./notificaation.png" alt="Notification" />
  
  {/* Notification Badge */}
  <div className="absolute top-0 right-0 bg-[#D9D9D9] text-[#000] text-xs rounded-full w-6 h-6 flex items-center justify-center">
    99+
  </div>
</div>



            <img className="w-[30px] h-[30px]" src="./question.png" alt="Help" />
            <button className="bg-gradient-to-r from-[#EFCB97] to-[#F3933F] rounded-md text-white text-lg font-semibold px-4 py-2">
              Logout
            </button>
          </div>
        </div>
      </div>
      <LockingHistoryTable/>
      <PartialUnlocksTable/>
    </div>
    </>
  );
};

export default DashboardNavbar
;
