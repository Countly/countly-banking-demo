module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react','prettier'
  ],
  rules: {
    "jsx-a11y/label-has-associated-control": [ 2, {
      "labelAttributes": ["label"],
      "controlComponents": ["TextInput"],
      "depth": 3,
    }],
  },
};
