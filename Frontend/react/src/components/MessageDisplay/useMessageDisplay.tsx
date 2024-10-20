import { useContext } from "react";
import { MessageDisplayContext } from "./context";

export const useMessageDisplay = () => {
  const context = useContext(MessageDisplayContext);
  if (!context) {
    throw new Error("useMessageDisplay must be used within a MessageDisplayProvider");
  }

  return context;
}

