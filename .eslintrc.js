module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'browser': true,
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'parser':'babel-parser',
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 0,
    'no-console': 1,
    'quotes': [
      2,
      'single'
    ],
    'brace-style': [
      2,
      '1tbs',
      {
        'allowSingleLine': true
      }
    ],
    'array-bracket-spacing': [
      2,
      'always'
    ],
    'arrow-parens': [
      2,
      'as-needed'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'indent': [
      2,
      2,
      {
        'SwitchCase': 1
      }
    ],
    'no-param-reassign': [
      'error',
      {
        'props': true,
        'ignorePropertyModificationsFor': [ 'state' ]
      }
    ],
    'import/no-named-as-default': 0,
    'max-len': [
      'error',
      {
        code: 120,
        'ignoreTrailingComments': true
      }
    ],
    'semi': [ 'error' ]
  }
};
