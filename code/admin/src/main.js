import Vue from "vue";
import App from "./App.vue";
import router from "./router/permission"
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./styles/index.less";

import "./utils/config/iconfont"

Vue.use(ElementUI);
new Vue({
  el: "#app",
  template: "<App/>",
  router,
  components: {
    App
  },
});


/**
 * TO-SOLVE 待解决
 * TO-DO 未做
 */