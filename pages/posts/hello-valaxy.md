---
title: Vue3添加Eslint校验
date: 2024-05-22
updated: 2024-05-23
categories: Valaxy 笔记
tags:
  - valaxy
  - 笔记
top: 1
---

## Eslint

​在所有的JavaScript 项目开发中我们都会接触到 ESLint 这个词，ESLint 是个什么样的组件会给为项目做些什么吗？ESLint 是一
种检查语法错误以及代码是否按照预定规则编写的工具。ESLint 可以帮助开发者发现代码中潜在的错误。在Vue项目中Eslint一般都会配
合其他语法检测工具一起使用。


    ​Eslint 并不局限于 Vue.js，而是掌握 JavaScript 的必备知识，所以推荐给不懂 ESLint 的朋友。即使你看了这篇文章，你也会无
法理解 ESLint  的所有规则，但是通过查看运行你可以完全理解 ESLint是做什么的。下面让我们通过实际检查操作而不是用文字解释来轻
松理解 ESLint 的作用与使用。
### 1.ESLint创建
在Vue项目中导入ESLint组件，ESLint官网 https://eslint.org/docs/latest/地址。
###### 首先，安装 ESLint：
```
npm install eslint --save-dev
//安装vue项目中eslint插件
npm install eslint-plugin-vue --save-dev
```
###### 然后，初始化 ESLint 配置文件：
```
npm init @eslint/config
或者
npx eslint --init

? How would you like to use ESLint? ...
  To check syntax only //仅检查语法
> To check syntax and find problems //检查语法并发现问题
  //检查语法、发现问题并强制执行代码风格
  To check syntax, find problems, and enforce code style
//对项目代码质量要求不高的项目可以选择一和二
//选择“检查语法并发现问题”，因为稍后我们还将使用 Prettier 来强制执行代码样式。

? What type of modules does your project use? ...
> JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
//选择 JavaScript 模块主要是因为 Vue3 使用它们。
  
? Which framework does your project use? ...
  React
> Vue.js
  None of these 
//选择Vue项目
  
//选择是否验证TypeScript语法
 ? Does your project use TypeScript? » No / Yes 
//项目没有使用TypeScript选择no

//你的代码在哪里运行 
? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
√ Browser
√ Node 
//选择Browser“浏览器”，因为 Vue项目需要在浏览器上运行web项目，如果是桌面或者是app选择Node。

//您希望您的配置文件采用什么格式
? What format do you want your config file to be in? … 
  JavaScript
  YAML
▸ JSON
//开发中一般会使用JavaScript与JSON作为配置 .eslintrc文件格式。

eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest

//你想现在用 npm 安装它们吗？ 选择是
? Which package manager do you want to use? ...
> npm
  yarn
  pnpm

```
###### 执行完成后将在项目中新创建一个 .eslintrc.cjs 文件。
```
项目
 |---node_modules
 |---src       
 |---.eslintrc.cjs    ESLint配置文件  
 |---package.json     项目组件文件
 |---vite.config.js   vite配置文件

```
###### 接下来在项目中的 package.json 文件中添加以下脚本。
```
"scripts": {
  "lint": "eslint --ext .js,.vue src"
}

```
###### 最后，可以在终端中运行 npm run lint 命令来检测代码。
```
npm run lint
> vue-line@0.0.0 lint      
> eslint --ext .js,.vue src

```
###### ​在 ESLint 初始化成功后，在项目中出现一个.eslintrc.js文件，文件内容如下。
```
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
}

```
###### ​你可以在 package.json 文件中检查到eslint与eslint-plugin-vue导入的规则版本。
```
{
 ......
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.0.0",
    "eslint": "^8.32.0",
    "eslint-plugin-vue": "^9.9.0",
    "vite": "^4.0.0"
  }
}
```
### 2.ESLint 规则设置
​在项目根目录下的**.eslintrc.cjs文件中的extends**属性中定义了项目使用的规则组件。以后与ESLint有关的其他规则组件都需要在extends中进行加入，后边会涉及的Prettier 组件也会在extends中设置。只有在extends中引入的规则组件才会在ESLint检测的中被使用到。
>eslint:recommended 是ESLint的原始规则。
plugin:vue/vue3-essential 是vue语法模板规则。
```
"extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential"
],

```
​从ESLint文档https://eslint.org/docs中查看“eslint:recommended”应用的验证规则内容。

​从eslint-plugin-vue官网上https://eslint.vuejs.org/rules/查看到Vue的验证规则内容。

## 结束语

这个世界并不总会发生好事，更多时候反而是坏事更多一些，但只要明天的太阳照常升起，就不妨对生活多一点期待！
