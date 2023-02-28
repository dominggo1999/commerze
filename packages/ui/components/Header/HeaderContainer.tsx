import React from "react";
import { Container } from "../Container";

export interface HeaderContainerProps {
  children: React.ReactNode;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ children }) => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-16 w-full border-b border-background-200 border-black/10 bg-white dark:bg-background-400">
      <Container>{children}</Container>
    </header>
  );
};

export default HeaderContainer;
