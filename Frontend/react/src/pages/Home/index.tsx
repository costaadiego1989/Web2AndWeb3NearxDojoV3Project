import { useContext, useState } from "react";
import { Button, Form, HomeContainer, Input } from "./styled";
import { ethers } from "ethers";

import abi from "../../assets/abi.json";
import { WalletContext } from "../../contexts/walletContext";
import { MessageDisplay } from "../../components/MessageDisplay";
import { MessageDisplayHeader } from "../../components/MessageDisplay/MessageDisplayHeader";
import { Message } from "../../components/MessageDisplay/styled";
import { shortenAddress } from "../../utils/helpers";

export function Home() {
  const { provider, address, error, setError } = useContext(WalletContext);

  const [message, setMessage] = useState<string>('');
  const [submittedMessage, setSubmittedMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [transaction, setTransaction] = useState<any>('');

  const contractAddress = "0xD2989B49EB213aed545c112F5064e99B6a7365D7";  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!provider || !address) {
      setError({ isError: true, title: `Provider or account not found!`});      
      setLoading(false);
      return;
    }

    try {
      const signer = await provider.getSigner();
      const messageContract = new ethers.Contract(contractAddress, abi, signer);

      const tx = await messageContract.setMessage(message);
      setTransaction(tx);

      await tx.wait();

      setSubmittedMessage(message);
      setMessage("");
      setLoading(false);            
    } catch (error) {
      setError({ isError: true, title: `Error on interacting with the contract:`, message: String(error) });
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

      {transaction && !submittedMessage && (
        <MessageDisplay type="info">
          <MessageDisplayHeader>Processing Transaction...</MessageDisplayHeader>
          <Message>
            <p>Hash Transaction: {transaction.hash}</p>
          </Message>
        </MessageDisplay>
      )}
      
      {submittedMessage && (
        <MessageDisplay type="info">
          <MessageDisplayHeader>Transaction confirmed on the blockchain:</MessageDisplayHeader>
          <Message>
            <p>The message <span>{submittedMessage}</span> was storaged in the smartcontract!</p>
            <p>
              Link Transaction: 
              <a href={`https://amoy.polygonscan.com/tx/${transaction.hash}`} target="_blank">
                https://amoy.polygonscan.com/tx/{shortenAddress(transaction.hash)}
              </a>
            </p>
          </Message>      
        </MessageDisplay>
      )}

      {error?.isError && (
        <MessageDisplay type="error">
          <MessageDisplayHeader>Error!</MessageDisplayHeader>
          <Message>{error.message}</Message>
        </MessageDisplay>
      )}
    </HomeContainer>
  );
}