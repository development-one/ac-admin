/*
 * @Author: your name
 * @Date: 2020-05-15 21:28:10
 * @LastEditTime: 2020-05-17 17:40:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vued:\Work\Project\admin\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";

import Cookies from "js-cookie";
import Element from "element-ui";
import "./styles/element-variables.scss";
Vue.use(Element, {
  size: Cookies.get("size") || "medium", // set element-ui default size
});

import "normalize.css/normalize.css";

import "@/styles/index.scss"; // global css

import "./icons"; // icon
import "./permission"; // permission control
import "./utils/error-log"; // error log

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
