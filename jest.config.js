module.exports = {
  globals: {
    "<rootDir>/node_modules/ts-jest": {
      tsconfig: "tsconfig.json",
      diagnostics: {
        pathRegex: /\.(spec|test)\.ts$/,
      },
    },
  },
  moduleFileExtensions: ["ts", "js", "json"],
  transform: {
    "^.+\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest",
  },
  rootDir: ".",
  testMatch: ["**/test/**/*.test.(ts|js)"],
  testEnvironment: "node",
};
