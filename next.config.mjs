import nextra from 'nextra'

// Configure Nextra with the docs theme.
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

export default withNextra({})