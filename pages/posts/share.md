---
title: 日常分析（关于一个奇葩需求）
date: 2024-05-24
updated: 2024-05-24
categories: Valaxy 笔记
tags:
  - valaxy
  - 笔记
top: 1
---

## Valaxy

再有一次做项目时，本人碰到一个奇葩需求，把一大组数据按照甘特图那种排列，大于70分的显示绿色，60-70分的显示橘黄色，60分以下的显示红色，也就是一个设备分数吧，每一个分数都有一个对应的时间戳，数据结构大概长这样
```
const arr = [{score: 100, time: 1714124541214}, {score: 90, time: 1714124541214}, {score: 40, time: 1714124541214}, ...........]
```
想法很好，但是实现起来好像有点烦，后端老哥告诉我他没头绪，最后只能我来做，谁让我只是一个卑微的前端仔呢，具体代码如下：
```
const newAratGantarray = ref()
onMounted(() => {
  newAratGantarray.value = gojiequ(props.aratGant).map(item => {
    return item.filter((value, index, self) => {
      return self.findIndex(v => v.length === value.length && v.every((val, i) => val === value[i])) === index
    })
  })
})
const deviceNormal = ref([])
const earlyWarning = ref([])
const deviceAlarm = ref([])
function gojiequ (arraydata) {
  const start = arraydata[0]
  if (start) {
    if (start.sroce > 70) {
      let endSco = arraydata.find(item => item.sroce < 70)
      if (endSco === undefined) {
        endSco = arraydata[arraydata.length - 1]
        const a1 = [start.time, endSco.time]
        deviceNormal.value.push(a1)
      } else {
        const a1 = [start.time, endSco.time]
        deviceNormal.value.push(a1)
        const index = arraydata.findIndex(obj => JSON.stringify(obj) === JSON.stringify(endSco))
        if (index !== -1) {
          const newArray = arraydata.slice(index)
          gojiequ(newArray)
        } else {
          console.log('未找到相同对象')
        }
      }
    } else if (start.sroce < 60) {
      let endSco = arraydata.find(item => item.sroce > 60)
      if (endSco === undefined) {
        endSco = arraydata[arraydata.length - 1]
        const a5 = [start.time, endSco.time]
        deviceAlarm.value.push(a5)
      } else {
        const a5 = [start.time, endSco.time]
        deviceAlarm.value.push(a5)
        const index = arraydata.findIndex(obj => JSON.stringify(obj) === JSON.stringify(endSco))
        if (index !== -1) {
          const newArray = arraydata.slice(index)
          gojiequ(newArray)
        } else {
          console.log('未找到相同对象')
        }
      }
    } else {
      let endSco = arraydata.find(item => item.sroce < 60 || item.sroce > 70)
      if (endSco === undefined) {
        endSco = arraydata[arraydata.length - 1]
        const a7 = [start.time, endSco.time]
        earlyWarning.value.push(a7)
      } else {
        const a7 = [start.time, endSco.time]
        earlyWarning.value.push(a7)
        const index = arraydata.findIndex(obj => JSON.stringify(obj) === JSON.stringify(endSco))
        if (index !== -1) {
          const newArray = arraydata.slice(index)
          gojiequ(newArray)
        } else {
          console.log('未找到相同对象')
        }
      }
    }
  }
  return [deviceNormal.value, earlyWarning.value, deviceAlarm.value]
}
```
经过我的不懈努力，代码最终还是被我搞定。
## 结尾

我应该学习学习怎么组织语言，唉！就这样吧..
