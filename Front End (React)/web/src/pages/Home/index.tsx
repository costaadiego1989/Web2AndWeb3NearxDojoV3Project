import { useState } from "react";
import { Button, Form, HomeContainer, Input, Message, MessageDisplay, Title } from "./style";

export function Home() {
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulando a confirmação da transação na blockchain
    setTimeout(() => {
      setSubmittedMessage(message);
      setMessage('');
      setLoading(false);
    }, 2000);
  };

  return (
    <HomeContainer>
      <Title>dApp Message</Title>

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