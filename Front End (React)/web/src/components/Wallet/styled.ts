import styled from "styled-components";
import { colors } from "../../styles/colors";
import { mixins } from "../../styles/mixins";


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
  padding: 15px 25px;  
  background-color: ${props => (props.connected ? colors.button.on : colors.button.off)};
  border: none;
  border-radius: 5px;
  transition: 0.3s ease;

  @media (min-width: 850px) {
    width: 17rem;    
  }

  ${mixins.fonts.button.wallet};

  &:hover {
    background-color: ${props => (props.connected ? colors.button.preoff : colors.button.preon)};
  }
`;

