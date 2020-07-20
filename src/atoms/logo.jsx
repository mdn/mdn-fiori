import * as React from "react";

import LogoSVG from "../icons/logo.svg";

import "./logo.scss";

export default function Logo() {
  return (
    <a href="/" className="logo" aria-label="MDN Web Docs">
      <LogoSVG />
    </a>
  );
}
