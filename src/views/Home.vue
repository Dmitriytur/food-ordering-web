<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <place-card v-for="place in places" v-bind:key="place.id" v-bind:place="place"></place-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlaceCard from "@/components/PlaceCard";
import { getPlaces } from "@/utils/api";

export default {
  components: {
    PlaceCard
  },
  data() {
    return {
      places: []
    };
  },
  mounted() {
    getPlaces().then(response => {
      this.places = response.data;
    });
  }
};
</script>
