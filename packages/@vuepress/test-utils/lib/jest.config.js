const path = require("path");

module.exports = {
  rootDir: path.resolve(__dirname, ".."),
  verbose: true,
  testURL: "http://localhost/",
  moduleFileExtensions: ["js", "vue", "ts", "json"],
  testEnvironment: "jsdom",
  testRegex: "(/__test__/.*|(\\.|/)(test|spec))\\.(ts|js)?$",
  testPathIgnorePatterns: ["test.js", path.resolve(__dirname, "../test")],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "@vue/vue2-jest",
    "^.+\\.ts?$": "ts-jest",
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
};
