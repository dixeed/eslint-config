'use strict';

module.exports = {
  extends: ['@dixeed/eslint-config/lib/defaults'],

  env: {
    commonjs: false,
  },

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
    },
  },

  rules: {
    // ES2017 feature
    'no-await-in-loop': 'error',
    'no-return-await': 'error',
    'require-await': 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
  },
};
