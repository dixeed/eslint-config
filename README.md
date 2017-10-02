<div align="center">
  <h1>Eslint config</h1>

  <strong>Project gathering all different eslint config used in our projects</strong>
</div>

<hr>

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build Status](https://travis-ci.org/dixeed/eslint-config.svg?branch=master)](https://travis-ci.org/dixeed/eslint-config)
[![npm (scoped)](https://img.shields.io/npm/v/@dixeed/eslint-config.svg)](https://www.npmjs.com/package/@dixeed/eslint-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)

## Usage
Install the package as dev dependency in your project:
`npm install -D @dixeed/eslint-config` or `yarn add -D @dixeed/eslint-config`

Create a an `.eslintrc` file in your project and extends the desired configuration. This repo contains 2 configurations:
* Base conf: available as `@dixeed/eslint-config`
* AngularJS conf: available as `@dixeed/eslint-config/angularjs`

To use one of them write an `extends` field on the aforementioned `.eslintrc` i.e :
```json
{
  "extends": ["@dixeed/eslint-config"]
}
```

### Requirements
The configuration will require you to install its peer dependencies into your project for it to work.

## Contributing
This project uses [semantic-release](https://github.com/semantic-release/semantic-release) to automatically handle semver bumps based on the commits messages.

To simplify commits messages redaction you can use `npm run cm` instead of `git commit`. To use that command make sure to `git add` your changes before.

This repo is configured to forbid commit messages that do not follow the [Angular conventional changelog commit message format](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit).
