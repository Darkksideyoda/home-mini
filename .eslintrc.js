module.exports = {
  plugins: ['sort-destructure-keys', 'react-hooks', 'simple-import-sort'],
  extends: ['universe', 'universe/native'],
  rules: {
    'import/order': 0,
    'react-native/no-inline-styles': 0,
    'import/namespace': 0,
    'no-duplicate-imports': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-destructure-keys/sort-destructure-keys': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  }
};
