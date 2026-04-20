import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  // 必须确保 base 为 '/'，样式才会正常显示
  base: '/',
  lang: 'zh-CN',
  title: 'FlowZ',
  description: '基于 VitePress 和 UnoCSS 构建的极速文档站点',
  
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  
  themeConfig: {
    // 页脚配置
    footer: {
      message: 'FlowZ 一键脚本文档',
      copyright: 'Copyright © 2026 FlowZ',
    },
    
    // 搜索框中文化
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    
    // 社交链接 (记得改造成你自己的链接)
    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名/你的仓库名' },
    ],
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/你的用户名/你的仓库名/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    
    nav: nav(),
    
    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig(),
    },
    
    // 博客部分中文化
    blog: {
      title: '项目博客',
      description: '关于 FlowZ 的最新动态和技术分享',
    },
  },
  
  vite: {
    plugins: [
      Unocss({
        configFile: '../../unocss.config.ts',
      }),
    ],
  },
})

// 顶部导航栏
function nav() {
  return [
    { text: '指南', link: '/guide/', activeMatch: '/guide/' },
    { text: '配置', link: '/config/', activeMatch: '/config/' },
    { text: '博客', link: '/blog/', activeMatch: '/blog/' },
    {
      text: '相关链接',
      items: [
        {
          text: 'VitePress 官网',
          link: 'https://vitepress.vuejs.org',
        },
        {
          text: 'UnoCSS 官网',
          link: 'https://uno.antfu.me',
        },
      ],
    },
    {
      text: `版本 v${version}`,
      items: [
        {
          text: '更新日志',
          link: '/blog/', // 你也可以指向具体的 CHANGELOG.md
        },
      ],
    },
  ]
}

// 指南侧边栏
function sidebarGuide() {
  return [
    {
      text: '新手入门',
      collapsible: true,
      items: [
        { text: '项目介绍', link: '/guide/' },
      ],
    },
    {
      text: '核心特性',
      collapsible: true,
      items: [
        { text: 'UnoCSS 样式', link: '/guide/features/unocss' },
      ],
    },
  ]
}

// 配置侧边栏
function sidebarConfig() {
  return [
    {
      text: '配置说明',
      items: [
        { text: '基本配置', link: '/config/' },
        { text: '样式定制', link: '/config/unocss' },
      ],
    },
  ]
}
