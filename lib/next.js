'use strict';

module.exports = {
  extends: ['@dixeed/eslint-config/lib/defaults'],

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
