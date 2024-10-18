import styled from "styled-components";


export const Container = styled.div`
  @media (min-width: 701px) {
    position: absolute;
    right: 20px;    
  }
`;

interface WalletButtonProps {
  connected: boolean;
}

export const WalletButton = styled.button<WalletButtonProps>`
  width: 12rem;
  @media (min-width: 850px) {
    width: 17rem;    
  }
  padding: 15px 25px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: ${props => (props.connected ? '#4CAF50' : '#f44336')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: ${props => (props.connected ? '#a19c2a' : '#269b89')};
  }
`;

