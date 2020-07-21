import * as React from "react";

import Logo from "../atoms/logo.jsx";
import MainMenu from "../molecules/main-menu.jsx";

import "./header.scss";

export default function Header() {
  return (
    <header className="page-header" data-testid="header">
      <Logo />
      <MainMenu />
    </header>
  );
}
