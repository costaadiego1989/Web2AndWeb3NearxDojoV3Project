import styled from "styled-components";
import { colors } from "../../styles/colors";
import { MessageDisplayTypes } from "./types";

interface MessageDisplayContainerProps {
  type: MessageDisplayTypes;
}

export const MessageDisplayContainer = styled.div<MessageDisplayContainerProps>`
  margin-top: 20px;
  background-color: ${({ type }) => type === "info" ? colors.background.blue : colors.background.red };
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: auto;
  max-width: 800px;
  text-align: center;
`;

export const Message = styled.div`
  font-size: 1rem;
  color: #333;
  padding: 10px;
  overflow-x: hidden; 

  a {
    margin: 0 5px;
  }

  p {
    margin-top: 5px;
    span {
      font-weight: 600;
    }
  }
`;

