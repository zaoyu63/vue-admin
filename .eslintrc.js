module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-control-regex': 0,
    'no-unused-vars': 0,
    'no-useless-escape': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
