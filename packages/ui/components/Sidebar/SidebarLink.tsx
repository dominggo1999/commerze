import React from "react";
import { Link, LinkProps } from "react-router-dom";
import clsx from "clsx";

export interface SidebarLinkProps extends LinkProps {
  onClick?: () => void;
  isActive?: boolean;
  children: string;
  icon: React.ReactNode;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  onClick = () => {},
  isActive = false,
  children,
  icon,
  ...restLinkProps
}) => {
  return (
    <Link
      className={clsx(
        "mb-2 flex w-full items-center gap-x-4 rounded-md py-2 px-3 hover:bg-primary-300/30 dark:hover:bg-primary-300/10",
        isActive && "bg-primary-300/30 dark:bg-primary-300/10",
      )}
      onClick={onClick}
      {...restLinkProps}
    >
      <span className="text-xl text-primary-500">{icon}</span>
      {children}
    </Link>
  );
};

export default SidebarLink;
