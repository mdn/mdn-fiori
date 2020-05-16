import { addParameters, configure } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import "./preview.scss";

const SOURCE_REGEX = /^\(\) => [`'"](.*)['`"]$/;

addParameters({
  a11y: {
    config: {},
    options: {
      restoreScroll: true
    }
  },
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});

const loadStories = () => {
  return [
    // load Docs first
    require.context("../docs", true, /intro.stories.mdx/),
    require.context("../docs", true, /\.stories\.(js|jsx|ts|tsx|mdx)$/),
    require.context("../stories", true, /\.stories\.(js|jsx|ts|tsx|mdx)$/)
  ];
};

configure(loadStories(), module);
