import React, { useRef, useState } from "react";

const Partialunlock = () => {
  let lockDurInp = useRef();
  let [lockDur, setlockDur] = useState(0);

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
        <div className="w-[70%] m-auto">
          <h1 className="Jost text-left mt-5 text-[1.1em] ml-6  text-white font-semibold ">
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
              className="number-stepper text-white m-auto  w-[100%] bg-[#F3933F45] h-[50px] border-0 outline-none rounded-md  box-border text-[1.3em] px-4"
            />

            <div className="flex flex-col absolute right-[3%]">
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
          </div>

          {/* ================================================================================================ */}
          <div className="flex mt-5">
            <img src="./info.png" className="w-[24px] h-[24px] mr-3"/>

            <p className="text-white text-[.9em]">
              To unlock the selected amount early, a penalty fee of [penalty
              amount] will apply.
            </p>
          </div>
          <button className="bg-gradient-to-r from-[#EFCB97] to-[#F3933F] w-full h-[50px] rounded-md mt-7  text-white text-[1.1em] font-semibold">
            Partial Unlock
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partialunlock;
