import { createContext } from "react";
import { MessageDisplayTypes } from "./types";

interface MessageDisplayContextType {
  type: MessageDisplayTypes;
}

export const MessageDisplayContext = createContext<MessageDisplayContextType | undefined>(undefined);
