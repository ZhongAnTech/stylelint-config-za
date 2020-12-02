module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-empty-line-before': null,
    'comment-empty-line-before': null,
    'number-leading-zero': null,
    'selector-pseudo-element-colon-notation': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export'],
      },
    ],
  },
};
