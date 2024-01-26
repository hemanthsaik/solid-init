import { Component } from "solid-js";
import { Button } from "./ui/button";
import { A, useLocation } from "@solidjs/router";

interface NavItemProps {
  label: string;
  link: string;
}

const NavItem: Component<NavItemProps> = ({ label, link }) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <A href={`/dashboard${link}`}>
      <Button
        variant={pathname === `/dashboard${link}` ? "default" : "ghost"}
        class="w-full justify-start"
      >
        {label}
      </Button>
    </A>
  );
};

export default NavItem;
