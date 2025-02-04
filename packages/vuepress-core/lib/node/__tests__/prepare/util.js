const { fs, path } = require("@mr-hope/vuepress-shared-utils");
const { createMarkdown } = require("@mr-hope/vuepress-markdown");

const docsBaseDir = path.resolve(__dirname, "fixtures/docs");

function getDocument(relative) {
  return {
    filePath: path.join(docsBaseDir, relative),
    relative,
  };
}

const getMarkdown = createMarkdown;

const readFile = async (filePath) => await fs.readFile(filePath, "utf-8");

module.exports = {
  getMarkdown,
  getDocument,
  readFile,
};
