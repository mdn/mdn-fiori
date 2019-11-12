#!/usr/bin/env node
const fs = require("fs");
const fse = require("fs-extra");

const BUILD_DEST = "./dist";
const INCLUDES_DIR = "./styleguide/includes";
const PAGES_DIR = "./styleguide/pages";
const INCLUDES_REGEX = /\[\[.*\]\]/g;

const getHTMLHead = () => {
  try {
    return fse.readFileSync(`${INCLUDES_DIR}/head.html`);
  } catch (err) {
    console.error(`Error thrown while getting head, ${err.toString()}`);
  }
};

const build = () => {
  let pages = [];

  try {
    pages = fs.readdirSync(PAGES_DIR);
  } catch (err) {
    console.error(`Error thrown while reading directory: ${err.toString()}`);
  }

  pages.forEach(page => {
    try {
      let pageContents = fse.readFile(
        `${PAGES_DIR}/${page}`,
        "utf-8",
        (err, fileContent) => {
          if (err) {
            console.error(err);
            return;
          }

          let processedFileContents = "";
          let resultsArray = [];

          while ((resultsArray = INCLUDES_REGEX.exec(fileContent)) !== null) {
            if (resultsArray[0] === "[[head]]") {
              processedFileContents = fileContent.replace(
                "[[head]]",
                getHTMLHead()
              );
            }
          }

          try {
            fse.outputFileSync(
              `${BUILD_DEST}/${page}`,
              processedFileContents,
              "utf-8"
            );
          } catch (err) {
            console.error(
              `Error thrown while writing file ${page}: ${err.toString()}`
            );
          }
        }
      );
    } catch (err) {
      console.error(`Error reading file ${page}: ${err.toString()}`);
    }
  });
};

const builder = () => {
  build();
};

builder();
