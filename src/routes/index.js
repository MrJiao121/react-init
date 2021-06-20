/* 


*/

import Login from "../pages/Login";
import index from "../pages/dashboard";
import List from "../pages/products/List";
import Edit from "../pages/products/Edit";
import pageNotFound from "../pages/pageNotFound";
export const mainRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/404",
    component: pageNotFound,
  },
];

export const adminRoutes = [
  {
    path: "/admin/dashboard",
    component: index,
    isShow: true,
    title: "看板",
  },
  {
    path: "/admin/products",
    component: List,
    exact: true,
    isShow: true,
    title: "列表",
  },
  {
    path: "/admin/products/:id/edit",
    component: Edit,
    isShow: false,
    title: "编辑",
  },
];
