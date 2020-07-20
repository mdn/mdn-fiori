import React from "react";

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    aria-hidden="true"
  >
    <path d="M26 15c-1.484-2.297-3.516-4.266-5.953-5.516A6.943 6.943 0 0 1 21 13c0 3.859-3.141 7-7 7s-7-3.141-7-7c0-1.234.328-2.453.953-3.516C5.515 10.734 3.484 12.703 2 15c2.672 4.125 6.984 7 12 7s9.328-2.875 12-7zM14.75 9a.76.76 0 0 0-.75-.75c-2.609 0-4.75 2.141-4.75 4.75 0 .406.344.75.75.75s.75-.344.75-.75A3.268 3.268 0 0 1 14 9.75a.76.76 0 0 0 .75-.75zM28 15c0 .391-.125.75-.313 1.078C24.812 20.812 19.546 24 14 24S3.187 20.797.313 16.078C.126 15.75 0 15.39 0 15s.125-.75.313-1.078C3.188 9.203 8.454 6 14 6s10.813 3.203 13.687 7.922c.187.328.313.688.313 1.078z" />
  </svg>
);

const allButtonsStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px"
};

export default {
  title: "Atoms|Buttons"
};

export const allButtons = () => (
  <div style={allButtonsStyle}>
    <button>Primary button</button>
    <button className="button positive">Positive button</button>
    <button className="button danger">Danger button</button>
    <button className="button inactive">Inactive button</button>
    <button className="button outline">Outline button</button>
    <button className="button positive outline">Positive outline button</button>
    <button className="button danger outline">Danger outline button</button>
    <button className="button icon danger">{icon} With icon</button>
    <button className="button icon outline positive">{icon} With icon</button>
    <button className="button icon right positive">
      With icon on the right {icon}
    </button>
    <button className="button icon right outline">
      With icon on the right {icon}
    </button>
  </div>
);

export const primary = () => {
  return (
    <div style={allButtonsStyle}>
      <button className="button">Primary button</button>
      <button className="button outline">Primary outline button</button>
    </div>
  );
};

export const positive = () => (
  <div style={allButtonsStyle}>
    <button className="button positive">Positive button</button>
    <button className="button positive outline">Positive outline button</button>
  </div>
);

export const danger = () => (
  <div style={allButtonsStyle}>
    <button className="button danger">Danger button</button>
    <button className="button danger outline">Danger outline button</button>
  </div>
);

export const inactive = () => (
  <button className="button inactive">Inactive button</button>
);

export const withIconsOnLeft = () => (
  <div style={allButtonsStyle}>
    <button className="button icon">{icon} With icon</button>
    <button className="button icon outline">{icon} With icon</button>
  </div>
);

export const withIconsOnRight = () => (
  <div style={allButtonsStyle}>
    <button className="button icon right">With icon on the right {icon}</button>
    <button className="button icon right outline">
      With icon on the right {icon}
    </button>
  </div>
);

export const link = () => (
  <a href="/" className="button">
    I am a link but look like a button
  </a>
);

export const input = () => (
  <input className="button" type="submit" value="I am really an input" />
);
