import clsx from "clsx";
import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <div className={clsx("container mx-auto", className)} {...restProps}>
      {children}
    </div>
  );
};

export default Container;
