module.exports = {
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
    'at-rule-no-unknown': null,
    // 过于严格，暂时关闭
    'no-descending-specificity': null,
  },
};
