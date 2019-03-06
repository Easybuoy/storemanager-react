module.exports = {
    setupTestFrameworkScriptFile: "<rootDir>/client/config/setupTests.js",
    testPathIgnorePatterns: [
        "<rootDir>/client/__tests__/__mocks__/"
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/client/__tests__/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/client/__tests__/__mocks__/styleMock.js"
      }
}