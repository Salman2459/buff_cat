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
              className="text-white m-auto  w-[100%] bg-[#F3933F45] h-[50px] border-0 outline-none rounded-md  box-border text-[1.3em] px-4"
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4"
            >
              <path
                d="M11 17H13V11H11V17ZM12 9C12.2833 9 12.521 8.904 12.713 8.712C12.905 8.52 13.0007 8.28267 13 8C12.9993 7.71733 12.9033 7.48 12.712 7.288C12.5207 7.096 12.2833 7 12 7C11.7167 7 11.4793 7.096 11.288 7.288C11.0967 7.48 11.0007 7.71733 11 8C10.9993 8.28267 11.0953 8.52033 11.288 8.713C11.4807 8.90567 11.718 9.00133 12 9ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                fill="#FF9A62"
              />
            </svg>

            <p className="text-white">
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
