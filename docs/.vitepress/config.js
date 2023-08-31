import {defineConfig} from 'vitepress'
export default defineConfig({
    title:'程序员小洛文档',
    description:'程序员小洛文档',
    head:[
      ['meta',{name:'author',content:'程序员小洛'}],
      ['meta',{name:'keywords',content:'程序员小洛文档'}]
    ],
    appearance: true,
    ignoreDeadLinks:true,
    lang:'zh-CN',
    lastUpdated:true,
    markdown:{
      // theme: 'material-palenight',
      lineNumbers: true  
    },
    themeConfig:{
        siteTitle: '程序员小洛',//不要标题可以设置为false,默认是vitepress
        logo:'/my1.png',
        algolia: {
          appId: "ELA3AZANQG",
          apiKey: "a4eada47607470ea7fce903b02d900eb",
          indexName: "My First Application",
          placeholder: '请输入关键词',
          buttonText: '搜索',
        },
        nav: [
            
            {
                text: '编程开发',
                items: [
                  { text: 'HTML',link: '/html/',activeMatch:'/html/'}, 
                  { text: 'CSS',link: '/css/',activeMatch:'/css/' },
                  { text: 'JS', link: '/js/',activeMatch:'/js/' },
                  { text: 'VUE', link: '/vue/',activeMatch:'/vue/' },
                  { text: 'UNI-APP', link: '/uni-app/',activeMatch:'/uni-app/' },
                  { text: 'REACT', link: '/react/',activeMatch:'/react/' },
                  { text: 'NODE', link: '/node/',activeMatch:'/node/' },
                  { text: 'PHP', link: '/php/',activeMatch:'/php/' },
                  // { text: 'JAVA', link: '/java/',activeMatch:'/java/' }
                ]
            },
          {
            text: '软件/资源',
            items: [
                { text: '编程软件',
                  items: [
                    { text: 'vscode', link: 'https://code.visualstudio.com/' },
                    { text: 'snipaste', link: 'https://www.snipaste.com/' },
                    { text: 'postman', link: 'https://www.postman.com/' },
                    { text: 'typora', link: 'https://github.com/typora' },
                    { text: 'Xmind', link: 'https://xmind.cn/' },
                    { text: 'apifox', link: 'https://www.apifox.cn/' },
                    { text: 'navicat', link: 'http://www.navicat.com.cn/' },
                    { text: 'webstorm', link: 'https://www.jetbrains.com.cn/webstorm/' }
                  ]
                },
                { text: 'mac', link: '/mac'},
                { text: '辅助工具', link: '/tools/yarn'},
                { text: '杂货店', link: '/all/index'},
                { text: '网站', link: '/website'},
                { text: '搭建文档', link: '/doc'}
                
            ]
        },
            { text: '我的官网', link: 'https://www.suntemple.cn' }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/' }
         ],
         sidebar: {
            '/html/': [
              {
                text: 'HTML',
                collapsible: true,
                collapsed: false,
                items: [
                  { text: 'html资源', link: '/html/' }, 
                  { text: 'HTML技巧', link: '/html/HTML技巧' }, 
                  { text: '性能优化', link: '/html/性能优化' }
                ]
              },
              {
                text: '测试HTML',
                collapsible: true,
                collapsed: false,
                items: [
                  { text: 'html介绍', link: '/html/' }, 
                  { text: 'HTML技巧', link: '/html/HTML技巧' }, 
                  { text: '性能优化', link: '/html/性能优化' }
                ]
              }
            ],
            '/css/': [
              {
                text: 'CSS',
                items: [
                  { text: 'css资源', link: '/css/' },
                  { text: '字体设置', link: '/css/字体设置' },
                  { text: '背景兼容', link: '/css/背景兼容' },
                  { text: '切换图标状态', link: '/css/切换图标状态' } 
                ]
              }
            ],
            '/js/': [
              {
                text: 'JS',
                items: [
                  { text: 'js资源', link: '/js/' }
                ]
              }
            ],
            '/vue/': [
              {
                text: 'VUE',
                items: [
                  { text: 'vue资源', link: '/vue/' },
                  { text: 'vite-vue3', link: '/vue/vite-vue3' },
                  { text: 'vue2和vue3静态引入图片', link: '/vue/vue2和vue3静态引入图片' },
                  { text: 'yarn创建vite项目报错', link: '/vue/yarn创建vite项目报错' },
                  { text: '删除vue-cli项目', link: '/vue/删除vue-cli项目' },
                  { text: '模拟mock数据', link: '/vue/模拟mock数据' },
                  { text: '二次封装axios', link: '/vue/二次封装axios' }
                ]
              }
            ],
            '/uni-app/': [
              {
                text: 'UNI-APP',
                items: [
                  { text: 'uni-app资源', link: '/uni-app/' },
                  { text: '状态栏高度', link: '/uni-app/状态栏高度' },
                ]
              }
            ],
            '/react/': [
              {
                text: 'REACT',
                items: [
                  { text: 'react资源', link: '/react/' }
                ]
              }
            ],
            '/node/': [
              {
                text: 'NODE',
                items: [
                  { text: 'node资源', link: '/node/' },
                  { text: 'express', link: '/node/express' },
                  { text: 'cors跨域', link: '/node/cors跨域' },
                  { text: 'mysql', link: '/node/mysql' }
                ]
              }
            ],
            '/php/': [
              {
                text: 'PHP',
                items: [
                  { text: 'php资源', link: '/php/' }
                ]
              }
            ],
            '/java/': [
              {
                text: 'JAVA',
                items: [
                  { text: 'java资源', link: '/java/' }
                ]
              }
            ],
            '/tools/': [
              {
                text: '辅助工具',
                items: [
                  // { text: '辅助工具', link: '/tools/' },
                  { text: 'yarn', link: '/tools/yarn' },
                  { text: 'npm', link: '/tools/npm' },
                  { text: 'git', link: '/tools/git' }
                ]
              }
            ],
            '/all/': [
              {
                text: '杂货店',
                items: [
                  // { text: '啥都有', link: '/all/' },
                  { text: '谷歌翻译', link: '/all/chrome' }
                ]
              }
            ]
          },
        footer: {
            message: '程序员小洛文档',
            copyright: 'Copyright © 2022-suntemple.cn.All right reserved'
          }
    }
})