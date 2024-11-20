import { useRef, useState } from "react";
import Modal from "../TokenModel/tokenModel";

const LockToken = () => {

  const [selectedChain, setSelectedChain] = useState("Select Chains");
  let [imgSrc, setimgSrc] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
  let lockDurInp = useRef();
  let [lockDur, setlockDur] = useState(0);
  const [locketChanis, setlocketChanis] = useState([])
  const [showSlectToken, setshowSlectToken] = useState(false)

  const Chains = [
    {
      name: "Ethereum (ETH)",
      img: "/eth.png",
    },
    {
      name: "Base (BASE)",
      img: "/base.png",
    },
    {
      name: "Fractal (FRACTAL)",
      img: "/fb.png",
    },
    {
      name: "Ton (TON)",
      img: "/ton.png",
    },
    {
      name: "Solana (SOL)",
      img: "/solana.png",
    },
  ];


  function LocketChain() {

    if (selectedChain != "Select Chians") {
      setlocketChanis([...locketChanis, { name: selectedChain }]);
    }
  }

  function ChainChager(token) {
    setSelectedChain(token.name)
    setimgSrc(token.img)
    setIsOpen(!isOpen)
    setshowSlectToken(true)
  }

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
          LOCK
        </h1>

        {/* Slect Chians  */}
        <div className="px-5 sm:px-10 m-auto mt-5]">
          <h1 className="text-left mt-5 text-[1.1em] ml-3  text-white  font-semibold">Chains</h1>

          <div className="sm:flex flex-wrap justify-center md:justify-between">


            {/* slector =============>>>>>>>>>> */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="mt-4 ml-3 mr-3 flex p-0 justify-around items-center   min-w-[175px] h-[55px] text-white   bg-gradient-to-r from-[#EFCB97] to-[#F3933F] outline-none rounded-lg px-0 box-border"
              >
                <div className="flex justify-center items-center px-2 pr-3">{imgSrc ? <img src={imgSrc} width={30} height={30} className="pr-2" /> : null}{selectedChain}</div>
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
                <div className="absolute  mt-2  border border-[#1A0B06] bg-[#1A0B06] w-[250px] rounded-md shadow-lg z-10">
                  {Chains.map((token, index) => (
                    <div
                      key={index}
                      onClick={() => ChainChager(token)}
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

            {/* Slect Token  */}

            {showSlectToken ? <div className="flex flex-col w-full justify-center sn:items-center">
              <h1 className="text-left mt-5 text-[1.1em] ml-3  text-white  font-semibold">Token</h1>
              <div className="relative flex mt-2">
                <Modal />
              </div>
            </div> : null}

            {/* Lock duration   */}

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
              <button className="bg-gradient-to-r from-[#EFCB97] to-[#F3933F] w-full h-[50px] rounded-md mt-7  text-white text-[1.1em] font-semibold" onClick={LocketChain}>
                Lock
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* section 2  */}
      {locketChanis.length > 0 ? <div className="bg-[#FFFFFF0F] border border-[#FFFFFF29] w-[95%] h-auto pb-10 m-auto rounded-lg mt-6">
        <div>
          <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1.3em] sm:text-[1.8em] pb-5">
            Currently Locked Chians
          </h1>
          <div className="flex justify-around flex-wrap">
            {locketChanis.map((data, index) => {
              return <div key={index} className="w-[250px] h-[230px] bg-[#5e3916] rounded-md mx-3 mt-3">
                <h1 className="text-center mt-3 font-semibold text-2xl text-[white]">{data.name}</h1>
                <p className="text-center mt-2 font-medium text-md text-[white]">Amount:5,000,000</p>
                <div className="flex justify-between mt-4 items-center">
                  <span className=" ml-2 p-3 bg-[#F39745] rounded-xl text-white text-[.5em]">LOCK PROGRESS</span>
                  <p className="text-white mr-2">60%</p>
                </div>
                <div className="px-2 mt-3">
                  <div className="bg-[#AAAAAA] h-3 rounded-xl">
                    <div className="bg-[#F39745] h-full w-[40%] rounded-xl"></div>
                  </div>
                </div>
                <div className="flex justify-center mt-5">
                  <button className="p-3 px-5 m-auto d-block rounded-md bg-[#F39745] text-white">UNLOCK</button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div> : null}

      {/* section 3  */}
      <div className="bg-[#FFFFFF0F] border border-[#FFFFFF29] w-[95%] h-auto pb-10 m-auto rounded-lg mt-6">
        <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1.3em] sm:text-[1.8em] pb-5">
          WITHDRAWAL
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


        <div className="bg-[#F3933F45] w-[80%] m-auto rounded-lg h-[15px] mt-5">
          <div className="bg-gradient-to-r from-[#EFCB97] to-[#F3933F] w-[40%]  text-white text-[1.1em] font-semibold  rounded-lg h-[15px] mt-5"></div>
        </div>

        <button className="bg-gradient-to-r from-[#EFCB97] to-[#F3933F] w-[80%] m-auto block text-white text-[1.1em] font-semibold h-[50px] rounded-md mt-7">
          Withdrawal
        </button>
      </div>
    </div>
  );
};

export default LockToken;
