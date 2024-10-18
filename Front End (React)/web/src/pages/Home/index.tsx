import { useContext, useState } from "react";
import { Button, Form, HomeContainer, Input, Message, MessageDisplay } from "./styled";
import { ethers } from "ethers";

import abi from "../../assets/abi.json";
import { WalletContext } from "../../contexts/walletContext";

export function Home() {
  const { provider, address } = useContext(WalletContext);

  const [message, setMessage] = useState<string>('');
  const [submittedMessage, setSubmittedMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const contractAddress = "0xD2989B49EB213aed545c112F5064e99B6a7365D7";  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!provider || !address) {
      console.log(`Provider or account not found!`);      
      setLoading(false);
      return;
    }

    try {
      const signer = await provider.getSigner();
      const messageContract = new ethers.Contract(contractAddress, abi, signer);

      const tx = await messageContract.setMessage(message);
      console.log(`Transaction sent: `, tx.hash);

      await tx.wait();
      console.log(`Transaction confirmed!`);

      setSubmittedMessage(message);
      setMessage("");
      setLoading(false);            
    } catch (error) {
      console.log(`Error on interacting with the contract: `, error);
      setLoading(false);
    }
  };

  return (
    <HomeContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </Button>
      </Form>
      
      {submittedMessage && (
        <MessageDisplay>
          <p>Message confirmed on the blockchain:</p>
          <Message>{submittedMessage}</Message>
        </MessageDisplay>
      )}
    </HomeContainer>
  );
}