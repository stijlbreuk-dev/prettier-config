# `@stijlbreuk/prettier-config`

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [`package.json`](#packagejson)
  - [Prettier config](#prettier-config)

## Installation

To install the package, simply choose your package manager of choice and install `@stijlbreuk/prettier-config`.

For example with npm:

```bash
$ npm install --save-dev @stijlbreuk/prettier-config
```

## Usage

When installed, to use the config you will need to configure prettier to do so.

The following options are available:

### `package.json`

In your `package.json` add the `prettier` key followed by the package name:

```json
{
	"name": "package-name",
	"version": "1.0.0",
	"prettier" "@stijlbreuk/prettier-config"
}
```

### Prettier config

In your prettier config, albeit `.prettierrc` or `prettier.config.js` etc., simply have it be

```
"@stijlbreuk/prettier-config"
```

or to extend the config

```
module.exports = {
	...require('@stijlbreuk/prettier-config'),
	useTabs: true
}
```
