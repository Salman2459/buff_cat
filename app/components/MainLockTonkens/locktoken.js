"use client";
import React, { useState } from "react";
import LockToken from "../LockToken/locktoken";

const Locktoken = () => {
  let [localtoken, setlocaltoken] = useState("localtoken");

  return (
    <div className="mt-8">
      <div>
        <div className="flex justify-center ">
          <button
            className={
              localtoken === "localtoken"
                ? "mr-7 mt-7 font-semibold  text-white text-[1.1em] "
                : "mr-7 mt-7 text-white text-[1.1em] "
            }
            onClick={() => setlocaltoken("localtoken")}
          >
            Lock Tokens
          </button>
          <button
            className={
              localtoken === "localtokends"
                ? "mr-7 mt-7 font-semibold  text-white text-[1.1em]"
                : "ml-7 mt-7 text-white text-[1.1em] "
            }
            onClick={() => setlocaltoken("partialUnlock")}
          >
            Partial Unlock
          </button>
        </div>
        <div className="w-[255px] bg-[#AAAAAA] h-[5px] m-auto mt-3 rounded-md">
          {localtoken === "localtoken" ? (
            <div className="w-[40%] h-[5px] bg-[#EFCB97] rounded-md"></div>
          ) : (
            <div className="w-[40%] h-[5px] bg-[#EFCB97] float-right rounded-md"></div>
          )}
        </div>
      </div>

        <LockToken/>
    </div>
  );
};

export default Locktoken;
