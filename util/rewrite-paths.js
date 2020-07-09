const fs = require("fs");
const klawSync = require("klaw-sync");

function rewrite() {
  const baseURL = "https://mdn.github.io/mdn-fiori";
  const files = klawSync("./storybook-static");
  const regExp = /url\("{1,}?(\/typography|\/dinocons)/g;

  files.forEach(file => {
    if (fs.statSync(file.path).isFile()) {
      let fileContents = fs.readFileSync(file.path, "utf-8");
      let match;

      while ((match = regExp.exec(fileContents)) !== null) {
        fileContents = fileContents.replace(
          match[0],
          `url("${baseURL}${match[1]}`
        );
      }
      fs.writeFileSync(file.path, fileContents, "utf-8");
    }
  });
}

rewrite();
