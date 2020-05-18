/*
 * @Author: your name
 * @Date: 2020-05-16 13:27:00
 * @LastEditTime: 2020-05-16 13:28:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vued:\Work\Project\admin\src\icons\index.js
 */

import Vue from "vue";
import SvgIcon from "./SvgIcon"; // svg component

// register globally
Vue.component("svg-icon", SvgIcon);

const req = require.context("./svg", false, /\.svg$/);
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
requireAll(req);
