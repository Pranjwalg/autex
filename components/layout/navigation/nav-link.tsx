import { ChevronDown } from "lucide-react";
import React from "react";

interface NavLinkProps {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const NavLink = ({ label, href, hasDropdown }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="text-white flex items-center space-x-1 hover:text-[#E84E36] transition-colors"
    >
      <span>{label}</span>
      {hasDropdown && <ChevronDown size={16} />}
    </a>
  );
};

export default NavLink;
