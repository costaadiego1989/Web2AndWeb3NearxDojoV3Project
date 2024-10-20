import { ReactNode } from "react";
import { MessageDisplayContainer } from "./styled";
import { MessageDisplayContext } from "./context";
import { MessageDisplayTypes } from "./types";

interface MessageDisplayProps {
  type: MessageDisplayTypes;
  children: ReactNode;
}

export function MessageDisplay({ type, children }: MessageDisplayProps) {
  return (
    <MessageDisplayContext.Provider value={{ type }}>
      <MessageDisplayContainer type={type}>
        { children }
      </MessageDisplayContainer>
    </MessageDisplayContext.Provider>
  )
}