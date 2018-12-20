<template>
  <div>
    <place-nav v-bind:showSearch="showSearch"/>
    <router-view v-bind:place="place" v-bind:dishes="dishes" v-on:showSearch="onShowSearch($event)"></router-view>
  </div>
</template>

<script>
import PlaceNav from "@/components/PlaceNav";
import { getPlace } from "@/utils/api";

export default {
  components: {
    PlaceNav
  },
  data() {
    return {
      place: {},
      showSearch: false
    };
  },
  methods: {
    onShowSearch(value) {
      this.showSearch = value;
    }
  },
  mounted() {
    getPlace(this.$route.params.id).then(response => {
      this.place = response.data;
    });
  }
};
</script>

