/**
 * Config was created when Prettier was used on version 2.4.1
 */

module.exports = {
  // printWidth: 80, // default: 80
  // tabWidth: 2, // default: 2
  // useTabs: false, // default: false
  // semi: true, // default: true
  singleQuote: true, // default: false
  // quoteProps: 'as-needed', // default: 'as-needed'
  jsxSingleQuote: true, // default: false
  trailingComma: 'all', // default: 'es5'
  // bracketSpacing: true, // default: true
  // bracketSameLine: false, // default: false
  // arrowParens: 'always', // default: 'always'
  // requirePragma: false, // default: false
  // insertPragma: false, // default: false
  // proseWrap: 'preserve', // default: 'preserve'
  // htmlWhitespaceSensitivity: 'css', // default: 'css'
  // vueIndentScriptAndStyle: false, // default: false
  // endOfLine: 'lf', // default: 'lf'
  // embeddedLanguageFormatting: 'auto', // default: 'auto'
  overrides: [
    {
      files: 'package*.json',
      options: {
        printWidth: 1000,
      },
    },
  ],
};
