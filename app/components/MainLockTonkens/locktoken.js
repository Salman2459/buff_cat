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
                ? "mr-7 mt-7 font-semibold "
                : "mr-7 mt-7 "
            }
            onClick={() => setlocaltoken("localtoken")}
          >
            Lock Tokens
          </button>
          <button
            className={
              localtoken === "localtokends"
                ? "ml-7 mt-7 font-semibold "
                : "ml-7 mt-7 "
            }
            onClick={() => setlocaltoken("partialUnlock")}
          >
            Partial Unlock
          </button>
        </div>
        <div className="w-[255px] bg-[#AAAAAA] h-[3px] m-auto mt-3">
          {localtoken === "localtoken" ? (
            <div className="w-[40%] h-[3px] bg-[#EFCB97]"></div>
          ) : (
            <div className="w-[40%] h-[3px] bg-[#EFCB97] float-right"></div>
          )}
        </div>
      </div>

        <LockToken/>
    </div>
  );
};

export default Locktoken;
