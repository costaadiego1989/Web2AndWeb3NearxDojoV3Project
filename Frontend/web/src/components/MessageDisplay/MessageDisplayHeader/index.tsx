import { ReactNode } from "react";
import { useMessageDisplay } from "../useMessageDisplay";
import { MessageDisplayHeaderContainer } from "./styled";
import { Info, Warning } from "@phosphor-icons/react";

interface MessageDisplayHeaderProps {
  children: ReactNode;
}

export function MessageDisplayHeader({ children }: MessageDisplayHeaderProps) {
  const { type } = useMessageDisplay();

  return (
    <MessageDisplayHeaderContainer>
      {children}
      { type === "info" ? (
        <Info size={28} weight="fill" color="#302772" />
      ) : (
        <Warning size={28} weight="fill" color="#e1e12e" />
      )}      
    </MessageDisplayHeaderContainer>
  )
}