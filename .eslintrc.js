module.exports = {
  extends: [require.resolve('verify-fabric/dist/eslint')],
  rules: {
    // your rules
    'import/extensions': 0,
    'react/jsx-filename-extension': 0,
    'import/no-cycle': 0,
    'no-shadow': 1,
    'react/require-default-props': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'react/no-unused-prop-types': 0,
    '@typescript-eslint/naming-convention': 0,
    'object-shorthand': 0,
    'react/display-name': 0,
    'arrow-body-style': 0,
    '@typescript-eslint/no-empty-function': 0,
    'no-prototype-builtins': 'off',
    'prefer-destructuring': 'warn',
    'no-restricted-syntax': 'warn',
  },
};
