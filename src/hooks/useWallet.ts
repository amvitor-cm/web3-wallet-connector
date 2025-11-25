import { useState, useEffect, useCallback } from 'react';
import { BrowserProvider, JsonRpcSigner, Eip1193Provider, formatEther } from 'ethers';

declare global {
  interface Window {
    ethereum?: Eip1193Provider;
  }
}

interface WalletState {
  account: string | null;
  balance: string;
  chainId: number | null;
  isConnecting: boolean;
  error: string | null;
}

export const useWallet = () => {
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
  const [walletState, setWalletState] = useState<WalletState>({
    account: null,
    balance: '0',
    chainId: null,
    isConnecting: false,
    error: null
  });

  const updateBalance = useCallback(async (address: string, provider: BrowserProvider) => {
    try {
      const balance = await provider.getBalance(address);
      setWalletState(prev => ({ ...prev, balance: formatEther(balance) }));
    } catch (error) {
      console.warn('Failed to fetch balance:', error);
    }
  }, []);

  const resetWallet = useCallback(() => {
    setProvider(null);
    setSigner(null);
    setWalletState({
      account: null,
      balance: '0',
      chainId: null,
      isConnecting: false,
      error: null
    });
  }, []);

  const connectWallet = useCallback(async () => {
    if (!window.ethereum) {
      setWalletState(prev => ({ ...prev, error: 'No Ethereum wallet found. Install MetaMask.' }));
      return;
    }

    setWalletState(prev => ({ ...prev, isConnecting: true, error: null }));

    try {
      const ethersProvider = new BrowserProvider(window.ethereum);
      const accounts = await ethersProvider.send('eth_requestAccounts', []);
      
      if (accounts.length === 0) {
        throw new Error('No accounts found');
      }

      const network = await ethersProvider.getNetwork();
      const signer = await ethersProvider.getSigner();
      
      setProvider(ethersProvider);
      setSigner(signer);
      
      setWalletState(prev => ({
        ...prev,
        account: accounts[0],
        chainId: Number(network.chainId),
        isConnecting: false
      }));

      await updateBalance(accounts[0], ethersProvider);
    } catch (error: any) {
      // User rejected the connection
      if (error.code === 4001) {
        setWalletState(prev => ({ ...prev, error: 'Connection rejected by user' }));
      } else {
        setWalletState(prev => ({ ...prev, error: error.message || 'Failed to connect' }));
      }
      setWalletState(prev => ({ ...prev, isConnecting: false }));
    }
  }, [updateBalance]);

  useEffect(() => {
    if (!window.ethereum || !provider) return;

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        resetWallet();
        setWalletState(prev => ({ ...prev, error: 'Wallet disconnected' }));
      } else if (accounts[0] !== walletState.account) {
        setWalletState(prev => ({ ...prev, account: accounts[0] }));
        updateBalance(accounts[0], provider);
      }
    };

    const handleChainChanged = (chainId: string) => {
      setWalletState(prev => ({ ...prev, chainId: parseInt(chainId, 16) }));
      // Refresh page on network change as recommended by MetaMask docs
      window.location.reload();
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);

    return () => {
      window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
      window.ethereum?.removeListener('chainChanged', handleChainChanged);
    };
  }, [provider, walletState.account, updateBalance, resetWallet]);

  return {
    ...walletState,
    signer,
    connectWallet,
    disconnectWallet: resetWallet
  };
};
