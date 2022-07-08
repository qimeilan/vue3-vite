import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import LayOut from "../views/Layout/index.vue";
const routes = [
  {
    path: "/",
    title: "主页面",
    component: LayOut,
    redirect: "home",
    children: [
      {
        path: "home",
        title: "home页面",
        component: () => import("../views/home.vue"),
      },
      {
        path: "child",
        title: "子页面",
        component: () => import("../views/child.vue"),
      },
      {
        path: "childB",
        title: "childB页面",
        component: () => import("../views/childB.vue"),
      },
      {
        path: "childC",
        title: "childC页面",
        component: () => import("../views/childC.vue"),
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(), //创建路由方法
  routes: routes,
});
