module.exports = {
  title: 'BrightLian 前端算法',
  themeConfig: {
    logo: '/image/logo.jpg',
    head: [
      ['link', { rel: 'icon', href: '/image/logo.jpg' }]
    ],
    navbar: [
      { text: '首页', link: '/' },
      { text: '进入', link: '/introduction' },
      {
        text: '其他链接',
        children: [
          {
            text: '前端面试指南',
            link: 'https://github.com/brightLian/interview-FE'
          },
          {
            text: '前端杂谈',
            link: 'https://github.com/brightLian/talk-FE'
          }
        ]
      },
      { text: 'github', link: 'https://github.com/brightLian/leetcode-FE' }
    ],
    sidebar: [
      '/introduction.md',
      {
        text: '栈与队列',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          {
            text: '栈与队列基础知识',
            link: '/stackAndQueue/stackAndQueueIntroduction.md'
          }
        ]
      },
      {
        text: '字符串',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          {
            text: '字符串基础知识',
            link: '/string/stringIntroduction.md'
          }
        ]
      },
      {
        text: '数组',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          {
            text: '数组基础知识',
            link: '/array/arrayIntroduction.md'
          }
        ]
      }
    ],
    sidebarDepth: 2,
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ]
};
