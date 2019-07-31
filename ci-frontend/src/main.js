import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./element-ui";
import "./rx";
import "./registerServiceWorker";

Vue.config.devtools = process.env.NODE_ENV !== "production";
Vue.config.productionTip = process.env.NODE_ENV !== "production";

window.store = store;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
