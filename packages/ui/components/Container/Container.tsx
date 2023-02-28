import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;
