<template>
  <div>
    <table>
      <tr>
        <td>
          <img :src="getImage(place.photo)" alt="placeImage">
        </td>
        <td>{{ place.name }}</td>
        <td>{{ place.stars }}</td>
        <td>{{ place.address }}</td>
        <td>
          <star-rating v-model="place.stars" :read-only="true" :star-size="30" :increment="0.1"/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating
  },
  props: ["place"],
  methods: {
    getImage(name) {
      return require("../assets/places/" + name);
    }
  }
};
</script>

