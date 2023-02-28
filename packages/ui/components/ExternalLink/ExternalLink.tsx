import React, { forwardRef } from "react";
import { UrlObject } from "url";

export interface LinkProps {
  href: string | UrlObject;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

const Link: React.FC<LinkProps> = forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const { href, children, className, ...otherProps } = props;
    return (
      <a
        href={typeof href === "string" ? href : "/"}
        {...otherProps}
        target="_blank"
        rel="noreferrer noopener"
        ref={ref}
        className={className}
      >
        {children}
      </a>
    );
  },
);

export default Link;
