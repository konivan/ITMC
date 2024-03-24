import { WalletSDK } from "@roninnetwork/wallet-sdk";

export const connectWallet = async (setUserAddress) => {
    function checkRoninInstalled() {
      if ("ronin" in window) {
        return true;
      }
      window.open("https://wallet.roninchain.com", "_blank");
      return false;
    }
    const sdk = new WalletSDK();
    await sdk.connectInjected();

    const isInstalled = checkRoninInstalled();
    if (isInstalled === false) {
      return;
    }

    const accounts = await sdk.requestAccounts();
    if (accounts) {
      localStorage.setItem("adress", accounts[0]);
      setUserAddress(accounts[0]);
    }
  };