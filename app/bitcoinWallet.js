export const checkIfUnisatInstalled = () => {
  const provider = window?.unisat;
  if (!provider) {
    throw new Error("Please install Unisat wallet!");
  }
  return provider;
};
export const connectWallet = async () => {
  try {
    const provider = checkIfUnisatInstalled();
    const accounts = await provider?.requestAccounts();
    if (accounts.length < 0) return
    const balance = await provider?.getBalance();
    const network = await provider?.getNetwork();

    provider?.on('accountsChanged', (accounts) => {
      console.log('Account changed:', accounts);
    });

    return {
      address: accounts[0],
      balance,
      network
    };
  } catch (error) {

    console.error("Error connecting wallet:", error);
    // throw error;
  }
};

export const disconnectWallet = async () => {
  try {
    const provider = checkIfUnisatInstalled();

    provider?.disconnect();

    const accounts = await provider.getAccounts();

    if (accounts && accounts.length > 0) {
      return { success: true, message: "Please disconnect wallet from Unisat extension" };
    }
    const address = (accounts && accounts.length > 0) ? accounts[0] : ""
    return { success: true, message: "Wallet disconnected", accounts: address };
  } catch (error) {
    console.error("Error disconnecting wallet:", error);
    throw error;
  }
};

export const isWalletConnected = async () => {
  try {
    const provider = checkIfUnisatInstalled();
    const accounts = await provider.getAccounts();
    return accounts && accounts.length > 0;
  } catch (error) {
    return false;
  }
};

export const signMessage = async (message) => {
  try {
    const provider = checkIfUnisatInstalled();
    return await provider.signMessage(message);
  } catch (error) {
    console.error("Error signing message:", error);
    throw error;
  }
};

export const sendBitcoin = async (address, amount) => {
  try {
    const provider = checkIfUnisatInstalled();
    return await provider.sendBitcoin(address, amount);
  } catch (error) {
    console.error("Error sending bitcoin:", error);
    throw error;
  }
};

export const signPsbt = async (psbtHex) => {
  try {
    const provider = checkIfUnisatInstalled();
    return await provider.signPsbt(psbtHex);
  } catch (error) {
    console.error("Error signing PSBT:", error);
    throw error;
  }
};

export const getBalance = async () => {
  try {
    const provider = checkIfUnisatInstalled();
    return await provider.getBalance();
  } catch (error) {
    console.error("Error getting balance:", error);
    throw error;
  }
};

export const getNetwork = async () => {
  try {
    const provider = checkIfUnisatInstalled();
    return await provider.getNetwork();
  } catch (error) {
    console.error("Error getting network:", error);
    throw error;
  }
};





