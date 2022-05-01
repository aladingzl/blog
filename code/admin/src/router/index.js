import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// 路由懒加载
const loadComponent = (component, lazy = true) =>
  lazy ? () => import(`views/${component}.vue`) : component;

export const constantRouterMap = [{
    name: "首页",
    path: "/",
    component: loadComponent("Layout/index"),
    redirect: "/home",
    icon: "home",
    children: [{
      name: "首页",
      path: "home",
      component: loadComponent("Home/index"),
    }, ],
  },
  {
    name: "登录",
    path: '/login',
    component: loadComponent("Login/index"),
    // TO-SOLVE
    hidden: true
  },

]

export const router = new Router({
  routes: constantRouterMap,
})