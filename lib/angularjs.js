'use strict';

module.exports = {
  extends: [
    '@dixeed/eslint-config/lib/base',
    'angular',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],

  env: {
    browser: true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },

  rules: {
    'angular/no-service-method': 'off',
    'angular/log': 'warn',
    'no-console': 'warn',
  },
};
