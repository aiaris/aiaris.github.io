import{_ as u}from"./ValaxyMain.vue_vue_type_style_index_0_lang-DnzJ1TCi.js";import{c as d,w as l,f as h,a as m,p as o,o as g,r as e,g as n,h as s}from"./app-BmfxcYjs.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-DEvBGVBH.js";import"./YunCard.vue_vue_type_script_setup_true_lang-D6nllPRp.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-0qjYpm8m.js";import"./index-C7yU5XnD.js";import"./post-Dy8dm5I9.js";const v=n("h2",{id:"eslint",tabindex:"-1"},[s("Eslint "),n("a",{class:"header-anchor",href:"#eslint","aria-label":'Permalink to "Eslint"'},"​")],-1),b=n("p",null,"​在所有的JavaScript 项目开发中我们都会接触到 ESLint 这个词，ESLint 是个什么样的组件会给为项目做些什么吗？ESLint 是一 种检查语法错误以及代码是否按照预定规则编写的工具。ESLint 可以帮助开发者发现代码中潜在的错误。在Vue项目中Eslint一般都会配 合其他语法检测工具一起使用。",-1),_=n("p",null,"​Eslint 并不局限于 Vue.js，而是掌握 JavaScript 的必备知识，所以推荐给不懂 ESLint 的朋友。即使你看了这篇文章，你也会无 法理解 ESLint 的所有规则，但是通过查看运行你可以完全理解 ESLint是做什么的。下面让我们通过实际检查操作而不是用文字解释来轻 松理解 ESLint 的作用与使用。",-1),E=n("h3",{id:"_1-eslint创建",tabindex:"-1"},[s("1.ESLint创建 "),n("a",{class:"header-anchor",href:"#_1-eslint创建","aria-label":'Permalink to "1.ESLint创建"'},"​")],-1),k=n("p",null,[s("在Vue项目中导入ESLint组件，ESLint官网 "),n("a",{href:"https://eslint.org/docs/latest/%E5%9C%B0%E5%9D%80%E3%80%82",target:"_blank",rel:"noreferrer"},"https://eslint.org/docs/latest/地址。")],-1),f=n("h6",{id:"首先-安装-eslint",tabindex:"-1"},[s("首先，安装 ESLint： "),n("a",{class:"header-anchor",href:"#首先-安装-eslint","aria-label":'Permalink to "首先，安装 ESLint："'},"​")],-1),y=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"npm install eslint --save-dev")]),s(`
`),n("span",{class:"line"},[n("span",null,"//安装vue项目中eslint插件")]),s(`
`),n("span",{class:"line"},[n("span",null,"npm install eslint-plugin-vue --save-dev")])])]),n("button",{class:"collapse"})],-1),S=n("h6",{id:"然后-初始化-eslint-配置文件",tabindex:"-1"},[s("然后，初始化 ESLint 配置文件： "),n("a",{class:"header-anchor",href:"#然后-初始化-eslint-配置文件","aria-label":'Permalink to "然后，初始化 ESLint 配置文件："'},"​")],-1),j=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"npm init @eslint/config")]),s(`
`),n("span",{class:"line"},[n("span",null,"或者")]),s(`
`),n("span",{class:"line"},[n("span",null,"npx eslint --init")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"? How would you like to use ESLint? ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"  To check syntax only //仅检查语法")]),s(`
`),n("span",{class:"line"},[n("span",null,"> To check syntax and find problems //检查语法并发现问题")]),s(`
`),n("span",{class:"line"},[n("span",null,"  //检查语法、发现问题并强制执行代码风格")]),s(`
`),n("span",{class:"line"},[n("span",null,"  To check syntax, find problems, and enforce code style")]),s(`
`),n("span",{class:"line"},[n("span",null,"//对项目代码质量要求不高的项目可以选择一和二")]),s(`
`),n("span",{class:"line"},[n("span",null,"//选择“检查语法并发现问题”，因为稍后我们还将使用 Prettier 来强制执行代码样式。")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"? What type of modules does your project use? ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"> JavaScript modules (import/export)")]),s(`
`),n("span",{class:"line"},[n("span",null,"  CommonJS (require/exports)")]),s(`
`),n("span",{class:"line"},[n("span",null,"  None of these")]),s(`
`),n("span",{class:"line"},[n("span",null,"//选择 JavaScript 模块主要是因为 Vue3 使用它们。")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ")]),s(`
`),n("span",{class:"line"},[n("span",null,"? Which framework does your project use? ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"  React")]),s(`
`),n("span",{class:"line"},[n("span",null,"> Vue.js")]),s(`
`),n("span",{class:"line"},[n("span",null,"  None of these ")]),s(`
`),n("span",{class:"line"},[n("span",null,"//选择Vue项目")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ")]),s(`
`),n("span",{class:"line"},[n("span",null,"//选择是否验证TypeScript语法")]),s(`
`),n("span",{class:"line"},[n("span",null," ? Does your project use TypeScript? » No / Yes ")]),s(`
`),n("span",{class:"line"},[n("span",null,"//项目没有使用TypeScript选择no")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"//你的代码在哪里运行 ")]),s(`
`),n("span",{class:"line"},[n("span",null,"? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)")]),s(`
`),n("span",{class:"line"},[n("span",null,"√ Browser")]),s(`
`),n("span",{class:"line"},[n("span",null,"√ Node ")]),s(`
`),n("span",{class:"line"},[n("span",null,"//选择Browser“浏览器”，因为 Vue项目需要在浏览器上运行web项目，如果是桌面或者是app选择Node。")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"//您希望您的配置文件采用什么格式")]),s(`
`),n("span",{class:"line"},[n("span",null,"? What format do you want your config file to be in? … ")]),s(`
`),n("span",{class:"line"},[n("span",null,"  JavaScript")]),s(`
`),n("span",{class:"line"},[n("span",null,"  YAML")]),s(`
`),n("span",{class:"line"},[n("span",null,"▸ JSON")]),s(`
`),n("span",{class:"line"},[n("span",null,"//开发中一般会使用JavaScript与JSON作为配置 .eslintrc文件格式。")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"//你想现在用 npm 安装它们吗？ 选择是")]),s(`
`),n("span",{class:"line"},[n("span",null,"? Which package manager do you want to use? ...")]),s(`
`),n("span",{class:"line"},[n("span",null,"> npm")]),s(`
`),n("span",{class:"line"},[n("span",null,"  yarn")]),s(`
`),n("span",{class:"line"},[n("span",null,"  pnpm")])])]),n("button",{class:"collapse"})],-1),L=n("h6",{id:"执行完成后将在项目中新创建一个-eslintrc-cjs-文件。",tabindex:"-1"},[s("执行完成后将在项目中新创建一个 .eslintrc.cjs 文件。 "),n("a",{class:"header-anchor",href:"#执行完成后将在项目中新创建一个-eslintrc-cjs-文件。","aria-label":'Permalink to "执行完成后将在项目中新创建一个 .eslintrc.cjs 文件。"'},"​")],-1),x=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"项目")]),s(`
`),n("span",{class:"line"},[n("span",null," |---node_modules")]),s(`
`),n("span",{class:"line"},[n("span",null," |---src       ")]),s(`
`),n("span",{class:"line"},[n("span",null," |---.eslintrc.cjs    ESLint配置文件  ")]),s(`
`),n("span",{class:"line"},[n("span",null," |---package.json     项目组件文件")]),s(`
`),n("span",{class:"line"},[n("span",null," |---vite.config.js   vite配置文件")])])]),n("button",{class:"collapse"})],-1),C=n("h6",{id:"接下来在项目中的-package-json-文件中添加以下脚本。",tabindex:"-1"},[s("接下来在项目中的 package.json 文件中添加以下脚本。 "),n("a",{class:"header-anchor",href:"#接下来在项目中的-package-json-文件中添加以下脚本。","aria-label":'Permalink to "接下来在项目中的 package.json 文件中添加以下脚本。"'},"​")],-1),A=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'"scripts": {')]),s(`
`),n("span",{class:"line"},[n("span",null,'  "lint": "eslint --ext .js,.vue src"')]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"collapse"})],-1),V=n("h6",{id:"最后-可以在终端中运行-npm-run-lint-命令来检测代码。",tabindex:"-1"},[s("最后，可以在终端中运行 npm run lint 命令来检测代码。 "),n("a",{class:"header-anchor",href:"#最后-可以在终端中运行-npm-run-lint-命令来检测代码。","aria-label":'Permalink to "最后，可以在终端中运行 npm run lint 命令来检测代码。"'},"​")],-1),P=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"npm run lint")]),s(`
`),n("span",{class:"line"},[n("span",null,"> vue-line@0.0.0 lint      ")]),s(`
`),n("span",{class:"line"},[n("span",null,"> eslint --ext .js,.vue src")])])]),n("button",{class:"collapse"})],-1),$=n("h6",{id:"​在-eslint-初始化成功后-在项目中出现一个-eslintrc-js文件-文件内容如下。",tabindex:"-1"},[s("​在 ESLint 初始化成功后，在项目中出现一个.eslintrc.js文件，文件内容如下。 "),n("a",{class:"header-anchor",href:"#​在-eslint-初始化成功后-在项目中出现一个-eslintrc-js文件-文件内容如下。","aria-label":'Permalink to "​在 ESLint 初始化成功后，在项目中出现一个.eslintrc.js文件，文件内容如下。"'},"​")],-1),B=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"module.exports = {")]),s(`
`),n("span",{class:"line"},[n("span",null,'    "env": {')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "browser": true,')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "es2021": true')]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,'    "extends": [')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "eslint:recommended",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "plugin:vue/vue3-essential"')]),s(`
`),n("span",{class:"line"},[n("span",null,"    ],")]),s(`
`),n("span",{class:"line"},[n("span",null,'    "overrides": [')]),s(`
`),n("span",{class:"line"},[n("span",null,"    ],")]),s(`
`),n("span",{class:"line"},[n("span",null,'    "parserOptions": {')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "ecmaVersion": "latest",')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "sourceType": "module"')]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,'    "plugins": [')]),s(`
`),n("span",{class:"line"},[n("span",null,'        "vue"')]),s(`
`),n("span",{class:"line"},[n("span",null,"    ],")]),s(`
`),n("span",{class:"line"},[n("span",null,'    "rules": {')]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"collapse"})],-1),T=n("h6",{id:"​你可以在-package-json-文件中检查到eslint与eslint-plugin-vue导入的规则版本。",tabindex:"-1"},[s("​你可以在 package.json 文件中检查到eslint与eslint-plugin-vue导入的规则版本。 "),n("a",{class:"header-anchor",href:"#​你可以在-package-json-文件中检查到eslint与eslint-plugin-vue导入的规则版本。","aria-label":'Permalink to "​你可以在 package.json 文件中检查到eslint与eslint-plugin-vue导入的规则版本。"'},"​")],-1),w=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"{")]),s(`
`),n("span",{class:"line"},[n("span",null," ......")]),s(`
`),n("span",{class:"line"},[n("span",null,'  "devDependencies": {')]),s(`
`),n("span",{class:"line"},[n("span",null,'    "@vitejs/plugin-vue": "^4.0.0",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    "eslint": "^8.32.0",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    "eslint-plugin-vue": "^9.9.0",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    "vite": "^4.0.0"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"collapse"})],-1),J=n("h3",{id:"_2-eslint-规则设置",tabindex:"-1"},[s("2.ESLint 规则设置 "),n("a",{class:"header-anchor",href:"#_2-eslint-规则设置","aria-label":'Permalink to "2.ESLint 规则设置"'},"​")],-1),N=n("p",null,"​在项目根目录下的**.eslintrc.cjs文件中的extends**属性中定义了项目使用的规则组件。以后与ESLint有关的其他规则组件都需要在extends中进行加入，后边会涉及的Prettier 组件也会在extends中设置。只有在extends中引入的规则组件才会在ESLint检测的中被使用到。",-1),D=n("blockquote",null,[n("p",null,"eslint:recommended 是ESLint的原始规则。 plugin:vue/vue3-essential 是vue语法模板规则。")],-1),O=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'"extends": [')]),s(`
`),n("span",{class:"line"},[n("span",null,'    "eslint:recommended",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    "plugin:vue/vue3-essential"')]),s(`
`),n("span",{class:"line"},[n("span",null,"],")])])]),n("button",{class:"collapse"})],-1),W=n("p",null,[s("​从ESLint文档"),n("a",{href:"https://eslint.org/docs%E4%B8%AD%E6%9F%A5%E7%9C%8B%E2%80%9Ceslint:recommended%E2%80%9D%E5%BA%94%E7%94%A8%E7%9A%84%E9%AA%8C%E8%AF%81%E8%A7%84%E5%88%99%E5%86%85%E5%AE%B9%E3%80%82",target:"_blank",rel:"noreferrer"},"https://eslint.org/docs中查看“eslint:recommended”应用的验证规则内容。")],-1),F=n("p",null,[s("​从eslint-plugin-vue官网上"),n("a",{href:"https://eslint.vuejs.org/rules/%E6%9F%A5%E7%9C%8B%E5%88%B0Vue%E7%9A%84%E9%AA%8C%E8%AF%81%E8%A7%84%E5%88%99%E5%86%85%E5%AE%B9%E3%80%82",target:"_blank",rel:"noreferrer"},"https://eslint.vuejs.org/rules/查看到Vue的验证规则内容。")],-1),Z=n("h2",{id:"结束语",tabindex:"-1"},[s("结束语 "),n("a",{class:"header-anchor",href:"#结束语","aria-label":'Permalink to "结束语"'},"​")],-1),q=n("p",null,"这个世界并不总会发生好事，更多时候反而是坏事更多一些，但只要明天的太阳照常升起，就不妨对生活多一点期待！",-1),nn={__name:"hello-valaxy",setup(M,{expose:c}){const t=JSON.parse('{"title":"Vue3添加Eslint校验","description":"","frontmatter":{"title":"Vue3添加Eslint校验","date":"2024-05-22T00:00:00.000Z","updated":"2024-05-23T00:00:00.000Z","categories":"Valaxy 笔记","tags":["valaxy","笔记"],"top":1},"headers":[{"level":2,"title":"Eslint","slug":"eslint","link":"#eslint","children":[{"level":3,"title":"1.ESLint创建","slug":"_1-eslint创建","link":"#_1-eslint创建","children":[]},{"level":3,"title":"2.ESLint 规则设置","slug":"_2-eslint-规则设置","link":"#_2-eslint-规则设置","children":[]}]},{"level":2,"title":"结束语","slug":"结束语","link":"#结束语","children":[]}],"relativePath":"pages/posts/hello-valaxy.md","path":"/home/runner/work/aiaris.github.io/aiaris.github.io/pages/posts/hello-valaxy.md","lastUpdated":1716543655000}'),p=m(),i=t.frontmatter||{};return p.meta.frontmatter=Object.assign(p.meta.frontmatter||{},t.frontmatter||{}),o("pageData",t),o("valaxy:frontmatter",i),globalThis.$frontmatter=i,c({frontmatter:{title:"Vue3添加Eslint校验",date:"2024-05-22T00:00:00.000Z",updated:"2024-05-23T00:00:00.000Z",categories:"Valaxy 笔记",tags:["valaxy","笔记"],top:1}}),(a,Y)=>{const r=u;return g(),d(r,{frontmatter:h(i)},{"main-content-md":l(()=>[v,b,_,E,k,f,y,S,j,L,x,C,A,V,P,$,B,T,w,J,N,D,O,W,F,Z,q]),"main-header":l(()=>[e(a.$slots,"main-header")]),"main-header-after":l(()=>[e(a.$slots,"main-header-after")]),"main-nav":l(()=>[e(a.$slots,"main-nav")]),"main-content":l(()=>[e(a.$slots,"main-content")]),"main-content-after":l(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[e(a.$slots,"main-nav-after")]),comment:l(()=>[e(a.$slots,"comment")]),footer:l(()=>[e(a.$slots,"footer")]),aside:l(()=>[e(a.$slots,"aside")]),"aside-custom":l(()=>[e(a.$slots,"aside-custom")]),default:l(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{nn as default};
