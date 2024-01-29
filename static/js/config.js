// 本地域名配置
let hostname = window.location.hostname;
let url_prefix = './'
let _sidebar_file = './_sidebar'
let home_page = 'README.md'

// 远程域名配置
if(hostname === "help.mc.zorua.top") {
    url_prefix = 'https://help.mc.zorua.top/pages/'
    _sidebar_file = `${url_prefix}_sidebar_origin`
    home_page = `${url_prefix}README.md`
}

// Docsify settings
localStorage.setItem('docsify.search.expires', new Date().getTime())
window.$docsify = {
    name: '有兽焉粉丝服务器',
    basePath: '.',
    subMaxLevel: 3,
    loadSidebar: true,
    themeColor: '#41b349',
    homepage: home_page,
    externalLinkTarget: '_blank',
    search: {
        maxAge: 86400000,
        paths: 'auto',
        depth: 6,
        placeholder: {
        '/': '🔎 输入以进行搜索'
        },

        noData: {
        '/': '🍉 找不到结果'
        }
    },
    auto2top: true,
    darklightTheme: {
        siteFont: 'Source Sans Pro,Helvetica Neue,Arial,sans-serif',
        defaultTheme: 'light',
        codeFontFamily: 'Roboto Mono,Monaco,courier,monospace',
        bodyFontSize: '15px',
        dark: {
        accent: '#41b349',
        toogleBackground: '#ffffff',
        background: '#091a28',
        textColor: '#b4b4b4',
        codeTextColor: '#ffffff',
        codeBackgroundColor: '#0e2233',
        borderColor: '#0d2538',
        blockQuoteColor: '#858585',
        highlightColor: '#d22778',
        sidebarSublink: '#b4b4b4',
        codeTypeColor: '#ffffff',
        coverBackground: 'linear-gradient(to left bottom, hsl(118, 100%, 85%) 0%,hsl(181, 100%, 85%) 100%)',
        toogleImage: 'url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/sun.svg)'
        },
        light: {
        accent: '#41b349',
        toogleBackground: '#091a28',
        background: '#ffffff',
        textColor: '#34495e',
        codeTextColor: '#525252',
        codeBackgroundColor: '#f8f8f8',
        borderColor: 'rgba(0, 0, 0, 0.07)',
        blockQuoteColor: '#858585',
        highlightColor: '#d22778',
        sidebarSublink: '#b4b4b4',
        codeTypeColor: '#091a28',
        coverBackground: 'linear-gradient(to left bottom, hsl(118, 100%, 85%) 0%,hsl(181, 100%, 85%) 100%)',
        toogleImage: 'url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/moon.svg)'
        }
    }
}

let css_list = [
    'iconfont/iconfont.css',
    'readme.css',
    'vue.css',
    'style.min.css'
]

css_list.forEach(item => {
    document.write(`<link rel="stylesheet" href="${url_prefix}static/css/${item}">`)
})

let js_list = [
    'docsify@4.js',
    'search.min.js',
    'zoom-image.min.js',
    'docsify-copy-code.js',
    'prism-java.min.js',
    'prism-kotlin.min.js',
    'prism-json.min.js',
    'prism-yaml.min.js',
    'index.min.js',
]

js_list.forEach(item => {
    document.write(`<script src="${url_prefix}static/js/${item}"></script>`)
})