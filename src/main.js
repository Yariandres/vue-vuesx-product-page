import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import VueRouter from "vue-router";
import router from "./router";
import store from "./store";

Vue.use(VueRouter);

Vue.config.productionTip = false;

Vue.component(
  "base-navbar",
  require("@/components/basenavbar/Index.vue").default
);

Vue.component(
  "base-card-component",
  require("@/components/basecardComponent/Index.vue").default
);

Vue.component(
  "base-toggle-view-component",
  require("@/components/baseToggleViewComponent/Index.vue").default
);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
