import { useContext } from "react";
import { Container, WalletButton } from "./styled";
import { ethers } from "ethers";
import { WalletContext } from "../../contexts/walletContext";
import { shortenAddress } from "../../utils/helpers";

export function Wallet() {
  const { setIsConnected, setProvider, setAddress, address, isConnected } = useContext(WalletContext);

  const connectWallet = async () => {
    if (!window.ethereum) {
      console.log(`Metamask is not installed!`);
      return;      
    }

    try {
      
      const provider = new ethers.BrowserProvider(window.ethereum, 80002);
      setProvider(provider);
      console.log(`Connected to ${(await provider.getNetwork()).name} successfuly!`);

      try {
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAddress(address);
        setIsConnected(true);
        console.log(`Account connected: ${address}`);          

      } catch (error) {
        console.log(`No one account found!`);
      }
    } catch (error) {
      console.log(`Error on connect to network: `, error);        
    }
  }

  const disconnectWallet = () => {
    setAddress('');
    setProvider(null);
    setIsConnected(false);
  };

  return (
    <Container>
      <WalletButton 
        onClick={isConnected ? disconnectWallet : connectWallet} connected={isConnected}
        onMouseOver={ e => e.currentTarget.textContent = isConnected ? "Disconnect Wallet" : "Connect Wallet" }
        onMouseOut={ e => e.currentTarget.textContent = isConnected ? `Connected: ${shortenAddress(address!)}` : 'Disconnected'}
      >
        {isConnected ? `Connected: ${shortenAddress(address!)}` : 'Disconnected'}
      </WalletButton>
    </Container>
  );
}