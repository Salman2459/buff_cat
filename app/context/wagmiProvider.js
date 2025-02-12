'use client';
import { wagmiAdapter, projectId } from '../context/wagmiAdapter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createAppKit } from '@reown/appkit/react';
import React from 'react';
import { cookieToInitialState, WagmiProvider } from 'wagmi';
import { mainnet, bsc, polygon, optimism, base, bscTestnet } from "wagmi/chains";


// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
  throw new Error('Project ID is not defined');
}

// Define Binance Smart Chain Testnet
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



// Define metadata
const metadata = {
  name: 'appkit-example',
  description: 'AppKit Example',
  url: 'https://appkitexampleapp.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
};

// UniSat Wallet Adapter
const unisatWalletAdapter = {
  id: 'unisat', // Unique identifier
  name: 'UniSat Wallet', // Display name
  icon: 'https://unisat.io/favicon.ico', // Wallet icon URL
  isAvailable: typeof window !== 'undefined' && typeof window.unisat !== 'undefined',
  connect: async () => {
    if (typeof window.unisat === 'undefined') {
      throw new Error('UniSat Wallet is not installed. Please install it to continue.');
    }
    try {
      const accounts = await window.unisat.request({ method: 'requestAccounts' });
      return { accounts }; // Return connected accounts
    } catch (error) {
      console.error('Error connecting to UniSat Wallet:', error);
      throw error;
    }
  },
};

// Create the modal with UniSat Wallet
const modal = createAppKit({
  adapters: [wagmiAdapter, unisatWalletAdapter],
  projectId,
  networks: [bscTestnet,mainnet, bsc, polygon, optimism,base],
  defaultNetwork: bscTestnet, // Set default network
  metadata: metadata,
  features: {
    analytics: true,
  },
  featuredWalletIds: [
    '7ee7b95f8cd71bd4b5759ef27c334f8c78fd5a30abf24571bb0e9add89bc5990',

  ],
});

function ContextProvider({ children, cookies }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig, cookies);

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export default ContextProvider;
