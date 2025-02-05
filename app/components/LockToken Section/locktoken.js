import { useEffect, useRef, useState } from 'react';
import Modal from '../TokenModel/tokenModel';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import buffCatStore from '@/store/store';
import { useAccount } from 'wagmi';
import { ApproveOrLockToken, fetchTokenSymbol, getDecimal, GetLocketTokenNumber, GetLockProgress, UnlockToken } from '@/app/ContractFunction';
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import { useSwitchChain } from "wagmi";
import { NetworkData } from '@/app/context/networks';
import { ContractAddress } from '@/ABI & ContractKeys/Abi';


const Chains = NetworkData;


const LockToken = () => {
  return <Provider store={buffCatStore}>
    <ShowLockToken />
  </Provider>
}

const ShowLockToken = () => {
  const [selectedChain, setSelectedChain] = useState('Select Chains');
  let [imgSrc, setimgSrc] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  let lockDurationInp = useRef();
  let [lockDur, setlockDur] = useState(0);
  const [locketChanis, setlocketChanis] = useState([]);
  const [showSlectToken, setshowSlectToken] = useState(false);
  let tokenSlectedDetail = useSelector((store) => store.tokenSlected);
  const [tokenDecimal, settokenDecimal] = useState(0)
  const Amount = useRef(0)
  const { chains, switchChain } = useSwitchChain()
  const [walletSlectedChain,setwalletSlectedChain] = useState(null)
  const {address} = useAccount()
  const [isOpenUnlock, setIsOpenUnlock] = useState(false);
  const [unlockSlectedToken,setunlockSlectedToken] = useState({})
  const unlockAmount = useRef(null)

  const closeModal = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsOpenUnlock(false);
    }
  };


  useEffect(() => {
    lockDurationInp.current.value = 0
    if (address) {
      async function Decimal() {
        const decimal = await getDecimal();
        settokenDecimal(decimal)
        FetchUnlockToken()
    }
    Decimal();
    }

  }, [])
  
  useEffect(()=>{
        const SlectedChainDetail = Chains.find(data => { if(chains[0].name.includes(data.title)){ return data } })
        setwalletSlectedChain(SlectedChainDetail)
    },[])
  

  async function LocketChain () {
    if (selectedChain != 'Select Chians' && lockDurationInp.current.value > 0 && tokenSlectedDetail?.tokenAddress && Number(Amount.current?.value + "0".repeat(tokenDecimal)) > 0) {
      const LockToken = await  ApproveOrLockToken(tokenSlectedDetail?.tokenAddress,[ContractAddress, Number(Amount.current?.value + "0".repeat(tokenDecimal))], Number(Amount.current?.value + "0".repeat(tokenDecimal)),lockDurationInp.current?.value)
        if(LockToken){
          setTimeout(async() => {
            FetchUnlockToken()
          }, 5000);
        }else{
          console.log('ERROR')
        }
    }else{
      toast.info( selectedChain === 'Select Chains' ? 'Please Select Chain First' : !tokenSlectedDetail?.tokenAddress ? 'Please Select Token First' : lockDurationInp.current.value < 0 ? 'Please add valid Duration' : Number(Amount.current?.value + "0".repeat(tokenDecimal)) < 0 ? 'Please add valid Amount' : 'Transaction Failed', { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce, } );
      }

  }

  async function ChainChager (token) {
    await switchChain({ chainId: token.networkId})
    setSelectedChain(token.title);
    setimgSrc(token.networkIcon);
    setIsOpen(!isOpen);
    setshowSlectToken(true);
  }

  async function FetchUnlockToken() {
    const lockedToken = await GetLocketTokenNumber(address)
    const updatedTokens = await Promise.all(
      lockedToken.map(async (data,index) => {
        const LockedTokenDecimal = await getDecimal(data[7]);
        const tokenSymbol = await fetchTokenSymbol(data[7])
        const GetLockPercent = await GetLockProgress(address,index)
        return { amount: data[0], LockedTokenDecimal,tokenSymbol,totalAmount:GetLockPercent[0],withdrawlAmount:GetLockPercent[4],tokenAddress:data[7] };
      })
    );
    setlocketChanis(updatedTokens);
  }

  function increaseInp() {
    setlockDur((lockDur += 1));
    lockDurationInp.current.value = lockDur;
  }

  function descinp() {
    setlockDur((lockDur -= 1));
    lockDurationInp.current.value = lockDur;
  }

  function handelUnlock(token,index) {
    setIsOpenUnlock(true)
    setunlockSlectedToken({...token,index})
    
  }
  
  async function handelUnlockToken() {
    const amount = unlockAmount.current.value + '0'.repeat(unlockSlectedToken.LockedTokenDecimal)
    const unlockToken = await UnlockToken(unlockSlectedToken.tokenAddress,unlockSlectedToken.index,amount)
    setIsOpenUnlock(false)
    if(unlockToken){
      toast.info( 'Unlocked Successfully', { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce, } );
      setTimeout(() => {
        FetchUnlockToken()
      }, 3000);
    }
  }



  return (
    <div>
      
      <div className='bg-[#FFFFFF0F] border border-[#FFFFFF29] w-[95%] h-auto pb-10 m-auto rounded-lg mt-6'>
        <h1 className='text-center text-[#EFCB97] font-bold mt-5 text-[1.3em] sm:text-[1.8em] pb-5'>LOCK</h1>

        {/* Slect Chians  */}
        <div className='px-5 sm:px-10 m-auto mt-5]'>
          <h1 className='text-left mt-5 text-[1.1em] ml-3  text-white  font-semibold'>Chains</h1>

          <div className='sm:flex flex-wrap justify-center md:justify-between'>
            {/* slector =============>>>>>>>>>> */}
            <div className='relative'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='mt-4 ml-3 mr-3 flex p-0 justify-around items-center   min-w-[175px] h-[55px] text-white   bg-gradient-to-r from-[#EFCB97] to-[#F3933F] outline-none rounded-lg px-0 box-border'>
                <div className='flex justify-center items-center px-2 pr-3'>
                  {imgSrc ? (
                    <img
                      src={imgSrc}
                      width={30}
                      height={30}
                      className='pr-2'
                    />
                  ) : null}
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
                <div className='absolute  mt-2  border border-[#1A0B06] bg-[#1A0B06] w-[250px] rounded-md shadow-lg z-10'>
                  {Chains.map((token, index) =>{ 
                   return <div
                      key={index}
                      onClick={() => ChainChager(token)}
                      className='flex items-center px-4 py-3 cursor-pointer hover:bg-black hover:text-white transition-colors'>
                      <img
                        src={token.networkIcon}
                        alt={token.title}
                        className='w-6 h-6 mr-3'
                      />
                      <span className='text-white'>{token.title} ({token.nativeToken})</span>
                    </div>
                  })}
                </div>
              )}
            </div>

            {/* Slect Token  */}

            {showSlectToken ? (
              <div className='flex flex-col w-full justify-center sn:items-center'>
                <h1 className='text-left mt-5 text-[1.1em] ml-3  text-white  font-semibold'>Token</h1>
                <div className='relative flex mt-2'>
                  <Modal />
                </div>
              </div>
            ) : null}

            {/* Lock duration   */}

            <div className=' w-full'>
              <h1 className='text-left mt-5 text-[1.1em] ml-3  text-white font-semibold'>Lock Duration</h1>
              <div className='flex w-full mt-4 justify-between items-center relative'>
                <input
                  ref={lockDurationInp}
                  type='number'
                  onChange={() => {
                    setlockDur(Number(lockDurationInp.current.value));
                  }}
                  className='number-stepper text-white w-[80%] bg-[#F3933F45] h-[50px] border-0 outline-none rounded-md px-4 box-border text-[1.3em]'
                />
                <div className='flex flex-col absolute right-[23%]'>
                  <button
                    className='text-white w-[15px] h-[15px] text-[.9em] flex justify-center items-center rounded-sm bg-gradient-to-r from-[#EFCB97] to-[#F3933F]'
                    onClick={increaseInp}>
                    ▲
                  </button>
                  <button
                    className='text-white w-[15px] h-[15px] text-[.9em] flex justify-center items-center rounded-sm bg-gradient-to-r from-[#EFCB97] to-[#F3933F]'
                    onClick={descinp}>
                    ▼
                  </button>
                </div>
                <p className='text-white text-[1.1]'>Days</p>
              </div>
              <input
                type='number'
                placeholder='Amount'
                className='number-stepper text-white w-[100%] bg-[#F3933F45] h-[50px] border-0 outline-none rounded-md px-4 box-border text-[1.3em] mt-5' ref={Amount}
              />
              <button
                className='bg-gradient-to-r from-[#EFCB97] to-[#F3933F] w-full h-[50px] rounded-md mt-7  text-white text-[1.1em] font-semibold'
                onClick={LocketChain}>
                Lock
              </button>
            </div>
          </div>
        </div>
      </div>

     { isOpenUnlock && (
      <div
        id="modal-overlay"
        className="fixed inset-0 flex justify-center items-center bg-[#00000070] z-[999]"
        onClick={closeModal}
      >
        <div className="w-[90%] sm:w-[60%] min-h-[250px] bg-[#56371D] rounded-md p-4" onClick={(e) => e.stopPropagation()}>
          <p className="text-white text-center text-2xl font-semibold mt-3">Enter the amount that you want to unlocked</p>
          <input
                type='number'
                placeholder='Amount'
                className='number-stepper  text-white w-[100%] bg-[#F29543] h-[50px] border-0 outline-none rounded-md px-4 box-border text-[1.3em] mt-7' ref={unlockAmount}
          />
          <div className='flex justify-end mt-5'>
          <button className="w-[150px] mr-2 bg-[#f2954377] h-[50px] rounded-[8px] mt-2  text-white text-[1.1em] font-semibold " onClick={()=> setIsOpenUnlock(false)}>
            Cancel
          </button>
           <button className="w-[150px] bg-[#F29543] h-[50px] rounded-[8px] mt-2  text-white text-[1.1em] font-semibold" onClick={handelUnlockToken}>
            Unlock
          </button>
          </div>
        </div>
      </div>
    )}


      {/* section 2  */}
      {locketChanis.length > 0 ? (
        <div className='bg-[#FFFFFF0F] border border-[#00000029] w-[95%] h-auto pb-10 m-auto rounded-lg mt-6'>
          <div>
            <h1 className='text-center text-[#EFCB97] font-bold mt-5 text-[1.3em] sm:text-[1.8em] pb-5'>Currently Locked Chians</h1>
            <div className='flex justify-around flex-wrap'>
              {locketChanis.map((data, index) => {           
                return (
                  <div
                    key={index}
                    className='w-[250px] min-h-[230px] bg-[#5e3916] rounded-md mx-3 mt-3 pb-2'>
                    <h1 className='text-center mt-3 font-semibold text-2xl text-[white]'>{walletSlectedChain.title} ({walletSlectedChain.nativeToken})</h1>
                    <p className='text-center mt-2 font-medium text-md text-[white]'>Amount:{(data.amount / 10n ** BigInt(data.LockedTokenDecimal)).toString()} {data.tokenSymbol}</p>
                    <div className='flex justify-between mt-4 items-center'>
                      <span className=' ml-2 p-3 bg-[#F39745] rounded-xl text-white text-[.5em]'>LOCK PROGRESS</span>
                      <p className='text-white mr-2'>30%</p>
                    </div>
                    <div className='px-2 mt-3'>
                      <div className='bg-[#AAAAAA] h-3 rounded-xl'>
                        <div className='bg-[#F39745] h-full  rounded-xl' style={{width:'30%'}}></div>
                      </div>
                    </div>
                    <div className='flex justify-center mt-5'>
                      <button className='p-3 px-5 m-auto d-block rounded-md bg-[#F39745] text-white' onClick={()=>handelUnlock(data,index)}>UNLOCK</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      {/* section 3  */}
      <div className='bg-[#FFFFFF0F] border border-[#FFFFFF29] w-[95%] h-auto pb-10 m-auto rounded-lg mt-6'>
        <h1 className='text-center text-[#EFCB97] font-bold mt-5 text-[1.3em] sm:text-[1.8em] pb-5'>WITHDRAWAL</h1>
        <div className='flex w-[80%] m-auto  relative mt-4 tracking-wide items-center'>
          <p className='text-white text-[1em]'>Token</p>
          <div className='absolute right-0 text-white text-[1.1em] font-bold'>
            <div className='flex items-center  py-3 cursor-pointer hover:bg-black hover:text-white transition-colors'>
              <img src='./eth.png' alt='ETH' className='w-6 h-6 mr-3 ' />
              <span>ETH</span>
            </div>
          </div>
        </div>

        <div className='flex w-[80%] m-auto  relative mt-6 tracking-wide items-center'>
          <p className='text-white text-[1em]'>Lock Duration</p>
          <p className='absolute right-0 text-white text-[1.1em] font-bold'>$345.67</p>
        </div>

        <div className='bg-[#F3933F45] w-[80%] m-auto rounded-lg h-[15px] mt-5'>
          <div className='bg-gradient-to-r from-[#EFCB97] to-[#F3933F] w-[40%]  text-white text-[1.1em] font-semibold  rounded-lg h-[15px] mt-5'></div>
        </div>

        <button className='bg-gradient-to-r from-[#EFCB97] to-[#F3933F] w-[80%] m-auto block text-white text-[1.1em] font-semibold h-[50px] rounded-md mt-7'>Withdrawal</button>
      </div>
    </div>
  );
};

export default LockToken;
