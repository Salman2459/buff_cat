import { 
  ClaimReward, 
  fetchTokenSymbol, 
  getDecimal, 
  GetLocketTokenNumber, 
  GetuserLocked, 
  USerDividence 
} from '@/app/ContractFunction';

import React, { useEffect, useRef, useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import { useAccount } from 'wagmi';

export const Coinreward = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChain, setSelectedChain] = useState('Select Token');
  const { address } = useAccount();
  const [lockedTokens, setLockedTokens] = useState([]);
  const ClainInput = useRef(null);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [totalClaimableReward, setTotalClaimableReward] = useState(0);
  const [totalRewardClaimed, setTotalRewardClaimed] = useState(0);

  useEffect(() => {
    setLockedTokens([]); 
    
    const GetLockToken = async () => {
      if (!address) return;

      try {
        const lockedToken = await GetLocketTokenNumber(address);
        if (!lockedToken || lockedToken.length === 0) {
          setLoading(false);
          return;
        }

        const tokens = await Promise.all(
          lockedToken.map(async (data, index) => {
            try {
              const [TokenSymbol, decimal, dividence] = await Promise.all([
                fetchTokenSymbol(data[7]),
                getDecimal(data[7]),
                USerDividence(address, index)
              ]);

              return { 
                amount: data[0], 
                TokenSymbol, 
                address: data[7], 
                decimal, 
                index, 
                dividence 
              };
            } catch (error) {
              console.error(`Error processing token at index ${index}:`, error);
              return null;
            }
          })
        );

        setLockedTokens(tokens.filter(Boolean)); // Remove any failed tokens
      } catch (error) {
        console.error("Error fetching locked tokens:", error);
      } finally {
        setLoading(false);
      }
    };

    GetLockToken();
  }, [address]); 

  useEffect(() => {
    const GetUserLocked = async () => {
      if (!address) return;

      try {
        const Locked = await GetuserLocked(address);
        setTotalClaimableReward(String(Number(Locked[2]) / 1e18).slice(0,6));
        setTotalRewardClaimed(String(Number(Locked[3]) / 1e18).slice(0,6));
      } catch (error) {
        console.error("Error fetching user locked rewards:", error);
      }
    };

    GetUserLocked();
  }, [address]);

  async function ClameToken(token) {
    if (!token) return;

    ClainInput.current.value = token.address;
    setSelectedChain((Number(token.amount) / 10 ** token.decimal).toFixed(3) + ' ' + token.TokenSymbol);
    setIsOpen(false);
    setSelectedIndex(token.index);
  }

  async function ClaimingReward() {
    if (selectedIndex !== null) {
      try {
        const claimedReward = await ClaimReward(address, ClainInput.current.value, selectedIndex);
        if (claimedReward) {
          toast.success('Reward Claimed Successfully!', { 
            position: "top-center", 
            autoClose: 5000, 
            transition: Bounce
          });
        }
      } catch (error) {
        console.error("Error claiming reward:", error);
        toast.error('Failed to claim reward. Try again.');
      }
    } else {
      toast.warn('Please Select Token First.');
    }
  }

  return (
    <div className="bg-[#FFFFFF0F] border border-[#FFFFFF29] w-[95%] h-auto pb-10 m-auto rounded-lg mt-6">
      <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1.3em] sm:text-[1.8em]">
        Claim Rewards
      </h1>
      
      {/* Total Claim Rewards */}
      <div className="flex relative mt-4 tracking-wide items-center w-[80%] m-auto">
        <p className="text-white text-[.7em] sm:text-[.9em]">Total Claim Rewards</p>
        <p className="absolute right-0 text-white text-[1em] sm:text-[1.1em] font-bold">{totalClaimableReward}</p>
      </div>

      {/* Rewards Claimed */}
      <div className="flex relative mt-4 tracking-wide items-center w-[80%] m-auto">
        <p className="text-white text-[.7em] sm:text-[.9em]">Rewards Claimed</p>
        <p className="absolute right-0 text-white text-[1em] sm:text-[1.1em] font-bold">{totalRewardClaimed}</p>
      </div>

      {/* Token Selector */}
      <div className='px-5 sm:px-10 m-auto ml-[10px]'>
        <div className='sm:flex flex-wrap justify-center md:justify-between'>
          <div className='relative'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='mt-4 ml-3 flex items-center justify-around min-w-[175px] h-[55px] text-white bg-gradient-to-r from-[#EFCB97] to-[#F3933F] rounded-lg'>
              <div className='px-2 pr-3'>{selectedChain}</div>
            </button>

            {isOpen && (
              <div className="absolute mt-2 border border-[#1A0B06] bg-[#1A0B06] min-w-[150px] ml-[25px] rounded-md shadow-lg z-10">
                {!loading ? (
                  lockedTokens.filter(token => Number(token.amount) !== 0).map((token, index) => (
                    <div
                      key={index}
                      onClick={() => ClameToken(token)}
                      className="flex items-center px-4 py-3 cursor-pointer hover:bg-black hover:text-white transition-colors">
                      <span className="text-white">{token.dividence} {token.TokenSymbol}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-white px-4 py-3">Loading...</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Claim Input & Button */}
      <div className='mt-6 text-center'>
        <input
          ref={ClainInput}
          type="text"
          className="w-[70%] bg-[#F3933F30] rounded-xl h-[50px] px-4 text-white"
          placeholder="Enter Smart Contract Address"
        />
        <button 
          className="w-[70%] mt-4 bg-gradient-to-r from-[#EFCB97] to-[#F3933F] h-[50px] rounded-[8px] text-white font-semibold"
          onClick={ClaimingReward}>
          Claim
        </button>
      </div>
    </div>
  );
};
