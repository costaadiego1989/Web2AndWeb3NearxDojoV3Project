import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  
  @media (max-width: 700px) {
    flex-direction: column;
  }

  @media (min-width: 701px) {
    position: relative;    
  }

  height: 20vh;
  padding: 5px;
  
  background: black;

  img {
    width: 15rem;
    @media (min-width: 701px) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 20rem;
    }
  }

  p {
    position: absolute;
    right: 0;
    padding: 5px;
    ${mixins.fonts["roboto-black"]};
  }
`