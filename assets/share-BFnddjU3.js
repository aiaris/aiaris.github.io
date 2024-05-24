import{_ as u}from"./ValaxyMain.vue_vue_type_style_index_0_lang-DnzJ1TCi.js";import{c as d,w as s,f as m,a as f,p,o as h,r as e,g as n,h as a}from"./app-BmfxcYjs.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-DEvBGVBH.js";import"./YunCard.vue_vue_type_script_setup_true_lang-D6nllPRp.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-0qjYpm8m.js";import"./index-C7yU5XnD.js";import"./post-Dy8dm5I9.js";const v=n("h2",{id:"valaxy",tabindex:"-1"},[a("Valaxy "),n("a",{class:"header-anchor",href:"#valaxy","aria-label":'Permalink to "Valaxy"'},"​")],-1),y=n("p",null,"再有一次做项目时，本人碰到一个奇葩需求，把一大组数据按照甘特图那种排列，大于70分的显示绿色，60-70分的显示橘黄色，60分以下的显示红色，也就是一个设备分数吧，每一个分数都有一个对应的时间戳，数据结构大概长这样",-1),g=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"const arr = [{score: 100, time: 1714124541214}, {score: 90, time: 1714124541214}, {score: 40, time: 1714124541214}, ...........]")])])]),n("button",{class:"collapse"})],-1),S=n("p",null,"想法很好，但是实现起来好像有点烦，后端老哥告诉我他没头绪，最后只能我来做，谁让我只是一个卑微的前端仔呢，具体代码如下：",-1),b=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"const newAratGantarray = ref()")]),a(`
`),n("span",{class:"line"},[n("span",null,"onMounted(() => {")]),a(`
`),n("span",{class:"line"},[n("span",null,"  newAratGantarray.value = gojiequ(props.aratGant).map(item => {")]),a(`
`),n("span",{class:"line"},[n("span",null,"    return item.filter((value, index, self) => {")]),a(`
`),n("span",{class:"line"},[n("span",null,"      return self.findIndex(v => v.length === value.length && v.every((val, i) => val === value[i])) === index")]),a(`
`),n("span",{class:"line"},[n("span",null,"    })")]),a(`
`),n("span",{class:"line"},[n("span",null,"  })")]),a(`
`),n("span",{class:"line"},[n("span",null,"})")]),a(`
`),n("span",{class:"line"},[n("span",null,"const deviceNormal = ref([])")]),a(`
`),n("span",{class:"line"},[n("span",null,"const earlyWarning = ref([])")]),a(`
`),n("span",{class:"line"},[n("span",null,"const deviceAlarm = ref([])")]),a(`
`),n("span",{class:"line"},[n("span",null,"function gojiequ (arraydata) {")]),a(`
`),n("span",{class:"line"},[n("span",null,"  const start = arraydata[0]")]),a(`
`),n("span",{class:"line"},[n("span",null,"  if (start) {")]),a(`
`),n("span",{class:"line"},[n("span",null,"    if (start.sroce > 70) {")]),a(`
`),n("span",{class:"line"},[n("span",null,"      let endSco = arraydata.find(item => item.sroce < 70)")]),a(`
`),n("span",{class:"line"},[n("span",null,"      if (endSco === undefined) {")]),a(`
`),n("span",{class:"line"},[n("span",null,"        endSco = arraydata[arraydata.length - 1]")]),a(`
`),n("span",{class:"line"},[n("span",null,"        const a1 = [start.time, endSco.time]")]),a(`
`),n("span",{class:"line"},[n("span",null,"        deviceNormal.value.push(a1)")]),a(`
`),n("span",{class:"line"},[n("span",null,"      } else {")]),a(`
`),n("span",{class:"line"},[n("span",null,"        const a1 = [start.time, endSco.time]")]),a(`
`),n("span",{class:"line"},[n("span",null,"        deviceNormal.value.push(a1)")]),a(`
`),n("span",{class:"line"},[n("span",null,"        const index = arraydata.findIndex(obj => JSON.stringify(obj) === JSON.stringify(endSco))")]),a(`
`),n("span",{class:"line"},[n("span",null,"        if (index !== -1) {")]),a(`
`),n("span",{class:"line"},[n("span",null,"          const newArray = arraydata.slice(index)")]),a(`
`),n("span",{class:"line"},[n("span",null,"          gojiequ(newArray)")]),a(`
`),n("span",{class:"line"},[n("span",null,"        } else {")]),a(`
`),n("span",{class:"line"},[n("span",null,"          console.log('未找到相同对象')")]),a(`
`),n("span",{class:"line"},[n("span",null,"        }")]),a(`
`),n("span",{class:"line"},[n("span",null,"      }")]),a(`
`),n("span",{class:"line"},[n("span",null,"    } else if (start.sroce < 60) {")]),a(`
`),n("span",{class:"line"},[n("span",null,"      let endSco = arraydata.find(item => item.sroce > 60)")]),a(`
`),n("span",{class:"line"},[n("span",null,"      if (endSco === undefined) {")]),a(`
`),n("span",{class:"line"},[n("span",null,"        endSco = arraydata[arraydata.length - 1]")]),a(`
`),n("span",{class:"line"},[n("span",null,"        const a5 = [start.time, endSco.time]")]),a(`
`),n("span",{class:"line"},[n("span",null,"        deviceAlarm.value.push(a5)")]),a(`
`),n("span",{class:"line"},[n("span",null,"      } else {")]),a(`
`),n("span",{class:"line"},[n("span",null,"        const a5 = [start.time, endSco.time]")]),a(`
`),n("span",{class:"line"},[n("span",null,"        deviceAlarm.value.push(a5)")]),a(`
`),n("span",{class:"line"},[n("span",null,"        const index = arraydata.findIndex(obj => JSON.stringify(obj) === JSON.stringify(endSco))")]),a(`
`),n("span",{class:"line"},[n("span",null,"        if (index !== -1) {")]),a(`
`),n("span",{class:"line"},[n("span",null,"          const newArray = arraydata.slice(index)")]),a(`
`),n("span",{class:"line"},[n("span",null,"          gojiequ(newArray)")]),a(`
`),n("span",{class:"line"},[n("span",null,"        } else {")]),a(`
`),n("span",{class:"line"},[n("span",null,"          console.log('未找到相同对象')")]),a(`
`),n("span",{class:"line"},[n("span",null,"        }")]),a(`
`),n("span",{class:"line"},[n("span",null,"      }")]),a(`
`),n("span",{class:"line"},[n("span",null,"    } else {")]),a(`
`),n("span",{class:"line"},[n("span",null,"      let endSco = arraydata.find(item => item.sroce < 60 || item.sroce > 70)")]),a(`
`),n("span",{class:"line"},[n("span",null,"      if (endSco === undefined) {")]),a(`
`),n("span",{class:"line"},[n("span",null,"        endSco = arraydata[arraydata.length - 1]")]),a(`
`),n("span",{class:"line"},[n("span",null,"        const a7 = [start.time, endSco.time]")]),a(`
`),n("span",{class:"line"},[n("span",null,"        earlyWarning.value.push(a7)")]),a(`
`),n("span",{class:"line"},[n("span",null,"      } else {")]),a(`
`),n("span",{class:"line"},[n("span",null,"        const a7 = [start.time, endSco.time]")]),a(`
`),n("span",{class:"line"},[n("span",null,"        earlyWarning.value.push(a7)")]),a(`
`),n("span",{class:"line"},[n("span",null,"        const index = arraydata.findIndex(obj => JSON.stringify(obj) === JSON.stringify(endSco))")]),a(`
`),n("span",{class:"line"},[n("span",null,"        if (index !== -1) {")]),a(`
`),n("span",{class:"line"},[n("span",null,"          const newArray = arraydata.slice(index)")]),a(`
`),n("span",{class:"line"},[n("span",null,"          gojiequ(newArray)")]),a(`
`),n("span",{class:"line"},[n("span",null,"        } else {")]),a(`
`),n("span",{class:"line"},[n("span",null,"          console.log('未找到相同对象')")]),a(`
`),n("span",{class:"line"},[n("span",null,"        }")]),a(`
`),n("span",{class:"line"},[n("span",null,"      }")]),a(`
`),n("span",{class:"line"},[n("span",null,"    }")]),a(`
`),n("span",{class:"line"},[n("span",null,"  }")]),a(`
`),n("span",{class:"line"},[n("span",null,"  return [deviceNormal.value, earlyWarning.value, deviceAlarm.value]")]),a(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("button",{class:"collapse"})],-1),x=n("p",null,"经过我的不懈努力，代码最终还是被我搞定。",-1),_=n("h2",{id:"结尾",tabindex:"-1"},[a("结尾 "),n("a",{class:"header-anchor",href:"#结尾","aria-label":'Permalink to "结尾"'},"​")],-1),$=n("p",null,"我应该学习学习怎么组织语言，唉！就这样吧…",-1),I={__name:"share",setup(k,{expose:o}){const t=JSON.parse('{"title":"日常分析（关于一个奇葩需求）","description":"","frontmatter":{"title":"日常分析（关于一个奇葩需求）","date":"2024-05-24T00:00:00.000Z","updated":"2024-05-24T00:00:00.000Z","categories":"Valaxy 笔记","tags":["valaxy","笔记"],"top":1},"headers":[{"level":2,"title":"Valaxy","slug":"valaxy","link":"#valaxy","children":[]},{"level":2,"title":"结尾","slug":"结尾","link":"#结尾","children":[]}],"relativePath":"pages/posts/share.md","path":"/home/runner/work/aiaris.github.io/aiaris.github.io/pages/posts/share.md","lastUpdated":1716543655000}'),r=f(),i=t.frontmatter||{};return r.meta.frontmatter=Object.assign(r.meta.frontmatter||{},t.frontmatter||{}),p("pageData",t),p("valaxy:frontmatter",i),globalThis.$frontmatter=i,o({frontmatter:{title:"日常分析（关于一个奇葩需求）",date:"2024-05-24T00:00:00.000Z",updated:"2024-05-24T00:00:00.000Z",categories:"Valaxy 笔记",tags:["valaxy","笔记"],top:1}}),(l,j)=>{const c=u;return h(),d(c,{frontmatter:m(i)},{"main-content-md":s(()=>[v,y,g,S,b,x,_,$]),"main-header":s(()=>[e(l.$slots,"main-header")]),"main-header-after":s(()=>[e(l.$slots,"main-header-after")]),"main-nav":s(()=>[e(l.$slots,"main-nav")]),"main-content":s(()=>[e(l.$slots,"main-content")]),"main-content-after":s(()=>[e(l.$slots,"main-content-after")]),"main-nav-before":s(()=>[e(l.$slots,"main-nav-before")]),"main-nav-after":s(()=>[e(l.$slots,"main-nav-after")]),comment:s(()=>[e(l.$slots,"comment")]),footer:s(()=>[e(l.$slots,"footer")]),aside:s(()=>[e(l.$slots,"aside")]),"aside-custom":s(()=>[e(l.$slots,"aside-custom")]),default:s(()=>[e(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{I as default};
