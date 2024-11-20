"use client";
import { useAppKit } from '@reown/appkit/react';
import React, { useEffect, useRef, useState, } from "react";
import "./header.css";
import buffCatStore from '@/store/store';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { tabChanger, userAddress, } from '@/store/storeSlice';
import { useSelector } from 'react-redux';
import { connectWallet, disconnectWallet, useBitcoinWallet } from '@/app/bitcoinWallet';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';


const Header = () => {
  return <Provider store={buffCatStore}>
    <ShowHeader />
  </Provider>
}


const Modal = ({ onClose }) => {
  const { open } = useAppKit()
  const modalRef = useRef(null);
  let [error,setError] = useState('')
  const dispatch = useDispatch()


  const handleConnect = async () => {
    try {
      const walletInfo = await connectWallet();
      dispatch(userAddress(walletInfo?.address))
    } catch (err) {
      setError(err?.message);
    }
  };


  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-around items-center z-50 w-full flex-wrap"
      onMouseDown={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="bg-[#1A0B06]  !md:w-[500px] min-h-[250px] p-6 pt-3  rounded-lg shadow-lg relative "
      >
        <button className='absolute right-4 text-[1.8em] text-white' onClick={onClose}>&times;</button>
        <h1 className='Jost text-center text-[#EFCB97] text-[1.5em] sm:text-[1.8em] font-semibold mt-[40px] pointer' onClick={handleClickOutside}>Connect Your Wallet</h1>
        <div className='flex justify-around items-center flex-wrap mt-[30px]'>
          <button className="w-[180px] h-[60px] bg-white rounded-md ml-10 mr-10 mt-5 text-white text-[1.1em] bg-gradient-to-r from-[#F0BD81] to-[#F39644]" onClick={() => open()}>Ethereum Wallet</button>
          <button className="w-[180px] h-[60px] bg-white rounded-md ml-10 mr-10 mt-5 text-white text-[1.1em] bg-gradient-to-r from-[#F0BD81] to-[#F39644]" onClick={handleConnect}>{"Bitcoin Wallet"}</button>
        </div>
      </div>
    </div>
  );
};

const ShowHeader = () => {
  const [navopen, setnavopen] = useState(false)
  const dispatch = useDispatch()
  const { address } = useAccount()
  const router = useRouter();
  const userLogin = useSelector(store => store.userAddresss)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigationTABS = useSelector((store) => {
    return store.whichTab
  })

  function respnsiveNavbar() {

    if (navopen) {
      setnavopen(false)
    } else {
      setnavopen(true)
    }
  }

  function ChangeTab(Tab) {
    dispatch(tabChanger(Tab))
    setnavopen(false)

  }

  useEffect(() => {
    if (address) {
      dispatch(userAddress(address))
    }
  }, [address])

  useEffect(() => {
    if (userLogin) {
      router.push('/Dashboard');
      return
    }
  }, [userLogin]);

  return (
    <div className=''>
      <nav className="navbar w-[90%] md:w-[80%]  h-[70px] m-auto flex relative top-[40px] z-20 rounded-lg">
        <section className="flex items-center  h-full w-full ">
          <div className='flex items-center'>
            <img
              src="/mainLogo.png"
              alt="Logo"
              className="w-8 h-8 ml-4 md:w-12 md:h-12 md:ml-7"
            />
            <h1 className="logo-Titel ml-[10px] text-[1em]  md:text-[1.2em] md:ml-[20px]">
              Buff Cat
            </h1>
            <button className="toggle-button ml-2 md:ml-5 toggleBtn" onClick={respnsiveNavbar}>
              {
                !navopen ?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                  :
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
              }
            </button>
          </div>

          <div className="flex items-center justify-around min-w-[20%] h-[100%]  absolute right-0 responsiveNAVWallet">
            <div className="flex h-full items-center justify-center">
              <div className="flex svg-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-gear-fill svg-circle lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[18px]"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-question-lg svg-circle w-[18px] h-[18px] xl:w-[20px] xl:h-[18px]"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"
                  />
                </svg>
              </div>
              <button onClick={openModal} className="nav-wallet-btn">Connect Wallet</button>
              {isModalOpen && <Modal onClose={closeModal} />}
            </div>
          </div>
        </section>

      </nav>
      {navopen ? <div className='w-[90%] md:w-[80%] bg-gradient-to-r from-[#EFCB97] to-[#F3933F] h-auto absolute z-10 top-[105px] left-1/2 -translate-x-1/2'>
        <ol className='cursor-pointer'>
          <li className={navigationTABS == 'Dashboard' ? 'text-center mt-5 font-medium text-[1.2em] text-black' : 'text-center mt-5 font-medium text-[1.2em] text-white'} onClick={() => ChangeTab('Dashboard')}>Dashboard</li>
          <li className={navigationTABS == 'Localtoken' ? 'text-center mt-5 font-medium text-[1.2em] text-black' : 'text-center mt-5 font-medium text-[1.2em] text-white'} onClick={() => ChangeTab('Localtoken')}>Lock Token</li>
          <li className={navigationTABS == 'CoinReward' ? 'text-center mt-5 font-medium text-[1.2em] text-black' : 'text-center mt-5 font-medium text-[1.2em] text-white'} onClick={() => ChangeTab('CoinReward')}>Claim</li>
          <li className={navigationTABS == 'Leaderboard' ? 'text-center mt-5 font-medium text-[1.2em] text-black' : 'text-center mt-5 font-medium text-[1.2em] text-white'} onClick={() => ChangeTab('Leaderboard')}>Public</li>
          <li className={navigationTABS == 'trendingtoken' ? 'text-center mt-5 font-medium text-[1.2em] text-black' : 'text-center mt-5 font-medium text-[1.2em] text-white'} onClick={() => ChangeTab('trendingtoken')}>Trending Token</li>
          <li className='text-center mt-5 font-medium text-[1.2em] text-white'>
            <div className="flex flex-col h-full items-center justify-center responsiveNAVWallet2">
              <div className="flex svg-box text-white NavSVG">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-gear-fill svg-circle "
                  viewBox="0 0 16 16"
                >
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-question-lg svg-circle "
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"
                  />
                </svg>
              </div>
              <button onClick={openModal} className="nav-wallet-btn !mt-5 py-4 !mb-5">Connect Wallet</button>
            </div>
          </li>

        </ol>
      </div> : null}
      {isModalOpen && <Modal onClose={closeModal} />}

    </div>
  );
};

export default Header;
