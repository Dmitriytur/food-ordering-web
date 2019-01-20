<template>
  <div class="menu-result-item">
    <div class="menu-img" :style="{ backgroundImage: 'url(' + getDishImage(dish.photo) + ')' }"></div>
    <div class="menu-content">
      <div class="div-title">
        <span class="title-text">{{ dish.name }}</span>
        <div class="title-right">
          <span class="price">{{ dish.price }} ₴</span>
          <span class="fa fa-cart-plus fa-icon-right" @click="addToCart(dish.id)"></span>
        </div>
      </div>
      <div class="ingredients">
        <span class="info-label">Ingedients:</span>
        <span class="info-value">{{ dish.ingredients}}</span>
      </div>
      <div class="additional-info">
        <div class="info-item">
          <span class="fa fa-clock"></span>
          <span class="info-label">Approximate time:</span>
          <span class="info-value">{{ dish.time }}m</span>
        </div>
        <div class="info-item">
          <span class="fa fa-balance-scale"></span>
          <span class="info-label">Portion Size:</span>
          <span class="info-value">{{ dish.size }}g</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dish", "placeId"],
  methods: {
    getDishImage(name) {
      return require("../assets/dishes/" + name);
    },
    addToCart(dishId) {
      var cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        cart = {};
      }
      if (!cart.hasOwnProperty(this.placeId)) {
        cart[this.placeId] = {};
      }
      var placeCart = cart[this.placeId];
      if (!placeCart.hasOwnProperty(dishId)) {
        placeCart[dishId] = { dish: this.dish, amount: 0 };
      }
      var cartItem = placeCart[dishId];
      cartItem.amount += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
};
</script>

<style scoped>
.menu-result-item {
  flex-wrap: wrap;
  display: flex;
  background: #fff;
  margin-bottom: 10px;
}
.menu-img {
  display: flex;
  display: inline-block;
  width: 30%;
  background-position: center;
  background-size: cover;
}
.menu-content {
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
.title-right {
  display: inline-block;
  float: right;
  font-size: 20px;
  font-weight: 700;
}
.div-title {
  margin-bottom: 5px;
}
.info-item {
  display: inline-block;
  font-size: 16px;
  margin-right: 20px;
}
.info-item span {
  display: inline-block;
  margin-right: 10px;
}
.info-label {
  font-weight: 600;
}
.fa-icon-right {
  display: inline-block;
  margin-left: 10px;
}
.fa-icon-right:hover {
  color: #17a589;
  cursor: pointer;
}
.ingredients {
  margin: 15px 0;
}
</style>
