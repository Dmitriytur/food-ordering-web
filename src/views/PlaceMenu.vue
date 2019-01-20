<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-2">
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Salads</label>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">First Course</label>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Main Course</label>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Meat Dishes</label>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Fish Dishes</label>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Dessert</label>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Baking</label>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Hot Beverage</label>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Cold Beverage</label>
        </div>
      </div>
      <div class="col-xl-10">
        <dish-card
          v-for="dish in dishes"
          v-bind:key="dish.id"
          v-bind:dish="dish"
          v-bind:placeId="place.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DishCard from "@/components/DishCard";
import { getDishes } from "@/utils/api";

export default {
  components: {
    DishCard
  },
  props: ["place"],
  data() {
    return {
      dishes: []
    };
  },
  mounted() {
    this.$emit("showSearch", true);
    getDishes(this.$route.params.id).then(response => {
      this.dishes = response.data;
    });
  },
  destroyed() {
    this.$emit("showSearch", false);
  }
};
</script>

<style scoped>
.form-check-input {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}
</style>

