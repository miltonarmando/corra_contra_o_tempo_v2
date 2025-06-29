module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 72],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
  },
};
