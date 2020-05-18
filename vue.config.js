/*
 * @Author: your name
 * @Date: 2020-05-15 21:32:14
 * @LastEditTime: 2020-05-16 15:41:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vued:\Work\Project\admin\vue.config.js
 */
"use strict";
const path = require("path");

const defaultSettings = require("./src/settings.js");
const name = defaultSettings.title || "vue Element Admin"; // page title

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: ".",
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: false,
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  chainWebpack(config) {
    // config.plugins.delete("preload");
    // config.plugins.delete("prefetch");

    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
};
