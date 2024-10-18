import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  height: 20vh;
  padding: 5px;
  
  background: black;

  img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 20rem;
  }

  p {
    position: absolute;
    right: 0;
    padding: 5px;
    ${mixins.fonts["roboto-black"]};
  }
`