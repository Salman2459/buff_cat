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
  

  return (
    <div>
      <div className="main-Bg">
        <Header />
        <div className="md:w-[700px] py-5 box-border bg-gradient-to-r from-[#301b00e5] to-[#000000E5] m-auto rounded-lg mt-24 tableScroler2">
          <div className="overflow-x-auto w-[95%] h-[60px] bg-gradient-to-r from-[#EFCB97] to-[#F3933F] rounded-lg m-auto tableScroler2">
            <ol className="flex justify-between min-w-[500px] items-center h-full font-medium cursor-pointer text-[.8em] lg:text-[1em]">
              <li
                className={navigationTABS === 'Dashboard' ? 'font-bold  ml-5' : ' ml-5'}
                onClick={() => dispatch(tabChanger('Dashboard'))}
              >
                Dashboard
              </li>
              <li
                className={navigationTABS === 'Localtoken' ? 'font-bold' : ''}
                onClick={() => dispatch(tabChanger('Localtoken'))}
              >
                Lock Token
              </li>
              <li
                className={navigationTABS === 'CoinReward' ? 'font-bold ' : ''}
                onClick={() => dispatch(tabChanger('CoinReward'))}
              >
                Claim
              </li>
              <li
                className={navigationTABS === 'Leaderboard' ? 'font-bold ' : ''}
                onClick={() => dispatch(tabChanger('Leaderboard'))}
              >
                Public
              </li>
              <li
                className={navigationTABS === 'trendingtoken' ? 'font-bold mr-5' : 'mr-5'}
                onClick={() => dispatch(tabChanger('trendingtoken'))}
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
