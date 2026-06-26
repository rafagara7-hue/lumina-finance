/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // a new feature
        'fix', // a bug fix
        'docs', // documentation only changes
        'style', // formatting, missing semicolons, etc; no code change
        'refactor', // refactoring production code
        'perf', // performance improvements
        'test', // adding or refactoring tests
        'build', // build system or external dependencies
        'ci', // CI configuration files and scripts
        'chore', // updating tasks, configs; no production code change
        'revert', // reverting a previous commit
      ],
    ],
    'subject-case': [0],
    'body-max-line-length': [0],
  },
};

export default config;
