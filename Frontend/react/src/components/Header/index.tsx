import { HeaderContainer } from "./styled";
import { Wallet } from "../Wallet";

import logo from "../../assets/img/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
      <Wallet />
    </HeaderContainer>
  )
}