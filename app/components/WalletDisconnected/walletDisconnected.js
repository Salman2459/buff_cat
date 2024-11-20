'use client'
import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard Section/dashboard";
import TrendingToken from "../Trendingtoken/trendingToken";
import Footer from "../Footer/footer";
import Header from "../UserDisconnectedNavbar/header";
import Leaderboard from "../Leaderboard Section/Leaderboard";
import { Coinreward } from "../Coinreward Section/Coinreward";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import buffCatStore from "@/store/store";
import { tabChanger, userAddress } from "@/store/storeSlice";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import LockToken from "../LockToken Section/locktoken";
import { useBitcoinWallet } from "@/app/bitcoinWallet";

const WalletDisconnected = () => {
  return (
    <Provider store={buffCatStore}>
      <ShowWalletDisconnected />
    </Provider>
  );
};

const ShowWalletDisconnected = () => {

  const dispatch = useDispatch();
  const navigationTABS = useSelector((store) => store.whichTab);
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const TabHAndler = (Tab) => {
    dispatch(tabChanger(Tab))
    setTimeout(() => {
      setIsMenuOpen((prev) => !prev);
    }, 200);
  }


  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };


  return (
    <div>
      <div className="main-Bg">
        <Header />
        <div className=" w-[90%] md:w-[700px] py-5 box-border bg-gradient-to-r from-[#301b00e5] to-[#000000E5] m-auto rounded-lg mt-24 tableScroler2">
          <div className="w-[95%] h-[60px] bg-gradient-to-r from-[#EFCB97] to-[#F3933F] rounded-lg m-auto relative">
            <div className="sm:hidden flex items-center h-full px-4">
              <button onClick={toggleMenu} className="text-white focus:outline-none absolute right-2">
               {!isMenuOpen ? <svg
                  className="w-9 h-9"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg> : <svg
                className="w-9 h-9"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>}
              </button>
            </div>

            {/* Menu Items */}
            <ol className={`${isMenuOpen ? 'block' : 'hidden'} sm:flex justify-between items-center sm:h-full font-medium text-[1em] cursor-pointer bg-[#1A0B06] sm:bg-transparent w-full h-[65vh] z-[999] sm:z-0 absolute sm:relative text-white`}>
              <li className={`${navigationTABS === 'Dashboard' ? 'font-bold sm:font-medium sm:text-black text-center' : 'text-center'}  mt-7 sm:mt-0 sm:ml-5`} onClick={() => TabHAndler('Dashboard')}>Dashboard</li>
              <li className={navigationTABS === 'Localtoken' ? 'font-bold sm:font-medium sm:text-black text-center mt-7 sm:mt-0 ' : 'text-center mt-7 sm:mt-0 '} onClick={() => TabHAndler('Localtoken')}>Lock Token</li>
              <li className={navigationTABS === 'CoinReward' ? 'font-bold sm:font-medium sm:text-black text-center mt-7 sm:mt-0 ' : ' text-center mt-7 sm:mt-0 '} onClick={() => TabHAndler('CoinReward')}>Claim</li>
              <li className={navigationTABS === 'Leaderboard' ? 'font-bold sm:font-medium text sm:text-black text-center mt-7 sm:mt-0 ' : ' text-center mt-7 sm:mt-0 '} onClick={() => TabHAndler('Leaderboard')}>Public</li>
              <li className={`${navigationTABS === 'trendingtoken' ? 'font-bold sm:font-medium sm:text-black text-center mt-7 sm:mt-0 ' : ' text-center'}  mt-7 sm:mt-0 sm:mr-5`} onClick={() => TabHAndler('trendingtoken')}>Trending Token</li>
            </ol>

          </div>

          {navigationTABS === 'Dashboard' ? (
            <Dashboard />
          ) : navigationTABS === 'Localtoken' ? (
            <LockToken />
          ) : navigationTABS === 'CoinReward' ? (
            <Coinreward />
          ) : navigationTABS === 'Leaderboard' ? (
            <Leaderboard />
          ) : navigationTABS === 'trendingtoken' ? (
            <TrendingToken />
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WalletDisconnected;
