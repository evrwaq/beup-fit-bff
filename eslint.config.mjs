import skoolabConfig from '@skoolab/eslint-config'

const eslintConfig = [
  ...skoolabConfig,
  {
    files: ['src/**/*.module.*'],
    rules: {
      '@typescript-eslint/no-extraneous-class': 'off',
    },
  },
  {
    files: ['tests/**/*.spec.*'],
    rules: {
      'space-before-function-paren': 'off',
      'init-declarations': 'off',
    },
  },
  {
    files: ['**/**/index.ts'],
    rules: {
      'padding-line-between-statements': 'off',
    },
  },
  {
    files: ['**/**/*.dto.ts'],
    rules: {
      'no-magic-numbers': 'off',
    },
  },
]

export default eslintConfig
