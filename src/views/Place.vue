<template>
  <div>
    <b-nav tabs>
      <b-nav-item to="info">Info</b-nav-item>
      <b-nav-item to="menu">Menu</b-nav-item>
      <b-nav-item to="reviews">Reviews</b-nav-item>
      <b-nav-item to="address">Address</b-nav-item>
    </b-nav>
    <router-view v-bind:place="place"></router-view>
  </div>
</template>

<script>
import { getPlace } from "@/utils/api";

export default {
  data() {
    return {
      place: {}
    };
  },
  mounted() {
    getPlace(this.$route.params.id).then(response => {
      this.place = response.data;
    });
  }
};
</script>

