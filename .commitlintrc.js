const fs = require("fs");
const path = require("path");

const VuepressPackages = fs.readdirSync(path.resolve(__dirname, "packages"));

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["cli", "zh", ...VuepressPackages]],
  },
};
