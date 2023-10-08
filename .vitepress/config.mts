import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ALE Manifesto",
  description: "How should a document be?",
  srcDir: "./src",
  outDir: "./dist",
  head: [['link', { rel: 'icon', href: '/static/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    footer: {
      message: "A manifesto about useful, longer living, democratic documents",
      copyright: "Hilmi Tolga SAHIN - 2016"
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kucukkanat' }
    ]
  }
})
