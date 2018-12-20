import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import StarRating from "vue-star-rating";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCf8ScmBvv7R6gs_rdxTQBB14ew8fJ0DLM",
    libraries: "places"
  }
});
Vue.use(BootstrapVue);
Vue.component("star-rating", StarRating);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
