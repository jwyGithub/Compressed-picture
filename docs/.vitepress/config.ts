import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'graph-lib',

    themeConfig: {
        nav: [
            {
                text: '相关链接',
                items: [
                    { text: 'mxgraph', link: 'https://github.com/jgraph/mxgraph' },
                    { text: 'maxgraph', link: 'https://github.com/maxGraph/maxGraph' }
                ]
            }
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'introduction', link: '/' },
                    { text: 'Getting Started', link: '/guide/getting-started.md' }
                ]
            },
            {
                text: 'Config',
                items: [{ text: 'Global Config', link: '/config/global-config.md' }]
            },
            {
                text: 'Draw',
                items: [
                    { text: 'Draw', link: '/draw/draw.md' },
                    { text: 'Draw Anchor', link: '/draw/draw-anchor.md' }
                ]
            },
            {
                text: 'Style',
                items: [
                    { text: 'Global Style', link: '/style/register-global-style.md' },
                    { text: 'Default Style', link: '/style/default-style.md' }
                ]
            },
            {
                text: 'Shape',
                items: [{ text: 'Global Shape', link: '/shape/global-shape.md' }]
            },
            {
                text: 'Cell',
                items: [
                    { text: '初始化', link: '/cell/init.md' },
                    { text: '获取所有Vertices', link: '/cell/getVertices.md' },
                    { text: '获取所有Edges', link: '/cell/getEdges.md' },
                    { text: '设置cell样式', link: '/cell/setCellStyle.md' }
                ]
            }
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/jwyGithub/graph-libs' }]
    }
});

