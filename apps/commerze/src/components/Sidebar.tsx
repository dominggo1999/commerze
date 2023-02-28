import React from "react";
import { Sidebar as SidebarContainer, SidebarLink } from "@acme/ui";
import { AiOutlineHome } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { MdPermContactCalendar } from "react-icons/md";

import { useSidebarStore } from "stores/index";

const links = [
  {
    icon: <AiOutlineHome />,
    path: "/",
    label: "Home",
  },
  {
    icon: <BiNews />,
    path: "/about",
    label: "About",
  },
  {
    icon: <MdPermContactCalendar />,
    path: "/contact",
    label: "Contact",
  },
];

const Sidebar: React.FC = () => {
  const { isOpen, setIsOpen } = useSidebarStore();

  return (
    <SidebarContainer setOpen={setIsOpen} open={isOpen}>
      {links?.map((link) => {
        return (
          <SidebarLink
            onClick={() => setIsOpen(false)}
            to={link.path}
            key={link.path}
            icon={link.icon}
          >
            {link.label}
          </SidebarLink>
        );
      })}
    </SidebarContainer>
  );
};

export default Sidebar;
