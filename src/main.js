import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/iconfont.css";

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://www.escook.cn";
Vue.directive("focus", {
  inserted(el) {
    el.focus();
  },
});

Vue.prototype.$axios = axios;
Vue.directive("ishow", {
  inserted(val) {
    console.log(val);
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
