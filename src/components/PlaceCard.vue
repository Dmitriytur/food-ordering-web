<template>
  <div class="place-result-item" @click="goToPlace(place.id)">
    <div class="place-img" :style="{ backgroundImage: 'url(' + getImage(place.photo) + ')' }"></div>
    <div class="place-content">
      <div class="div-title">
        <span class="title-text">{{ place.name }}</span>
      </div>
      <div class="rating">
        <star-rating v-model="place.stars" :read-only="true" :star-size="30" :increment="0.1"/>
      </div>
      <p
        class="description"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit maximus vulputate consectetur. Nam sagittis turpis quis purus suscipit porta.</p>
      <div class="additional-info">
        <div class="info-item">
          <span class="fa fa-map-marker-alt"></span>
          <span class="info-label">Address:</span>
          <span class="info-value">{{ place.address }}</span>
        </div>
        <div class="info-item">
          <span class="fa fa-phone"></span>
          <span class="info-label">Phone:</span>
          <span class="info-value">{{ place.phone }}</span>
        </div>
        <div class="info-item">
          <span class="fa fa-clock"></span>
          <span class="info-label">Avg. order time:</span>
          <span class="info-value">{{ place.avgTime }}m</span>
        </div>
      </div>
    </div>
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
    },
    goToPlace(id) {
      this.$router.push("/places/" + id + "/menu");
    }
  }
};
</script>

<style scoped>
.place-result-item {
  flex-wrap: wrap;
  display: flex;
  background: #fff;
  margin-bottom: 10px;
}
.place-result-item:hover {
  cursor: pointer;
}
.place-img {
  display: flex;
  display: inline-block;
  width: 30%;
  background-position: center;
  background-size: cover;
}
.place-content {
  display: flex;
  display: inline-block;
  width: 70%;
  padding: 30px;
}
.title-text {
  font-size: 20px;
  font-weight: 700;
  color: #2e4053;
}
.description {
  font-size: 14px;
  color: #85929e;
  margin: 10px 0;
}
.star {
  color: #ffde03;
}
.div-title {
  margin-bottom: 5px;
}
.info-item {
  display: inline-block;
  font-size: 14px;
  margin-right: 20px;
}
.info-label {
  font-weight: 600;
}
.info-item span {
  display: inline-block;
  margin-right: 5px;
}
</style>

