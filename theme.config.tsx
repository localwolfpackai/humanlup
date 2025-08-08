/*
 * Theme configuration for the HumanLup MCP documentation.
 *
 * This file defines the logo, project link, and footer text used
 * by the Nextra docs theme. Feel free to customize colours, fonts
 * or components here in the future.
 */

import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 600 }}>HumanLup MCP</span>,
  project: {
    link: 'https://github.com/localwolfpackai/humanlup'
  },
  docsRepositoryBase: 'https://github.com/localwolfpackai/humanlup',
  footer: {
    text: '© 2025 Lupo Studios – HumanLup MCP'
  },
  primaryHue: 240,
  sidebar: {
    // Show the sidebar in documentation pages by default.
    defaultMenuCollapseLevel: 1
  }
}

export default config