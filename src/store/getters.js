/*
 * @Author: your name
 * @Date: 2020-05-16 19:52:34
 * @LastEditTime: 2020-05-16 19:53:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vued:\Work\Project\admin\src\store\getters.js
 */

const getters = {
  sidebar: (state) => state.app.sidebar,
  size: (state) => state.app.size,
  device: (state) => state.app.device,
  visitedViews: (state) => state.tagsView.visitedViews,
  cachedViews: (state) => state.tagsView.cachedViews,
  token: (state) => state.user.token,
  avatar: (state) => state.user.avatar,
  name: (state) => state.user.name,
  introduction: (state) => state.user.introduction,
  roles: (state) => state.user.roles,
  permission_routes: (state) => state.permission.routes,
  errorLogs: (state) => state.errorLog.logs,
};
export default getters;
