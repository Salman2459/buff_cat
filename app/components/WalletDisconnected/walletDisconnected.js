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
        <div className=" w-[80%] md:w-[700px] py-5 box-border bg-gradient-to-r from-[#301b00e5] to-[#000000E5] m-auto rounded-lg mt-24 tableScroler2">
          <div className="w-[95%] h-[60px] bg-gradient-to-r from-[#EFCB97] to-[#F3933F] rounded-lg m-auto relative overflow-auto md:overflow-none overflowNone">
            {/* Menu Items */}
            <ol className="flex justify-between items-center h-full font-medium text-[1em] cursor-pointer bg-transparent min-w-[500px] z-0 text-white space-x-4 md:overflow-x-auto md:whitespace-nowrap px-5 overflowNone">
              <li
                className={`${navigationTABS === 'Dashboard' ? 'font-bold  text-black text-center text-[.8em] sm:text-[1em]'
                  : 'text-[.8em] sm:text-[1em]'
                  } `}
                onClick={() => TabHAndler('Dashboard')}
              >
                Dashboard
              </li>
              <li
                className={
                  navigationTABS === 'Localtoken'
                    ? 'font-bold  text-black text-center text-[.8em] sm:text-[1em]'
                    : 'text-[.8em] sm:text-[1em]'
                }
                onClick={() => TabHAndler('Localtoken')}
              >
                Lock Token
              </li>
              <li
                className={
                  navigationTABS === 'CoinReward'
                    ? 'font-bold  text-black text-center text-[.8em] sm:text-[1em]'
                    : 'text-[.8em] sm:text-[1em]'
                }
                onClick={() => TabHAndler('CoinReward')}
              >
                Claim
              </li>
              <li
                className={
                  navigationTABS === 'Leaderboard'
                    ? 'font-bold  text-black text-center text-[.8em] sm:text-[1em]'
                    : 'text-[.8em] sm:text-[1em]'
                }
                onClick={() => TabHAndler('Leaderboard')}
              >
                Public
              </li>
              <li
                className={`${navigationTABS === 'trendingtoken'
                  ? 'font-bold  text-black text-center text-[.8em] sm:text-[1em]'
                  : 'text-[.8em] sm:text-[1em]'
                  } `}
                onClick={() => TabHAndler('trendingtoken')}
              >
                Trending Token
              </li>
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
