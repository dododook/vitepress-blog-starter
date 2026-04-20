import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'FlowZ',
  description: 'FlowZ - 轻量、稳定、极速的网络辅助工具',
  
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  
  themeConfig: {
    // 页脚信息
    footer: {
      message: 'FlowZ 开源项目',
      copyright: 'Copyright © 2026 dododook',
    },
    
    // 搜索框中文化
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },
    
    // 修改为你的真实仓库地址
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dododook/FlowZ' },
    ],
    
    editLink: {
      pattern: 'https://github.com/dododook/FlowZ/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    
    nav: nav(),
    
    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig(),
    },
    
    blog: {
      title: '更新日志',
      description: 'FlowZ 的版本迭代与技术记录',
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

function nav() {
  return [
    { text: '指南', link: '/guide/', activeMatch: '/guide/' },
    { text: '配置', link: '/config/', activeMatch: '/config/' },
    { text: '日志', link: '/blog/', activeMatch: '/blog/' },
    {
      text: `版本 v${version}`,
      items: [
        { text: '发布页面', link: 'https://github.com/dododook/FlowZ/releases' },
      ],
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: '快速入门',
      collapsible: true,
      items: [
        { text: '项目简介', link: '/guide/' },
        { text: '安装说明', link: '/guide/getting-started' },
      ],
    },
  ]
}

function sidebarConfig() {
  return [
    {
      text: '功能设置',
      items: [
        { text: '参数说明', link: '/config/' },
      ],
    },
  ]
}
