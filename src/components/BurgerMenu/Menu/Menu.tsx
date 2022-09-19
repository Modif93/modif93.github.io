import React, { useState, useRef } from "react";

import Hamburger from "../Burger/Burger";
import { StyledMenu, StyledLink } from "./Menu.styled";

import { useOnClickOutside } from "../hooks";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <StyledMenu open={open}>
        <StyledLink onClick={() => close()}>Sign in</StyledLink>
        <StyledLink onClick={() => close()}>Sign out</StyledLink>
        <StyledLink onClick={() => close()}>Home</StyledLink>
        <StyledLink onClick={() => close()}>Set</StyledLink>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;