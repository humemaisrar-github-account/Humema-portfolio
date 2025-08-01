import React from "react";
import NavLink from "./NavLink";

// Define the type for each link object
type LinkItem = {
  path: string;
  title: string;
};

// Define props type
type MenuOverlayProps = {
  links: LinkItem[];
};

const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title}  />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
