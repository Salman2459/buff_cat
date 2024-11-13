'use client'
import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard Section/dashboard";
import Locktoken from "../MainLockTonkens/locktoken";
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

const WalletDisconnected = () => {
  return (
    <Provider store={buffCatStore}>
      <ShowWalletDisconnected />
    </Provider>
  );
};

const ShowWalletDisconnected = () => {
  const router = useRouter();
  let { address } = useAccount()
  const dispatch = useDispatch();
  const navigationTABS = useSelector((store) => store.whichTab);


  useEffect(() => {
    if (address) {
      router.push('/Dashboard')
    }
  }, [address])


  return (
    <div>
      <div className="main-Bg">
        <Header />
        <div className="w-full text-center text-white mt-4 h-auto">
          <h1 className="font-bold text-4xl mt-16">Buff OP_CAT</h1>
          <p className="mt-2 text-base">Lock your token and earn reward</p>
        </div>
        <div className="lg:w-[900px] py-5 box-border bg-[#301B00E5] m-auto rounded-lg mt-10 tableScroler2">
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
                Coin Reward
              </li>
              <li
                className={navigationTABS === 'Leaderboard' ? 'font-bold ' : ''}
                onClick={() => dispatch(tabChanger('Leaderboard'))}
              >
                Leaderboard
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
            <Locktoken />
          ) : navigationTABS === 'CoinReward' ? (
            <Coinreward />
          ) : navigationTABS === 'Leaderboard' ? (
            <Leaderboard />
          ) : navigationTABS === 'trendingtoken' ? (
            <TrendingToken />
          ) : null}
        </div>
      <Footer />
      </div>
    </div>
  );
};

export default WalletDisconnected;
