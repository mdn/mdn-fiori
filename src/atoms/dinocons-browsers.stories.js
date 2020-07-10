import React from "react";

import Chrome from "../../node_modules/mdn-minimalist/dinocons/browsers/chrome.svg";
import Edge from "../../node_modules/mdn-minimalist/dinocons/browsers/edge.svg";
import Firefox from "../../node_modules/mdn-minimalist/dinocons/browsers/firefox.svg";
import InternetExplorer from "../../node_modules/mdn-minimalist/dinocons/browsers/internet-explorer.svg";
import Opera from "../../node_modules/mdn-minimalist/dinocons/browsers/opera.svg";
import Safari from "../../node_modules/mdn-minimalist/dinocons/browsers/safari.svg";
import SamsungInternet from "../../node_modules/mdn-minimalist/dinocons/browsers/samsung-internet.svg";

export default {
  title: "Atoms|Dinocons|Browsers"
};

const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px"
};

const iconContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "24px",
  padding: "5px",
  border: "1px solid #212121",
  width: "100px",
  height: "100px"
};

export const browsers = () => (
  <>
    <h2>Browsers</h2>
    <div style={wrapperStyle}>
      <div style={iconContainer}>
        <Chrome />
      </div>
      <div style={iconContainer}>
        <Edge />
      </div>
      <div style={iconContainer}>
        <Firefox />
      </div>
      <div style={iconContainer}>
        <InternetExplorer />
      </div>
      <div style={iconContainer}>
        <Opera />
      </div>
      <div style={iconContainer}>
        <Safari />
      </div>
      <div style={iconContainer}>
        <SamsungInternet />
      </div>
    </div>
  </>
);
