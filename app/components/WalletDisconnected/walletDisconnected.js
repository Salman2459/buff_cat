"use client";
import React, { useState } from "react";
import Dashboard from "../Dashboard/dashboard";
import Locktoken from "../MainLockTonkens/locktoken";
import TrendingToken from "../Trendingtoken/trendingToken";
import Footer from "../Footer/footer";
import Header from "../UserDisconnectedNavbar/header";
import Leaderboard from "../Leaderboard/Leaderboard";
import { Coinreward } from "../Coinreward/Coinreward";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import buffCatStore from "@/store/store";
import { tabChanger } from "@/store/storeSlice";
import { useDispatch } from "react-redux";


const WalletDisconnected = () => {
  return <Provider store={buffCatStore}>
    <ShowWalletDisconnected />
  </Provider>
}

const ShowWalletDisconnected = () => {
  let dispatch = useDispatch()
  let navigationTABS = useSelector((store) => {
    return store.whichTab
  })

  return (
    <div>
      <div className="main-Bg">
        <Header/>
        <div className="w-full text-center text-white mt-4 h-auto">
          <h1 className="font-bold text-4xl mt-16">Buff OP_CAT</h1>
          <p className="mt-2 text-base">Lock your token and earn reward</p>
        </div>
        <div className="lg:w-[900px] py-5 box-border bg-[#301B00E5] m-auto rounded-lg mt-10">
          <div className="w-full md:w-[95%] h-[60px] bg-gradient-to-r from-[#EFCB97] to-[#F3933F]  rounded-lg m-auto ">
            <ol className="flex justify-around items-center h-full font-medium cursor-pointer text-[.7em] sm:text-[.8em] lg:text-[1em]">
              <li
                className={navigationTABS == 'Dashboard' ? "font-bold" : ""}
                onClick={()=> {dispatch(tabChanger('Dashboard'))}}
              >
                Dashboard
              </li>
              <li
                className={navigationTABS == 'Localtoken' ? "font-bold" : ""}
                onClick={()=> {dispatch(tabChanger('Localtoken'))}}
              >
                Lock Token
              </li>
              <li
                className={navigationTABS == 'CoinReward' ? "font-bold" : ""}
                onClick={()=> {dispatch(tabChanger('CoinReward'))}}
              >
                Coin Reward
              </li>
              <li
                className={navigationTABS == 'Leaderboard' ? "font-bold" : ""}
                onClick={()=> {dispatch(tabChanger('Leaderboard'))}}
              >
                Leaderboard
              </li>
              <li
                className={navigationTABS == 'trendingtoken' ? "font-bold" : ""}
                onClick={()=> {dispatch(tabChanger('trendingtoken'))}}
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
