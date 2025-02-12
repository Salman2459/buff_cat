// getDecimal.js
import { readContract, waitForTransactionReceipt, writeContract } from "@wagmi/core";
import { Contract_abi, ContractAddress, Token_abi, TokenAddress } from "../ABI & ContractKeys/Abi"; 
import { config } from "./context/wagmiAdapter";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

// Read Contract Functions

export async function getDecimal(LokedTokenDecimal) {
  try {
    const decimal = await readContract(config, {
      address:  TokenAddress, 
      abi: Token_abi,
      functionName: "decimals", 
    });
    return decimal;
  } catch (error) {
    console.error("Contract call error Decimal:", error);
    throw error;
  }
}

export async function GetuserLocked(address) {
  try {
    const userLocked = await readContract(config, {
      address: ContractAddress, 
      abi: Contract_abi,
      functionName: "getUserLockDetails", 
      args:[address]
    });
    return userLocked;
  } catch (error) {
    console.error("Contract call error:", error);
    throw error;
  }
}

export async function GetTotalLocked() {
  try {
    const TotalLocked = await readContract(config, {
      address: ContractAddress, 
      abi: Contract_abi,
      functionName: "totalLocked", 
    });
    return TotalLocked;
  } catch (error) {
    console.error("Contract call error:", error);
    throw error;
  }
}

export async function LockedPaticipants() {
  try {
    const TotalLocked = await readContract(config, {
      address: ContractAddress, 
      abi: Contract_abi,
      functionName: "totalParticipants", 
    });
    return TotalLocked;
  } catch (error) {
    console.error("Contract call error:", error);
    throw error;
  }
}

export async function USerDividence(address,index) {
  try {
    const TotalLocked = await readContract(config, {
      address: ContractAddress, 
      abi: Contract_abi,
      functionName: "getUserDividends", 
      args:[address,index]
    });
    console.log(TotalLocked,'=aa=a=a=a=a=a=a==a=a=a=a==a')
    return TotalLocked;
  } catch (error) {
    console.error("Contract call error:", error);
    throw error;
  }
}


export async function GetLocketTokenNumber(userAddress) {
  const AllLockedTokens = [] 
  try {
    const LockedNumber = await readContract(config, {
      address: ContractAddress, 
      abi: Contract_abi,
      functionName: "count", 
      args:[userAddress]
    });


    for (let i = 0; i < Number(LockedNumber); i++) {
      const LockedToken = await readContract(config, {
        address: ContractAddress, 
        abi: Contract_abi,
        functionName: "userLocks", 
        args:[userAddress,i]
      });
      AllLockedTokens.push(LockedToken)
    }

    return AllLockedTokens;
  } catch (error) {
    console.error("Contract call error:", error);
    throw error;
  }
}


// Token Functions 

  export async function fetchTokenName(address) {
      try {
        const name = await readContract(config, {
          abi:Token_abi,
          address: address,
          functionName: 'name',
          args: [],
        });
        return name
      } catch (error) {
        console.log(error);
      }
    }

 export async function fetchTokenSymbol(address) {
      try {
        const symbole = await readContract(config, {
          abi:Token_abi,
          address: address,
          functionName: 'symbol',
          args: [],
        });
        return symbole
      } catch (error) {
        console.log(error);
      }
    }



// Write contract Functions 
export async function ApproveOrLockToken(TokenVerificationAddress,ApproveArguments,Amount,Duration) {
    try {
      const approvalHash = await writeContract(config, {
        address: TokenVerificationAddress,
        abi: Token_abi,
        functionName: "approve",
        args: ApproveArguments,
      });

      await waitForTransactionReceipt(config, { hash: approvalHash });
      console.log("Approval transaction hash:", approvalHash);

      const LockingTokens = await writeContract(config, {
        address: ContractAddress,
        abi: Contract_abi,
        functionName: "lockAssets",
        args: [TokenVerificationAddress, Amount, Duration],
      });

      return LockingTokens

    } catch (error) {
      console.error("Transaction failed:", error.message);
      toast.info('Transaction failed', { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce, });
    }
  }

  export async function ClaimReward(address,TokenAddress,index) {
    console.log(index)
    try {

      const LockingTokens = await writeContract(config, {
        address: ContractAddress,
        abi: Contract_abi,
        functionName: "claimRewards",
        args: [address,TokenAddress, index],
      });

      return LockingTokens

    } catch (error) {
      console.error("Transaction failed:", error.message);
      toast.info('Transaction failed', { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce, });
    }
  }

  export async function UnlockToken(TokenAddress,index,amount) {
    try {

      const UnLockingTokens = await writeContract(config, {
        address: ContractAddress,
        abi: Contract_abi,
        functionName: "unlockAssets",
        args: [TokenAddress, index,amount],
      });

      return UnLockingTokens

    } catch (error) {
      console.error("Transaction failed:", error.message);
      toast.info('Transaction failed', { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce, });
    }
  }

