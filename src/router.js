import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Place from "./views/Place.vue";
import Cart from "./views/Cart.vue";

import PlaceInfo from "./views/PlaceInfo.vue";
import PlaceMenu from "./views/PlaceMenu.vue";
import PlaceReviews from "./views/PlaceReviews.vue";
import PlaceAddress from "./views/PlaceAddress.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/places/:id",
      component: Place,
      children: [
        { path: "info", component: PlaceInfo },
        { path: "menu", component: PlaceMenu },
        { path: "reviews", component: PlaceReviews },
        { path: "address", component: PlaceAddress }
      ]
    },
    {
      path: "/cart",
      component: Cart
    }
  ]
});
