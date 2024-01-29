let hostname = window.location.hostname;
let url_prefix = './'
let _sidebar_file = './_sidebar'

if(hostname === "help.mc.zorua.top") {
    url_prefix = 'https://help.mc.zorua.top/pages/'
    _sidebar_dic = 'https://help.mc.zorua.top/pages/_sidebar_origin'
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