module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-idiomatic-order"],
  rules: {
    'indentation': 2,
    'max-empty-lines': 2,
    'no-extra-semicolons': true,
    'string-quotes': 'single',
    'value-keyword-case': 'lower',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'block-opening-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'selector-combinator-space-before': 'always',
    'selector-combinator-space-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'rule-empty-line-before': [
      'always',
      {
        'except': [
          'first-nested',
        ],
      },
      {
        'ignore': [
          'after-comment',
        ],
      },
    ],
    'declaration-empty-line-before': [
      'always',
      {
        'ignore': [
          'after-comment',
          'after-declaration',
          'first-nested',
          'inside-single-line-block',
        ],
      },
    ],
  },
};
