import React from "react";
import { storiesOf } from "@storybook/react";

import { css } from "@emotion/core";

import { Row, Strut } from "../src/layout.jsx";
import Dropdown from "../src/header/dropdown.jsx";

storiesOf("Dropdown", module).add("Main menu", () => {
  const styles = {
    menus: css({
      gridArea: "M",
      flexWrap: "wrap",
      fontSize: 15,
      fontWeight: "bold",
      button: {
        lineHeight: "32px"
      }
    })
  };
  const menus = [
    {
      label: "Technologies",
      url: "Web",
      items: [
        { url: "Web/HTML", label: "HTML" },
        { url: "Web/CSS", label: "CSS" },
        { url: "Web/JavaScript", label: "JavaScript" },
        { url: "Web/Guide/Graphics", label: "Graphics" },
        { url: "Web/HTTP", label: "HTTP" },
        { url: "Web/API", label: "APIs / DOM" },
        {
          url: "Mozilla/Add-ons/WebExtensions",
          label: "Browser Extensions"
        },
        { url: "Web/MathML", label: "MathML" }
      ]
    }
  ];

  return menus.map((m, index) => (
    <Row css={styles.menus}>
      <React.Fragment key={index}>
        <Dropdown label={<a href={m.url}>{m.label}</a>}>
          {m.items.map((item, index) => (
            <li key={index}>
              {item.external ? (
                <a target="_blank" rel="noopener noreferrer" href={item.url}>
                  {item.label} &#x1f310;
                </a>
              ) : (
                <a href={item.url}>{item.label}</a>
              )}
            </li>
          ))}
        </Dropdown>
        {index < menus.length - 1 && <Strut width={16} />}
      </React.Fragment>
    </Row>
  ));
});
