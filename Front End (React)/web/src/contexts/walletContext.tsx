import { ethers } from "ethers";
import { createContext, ReactNode, useState } from "react";

interface WalletContextType {
  provider: ethers.JsonRpcApiProvider | null;
  setProvider: (provider: ethers.JsonRpcApiProvider | null) => void;
  address: string | null;
  setAddress: (address: string | null) => void;
  isConnected: boolean;
  setIsConnected: (isConnected: boolean) => void;
}

export const WalletContext = createContext({} as WalletContextType);

interface WalletProviderProps {
  children: ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  const [provider, setProvider] = useState<ethers.JsonRpcApiProvider | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  return (
    <WalletContext.Provider value={{ provider, address, isConnected, setProvider, setAddress, setIsConnected }}>
      { children }
    </WalletContext.Provider>
  )
}