module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],
  rules: {
    'font-family-no-missing-generic-family-keyword': null,
    'number-leading-zero': 'never',
    'max-empty-lines': 2,
    'max-nesting-depth': 4,
    'order/order': [
      'custom-properties',
      'declarations'
    ],
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': [
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$', // eslint-disable-line
      {
        message: 'Selector should follow BEM naming pattern - http://getbem.com/naming/ (selector-class-pattern)' // eslint-disable-line
      }
    ],
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute']
      }
    ],
    'unit-whitelist': ['px', 'em', 'rem', '%', 'deg', 's', 'vh', 'fr']
  }
};
