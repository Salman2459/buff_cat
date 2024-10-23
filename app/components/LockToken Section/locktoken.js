import React, { useState, useRef } from "react";

const LockToken = () => {
  const [tokenBtn, settokenBtn] = useState([
    {
      img: "./eth.png",
      name: "ETH",
    },
    {
      img: "./fb.png",
      name: "FB",
    },
    {
      img: "./solana.png",
      name: "SOLANA",
    },
    {
      img: "./base.png",
      name: "BASE",
    },
    {
      img: "./ton.png",
      name: "TON",
    },
  ]);

  const [selectedToken, setSelectedToken] = useState("Select Token");
  const [isOpen, setIsOpen] = useState(false);
  let lockDurInp = useRef();
  let [lockDur, setlockDur] = useState(0);

  const tokens = [
    {
      name: "Ethereum (ETH)",
      img: "./eth.png",
    },
    {
      name: "Binance Coin (BNB)",
      img: "./ton.png",
    },
    {
      name: "Bitcoin (BTC)",
      img: "./base.png",
    },
    {
      name: "Cardano (ADA)",
      img: "./solana.png",
    },
  ];

  function increaseInp() {
    setlockDur((lockDur += 1));
    lockDurInp.current.value = lockDur;
    console.log(lockDurInp.current.value);
  }

  function descinp() {
    setlockDur((lockDur -= 1));
    lockDurInp.current.value = lockDur;
    console.log(lockDurInp.current.value);
  }
  return (
    <div>
      <div className="bg-[#FFFFFF0F] border border-[#FFFFFF29] w-[95%] h-auto pb-10 m-auto rounded-lg mt-6">
        <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1.3em] sm:text-[1.8em] pb-5">
          LOCK TOKEN
        </h1>

        <div className="w-[80%] m-auto">
          <div className="relative flex ">
            <input
              type="text"
              className="w-full bg-[#F3933F30] rounded-3xl h-[50px] px-4 text-[.7em] sm:text-[1em]"
              placeholder="Enter Smart Contract Address"
            />
            <button className="absolute right-5 top-3 text-white text-[1.1em]">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.375 14.5H15.3875L15.0375 14.1625C16.3049 12.6926 17.0015 10.8159 17 8.875C17 7.26803 16.5235 5.69714 15.6307 4.361C14.7379 3.02485 13.469 1.98344 11.9843 1.36848C10.4997 0.75352 8.86599 0.592618 7.28989 0.906123C5.7138 1.21963 4.26606 1.99346 3.12976 3.12976C1.99346 4.26606 1.21963 5.7138 0.906123 7.28989C0.592618 8.86599 0.75352 10.4997 1.36848 11.9843C1.98344 13.469 3.02485 14.7379 4.361 15.6307C5.69714 16.5235 7.26803 17 8.875 17C10.8875 17 12.7375 16.2625 14.1625 15.0375L14.5 15.3875V16.375L20.75 22.6125L22.6125 20.75L16.375 14.5ZM8.875 14.5C5.7625 14.5 3.25 11.9875 3.25 8.875C3.25 5.7625 5.7625 3.25 8.875 3.25C11.9875 3.25 14.5 5.7625 14.5 8.875C14.5 11.9875 11.9875 14.5 8.875 14.5Z"
                  fill="#EFCB97"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="w-[80%] m-auto mt-5]">
          <h1 className="text-left mt-5 text-[1.1em] ml-3  text-white  font-semibold">Token</h1>

          <div className="flex flex-wrap justify-center md:justify-between">
            {tokenBtn.map((item ,index) => {
              return (
                <button key={index} className="text-white text-[1.1em] w-[175px] h-[55px] bg-[#F3933F45] rounded-lg font-semibold flex items-center justify-center mt-4 ml-3 mr-3">
                  <img src={item.img} alt="" width={30} height={30} />
                  <p className="ml-3">{item.name}</p>
                </button>
              );
            })}

            {/* slector =============>>>>>>>>>> */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="mt-4 ml-3 mr-3 flex p-0 justify-around items-center   w-[175px] h-[55px] text-white   bg-gradient-to-r from-[#EFCB97] to-[#F3933F] outline-none rounded-lg px-0 box-border"
              >
                <span>{selectedToken}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    className="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              {isOpen && (
                <div className="absolute w-full mt-2  border border-[#1A0B06] bg-[#1A0B06] rounded-md shadow-lg z-10">
                  {tokens.map((token, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        handleSelect(token);
                      }}
                      className="flex items-center px-4 py-3 cursor-pointer hover:bg-black hover:text-white transition-colors"
                    >
                      <img
                        src={token.img}
                        alt={token.name}
                        className="w-6 h-6 mr-3"
                      />
                      <span className="text-white">{token.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className=" w-full">
              <h1 className="text-left mt-5 text-[1.1em] ml-3  text-white font-semibold">
                Lock Duration
              </h1>
              <div className="flex w-full mt-4 justify-between items-center relative">
                <input
                  ref={lockDurInp}
                  type="number"
                  placeholder="0"
                  onChange={() => {
                    setlockDur(Number(lockDurInp.current.value));
                  }}
                  className="number-stepper text-white w-[80%] bg-[#F3933F45] h-[50px] border-0 outline-none rounded-md px-4 box-border text-[1.3em]"
                />
                <div className="flex flex-col absolute right-[23%]">
                  <button
                    className="text-white w-[15px] h-[15px] text-[.9em] flex justify-center items-center rounded-sm bg-gradient-to-r from-[#EFCB97] to-[#F3933F]"
                    onClick={increaseInp}
                  >
                    ▲
                  </button>
                  <button
                    className="text-white w-[15px] h-[15px] text-[.9em] flex justify-center items-center rounded-sm bg-gradient-to-r from-[#EFCB97] to-[#F3933F]"
                    onClick={descinp}
                  >
                    ▼
                  </button>
                </div>
                <p className="text-white text-[1.1]">Days</p>
              </div>
              <button className="bg-gradient-to-r from-[#EFCB97] to-[#F3933F] w-full h-[50px] rounded-md mt-7  text-white text-[1.1em] font-semibold">
                Lock Tokens
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF0F] border border-[#FFFFFF29] w-[95%] h-auto pb-10 m-auto rounded-lg mt-6">
        <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1.3em] sm:text-[1.8em] pb-5">
          WITHDRAW TOKEN
        </h1>
        <div className="flex w-[80%] m-auto  relative mt-4 tracking-wide items-center">

          <p className="text-white text-[1em]">Token</p>
          <div className="absolute right-0 text-white text-[1.1em] font-bold">
            <div className="flex items-center  py-3 cursor-pointer hover:bg-black hover:text-white transition-colors">
              <img src="./eth.png" alt="ETH" className="w-6 h-6 mr-3 " />
              <span>ETH</span>
            </div>
          </div>
        </div>

        <div className="flex w-[80%] m-auto  relative mt-6 tracking-wide items-center">
          <p className="text-white text-[1em]">Lock Duration</p>
          <p className="absolute right-0 text-white text-[1.1em] font-bold">
            $345.67
          </p>
        </div>

        <div className="flex w-[80%] m-auto  relative mt-6 tracking-wide items-center">
          <p className="text-white text-[1em]">Withdraw Fee</p>
          <p className="absolute right-0 text-white text-[1.1em] font-bold">
            2% to 10% fee
          </p>
        </div>

        <div className="bg-[#F3933F45] w-[80%] m-auto rounded-lg h-[15px] mt-5">
          <div className="bg-gradient-to-r from-[#EFCB97] to-[#F3933F] w-[40%]  text-white text-[1.1em] font-semibold  rounded-lg h-[15px] mt-5"></div>
        </div>

        <button className="bg-gradient-to-r from-[#EFCB97] to-[#F3933F] w-[80%] m-auto block text-white text-[1.1em] font-semibold h-[50px] rounded-md mt-7">
          Withdrew Tokens
        </button>
      </div>
    </div>
  );
};

export default LockToken;
