import { cookieStorage, createStorage, http } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, bsc, polygon, optimism, base, bscTestnet } from "wagmi/chains";





export const projectId = "2edff17094e7d6ed686efa1e6aaa62f7";

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// const bscTestnet = {
//   id: 97,
//   name: "Binance Smart Chain Testnet",
//   nativeCurrency: {
//     name: "Binance Coin",
//     symbol: "BNB",
//     decimals: 18,
//   },
//   rpcUrls: {
//     default: "https://bnb-testnet.g.alchemy.com/v2/6E0qJimyqIZmGB8d6dnxrsl8SRbLH0yG",
//   },
//   blockExplorers: {
//     default: { name: "BscScan", url: "https://testnet.bscscan.com" },
//   },
//   testnet: true,
// };

export const networks = [bscTestnet,mainnet, bsc, polygon, optimism,base];

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  transport:{
    [bscTestnet.id]:http('https://rpc.ankr.com/bsc_testnet')
  },
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
