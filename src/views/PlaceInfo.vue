<template>
  <div>
    <place-card v-bind:place="place"></place-card>
  </div>
</template>

<script>
import PlaceCard from "@/components/PlaceCard";

export default {
  components: {
    PlaceCard
  },
  props: ["place"],
  methods: {
    getImage(name) {
      return require("../assets/places/" + name);
    }
  }
};
</script>

