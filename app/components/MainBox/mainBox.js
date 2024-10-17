"use client";
import React, { useState } from "react";
import Dashboard from "../Dashboard/dashboard";
import Locktoken from "../MainLockTonkens/locktoken";

const MainBox = () => {

  const [newroute,setnewroute] = useState('Dashboard')
  

  return (
    <div>
      <div className="w-full text-center text-white mt-4 h-auto">
        <h1 className="font-bold text-4xl mt-16">Buff OP_CAT</h1>
        <p className="mt-2 text-base">Lock your token and earn reward</p>
      </div>

      <div className="lg:w-[800px] py-5 box-border bg-[#301B00E5] m-auto rounded-lg mt-10">
      <div className="w-full md:w-[95%] h-[60px] bg-gradient-to-r from-[#EFCB97] to-[#F3933F]  rounded-lg m-auto ">
          <ol className="flex justify-around items-center h-full font-medium cursor-pointer text-[.7em] sm:text-[.8em] lg:text-[1em]">
            <li className={newroute == 'Dashboard' ? 'font-semibold' : ''} onClick={() => setnewroute('Dashboard')}>Dashboard</li>
            <li className={newroute == 'Localtoken' ? 'font-semibold' : ''} onClick={() => setnewroute('Localtoken')}>Lock Token</li>
            <li>Coin Reward</li>
            <li>Leaderboard</li>
            <li>Trending Token</li>
          </ol>
      </div>

      {
        newroute == 'Dashboard' ? <Dashboard/> : <Locktoken/>
      }

      </div>
    </div>
  ); 
};

export default MainBox;
