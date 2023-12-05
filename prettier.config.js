module.exports = {
  singleQuote: true, // default: false
  jsxSingleQuote: true, // default: false
  overrides: [
    {
      files: 'package*.json',
      options: {
        printWidth: 1000,
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: {
        useTabs: false,
      },
    },
  ],
};
