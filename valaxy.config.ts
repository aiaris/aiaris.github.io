import { defineValaxyConfig } from "valaxy";
import type { UserThemeConfig } from "valaxy-theme-yun";
import { addonWaline } from "valaxy-addon-waline";

// add icons what you will need
const safelist = ["i-ri-home-line"];

/**
 * User Config
 */
export default defineValaxyConfig({
  // site config see site.config.ts

  theme: "yun",

  themeConfig: {
    banner: {
      enable: true,
      title: "蓝铃轻语,风信绘梦",
      cloud: {
        enable: true,
      },
    },

    pages: [
      {
        name: "我的小伙伴们",
        url: "/links/",
        icon: "i-ri-genderless-line",
        color: "dodgerblue",
      },
      {
        name: "喜欢的女孩子",
        url: "/girls/",
        icon: "i-ri-women-line",
        color: "hotpink",
      },
    ],
    // or write it in site.config.ts
    siteConfig: {
      // 启用评论
      comment: {
        enable: true,
      },
    },
    // 设置 valaxy-addon-waline 配置项
    addons: [
      addonWaline({
        // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
        serverURL: "https://aiaris-github-io-74vt-bub6cwn99-aiaris-projects.vercel.app/",
      }),
    ],
    // footer: {
    //   since: 2016,
    //   beian: {
    //     enable: true,
    //     icp: '苏ICP备17038157号',
    //   },
    // },
  },

  unocss: { safelist },
});
