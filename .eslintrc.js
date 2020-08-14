module.exports = {
  extends: ['airbnb-typescript-prettier'],
  env: {
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
