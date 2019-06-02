import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";

import { Row } from "../src/layout.jsx";
import { Dropdown } from "../src/header/dropdown.jsx";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Dropdown", module).add("with emoji", () => {
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

  function fixurl(url) {
    // The "Report a content issue" menu item has a link that requires
    // the document slug, so we work that in here.
    url = url.replace("{{SLUG}}", encodeURIComponent(documentData.slug));
    if (!url.startsWith("https://")) {
      url = `/${locale}/docs/${url}`;
    }
    return url;
  }

  return menus.map((m, index) => (
    <Row css={styles.menus}>
      <React.Fragment key={index}>
        <Dropdown label={<a href={fixurl(m.url)}>{gettext(m.label)}</a>}>
          {m.items.map((item, index) => (
            <li key={index}>
              {item.external ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={fixurl(item.url)}
                >
                  {gettext(item.label)} &#x1f310;
                </a>
              ) : (
                <a href={fixurl(item.url)}>{gettext(item.label)}</a>
              )}
            </li>
          ))}
        </Dropdown>
        {index < menus.length - 1 && <Strut width={16} />}
      </React.Fragment>
    </Row>
  ));
});
