import { ClaimReward, fetchTokenSymbol, getDecimal, GetLocketTokenNumber, GetuserLocked, USerDividence } from '@/app/ContractFunction';
import React, { useEffect, useRef, useState } from 'react'
import { Bounce } from 'react-toastify';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';

export const Coinreward = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [selectedChain, setSelectedChain] = useState('Select Token');
      const {address} = useAccount()
      const [lockedTokens,setlockedTokens] = useState([])
      const ClainInput = useRef(null)
      const [loadingss,setloadingss] = useState(true)
      const [slectedindex,setslectedindex] = useState('No Index')
      const [totalClaimableReward,settotalClaimableReward] = useState(0)
      const [totalRewardClaimed,settotalRewardClaimed] = useState(0)

      useEffect(() => {
        setlockedTokens([]); 
      
        const GetLockToken = async () => {
          const lockedToken = await GetLocketTokenNumber(address);
      
          const tokens = await Promise.all(
            lockedToken.map(async (data,index) => {
                const TokenSymbol = await fetchTokenSymbol(data[7]);
                const decimal = await getDecimal(data[7]);
                const dividence = await USerDividence(data[7],index)
                return { amount: data[0], TokenSymbol,address:data[7],decimal,index,dividence };
            })
          );
          setlockedTokens(tokens);
        };
      
        GetLockToken();
        setloadingss(false)
      }, [address]); 

      useEffect(()=>{
         const GetUserLocked = async () =>{
            const Locked = await GetuserLocked(address)
            settotalClaimableReward(String(Number(Locked[2]) / 1e18).slice(0,6))
            settotalRewardClaimed(String(Number(Locked[3]) / 1e18).slice(0,6))
        }
        
        GetUserLocked()
      },[])


      async function ClameToken (token,index) {
        ClainInput.current.value = token.address
        setSelectedChain((token.amount / 10n ** BigInt(token?.decimal)).toString() + ' ' + token.TokenSymbol)
        setIsOpen(false)
        setslectedindex(token.index)
      }

      async function ClaimingReward() {
        console.log(slectedindex,'=s=s=s=s=s=s=s=s=')
        if (slectedindex != 'No Index') {
          const claimedReward = await ClaimReward(address,ClainInput.current.value,slectedindex)
          if(claimedReward){
          toast.info('Reward Claimed Successfully...', { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce, });
          }
        }else{
          toast.info('Please Select Token First...', { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce, });
        }
      }
  
  return (
    <>
      <div className="bg-[#FFFFFF0F] border border-[#FFFFFF29] w-[95%] h-auto pb-10 m-auto rounded-lg mt-6" onClick={()=>console.log(lockedTokens)}>
        <h1 className="text-center text-[#EFCB97] font-bold mt-5 text-[1.3em] sm:text-[1.8em]">
          Claim Rewards
        </h1>
        <div className="flex  relative mt-4 tracking-wide items-center w-[80%] m-auto">
          <p className="text-white text-[.7em] sm:text-[.9em]">Total Claim Rewards</p>
          <p className="absolute right-0 text-white text-[1em]  sm:text-[1.1em] font-bold">{totalClaimableReward}</p>
        </div>

        <div className="flex  relative mt-4 tracking-wide items-center w-[80%] m-auto">
          <p className="text-white text-[.7em] sm:text-[.9em]">Rewards Claimed</p>
          <p className="absolute right-0 text-white text-[1em]  sm:text-[1.1em] font-bold">{totalRewardClaimed}</p>
        </div>

        {/* Slector  */}

        <div className='px-5 sm:px-10 m-auto ml-[10px]'>
          <div className='sm:flex flex-wrap justify-center md:justify-between'>
            <div className='relative'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='mt-4 ml-3 mr-3 flex p-0 justify-around items-center   min-w-[175px] h-[55px] text-white   bg-gradient-to-r from-[#EFCB97] to-[#F3933F] outline-none rounded-lg px-0 box-border'>
                <div className='flex justify-center items-center px-2 pr-3'>
                  {selectedChain}
                </div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5'>
                  <path
                    strokeLinecap='round'
                    className='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              {isOpen && (
              <div className="absolute mt-2 border border-[#1A0B06] bg-[#1A0B06] min-w-[150px] ml-[25px] rounded-md shadow-lg z-10">
                {!loadingss ? (
                  lockedTokens?.filter(data => {if(Number(data.amount != 0)){return data}}).map((token, index) => {
                    console.log(token)
                    // const amount = BigInt(token.dividence) / 10n ** BigInt(token.decimal || 18); 
                    const dividence = String(Number(token.dividence) / 1e18).slice(0,6)
                    return (
                      <div
                        key={index}
                        onClick={() => ClameToken(token,index)}
                        className="flex items-center px-4 py-3 cursor-pointer hover:bg-black hover:text-white transition-colors"
                      >
                        <span className="text-white">
                          {dividence} {token.TokenSymbol}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-white px-4 py-3">Loading...</div> // Fixed text color
                )}
              </div>
            )}

            </div>
          </div>
        </div>

        <div className=' mt-6 text-center'>
          <input
            ref={ClainInput}
            type="text"
            className="w-[70%] bg-[#F3933F30] rounded-xl h-[50px] px-4 text-[.8em] sm:text-[1em] text-white"
            placeholder="Enter Smart Contract Address"
          />
          <div className="w-[70%] mt-10 p-[2px] rounded-[8px] bg-gradient-to-r from-[#EFCB97] via-[#F3933F] to-[#F3933F] mx-auto">
            <button className="w-full h-[50px] bg-[#422914] text-white text-[1.1em] font-semibold rounded-[8px]" onClick={ClaimingReward}>
              Claim
            </button>
          </div>

          {/* <button className="w-[70%] bg-gradient-to-r from-[#EFCB97] to-[#F3933F] h-[50px] rounded-[8px] mt-2  text-white text-[1.1em] font-semibold">
            Bulk Claim
          </button> */}
        </div>



      </div>
    </>
  )
}
