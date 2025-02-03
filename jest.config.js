const { transform } = require("@babel/core");

module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
  };