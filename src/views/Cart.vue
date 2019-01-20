<template>
  <div>
    <div class="search-row">
      <div class="container">
        <div class="row">
          <div class="col-xl-6">
            <a href="javascript:history.go(-1)">
              <p class="search-results-title">
                <span class="fa fa-arrow-left"></span> Back to the Place Page
              </p>
            </a>
          </div>
          <div class="col-xl-6"></div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div>
            <cart-item
              v-for="cartDish in cartItems"
              v-bind:key="cartDish.dish.id"
              v-bind:cartDish="cartDish"
            />
          </div>

          <div class="row shopping-results">
            <div class="col-xl-6">
              <p># Items: 2</p>
            </div>
            <div class="col-xl-6">
              <p class="text-right">TOTAL: 65.00 ₴</p>
            </div>
          </div>

          <div class="row checkout">
            <div class="col-xl-5">
              <div class="form-group">
                <label class="input-label" for="name">Your Name</label>
                <input
                  type="text"
                  class="form-control input-default"
                  id="name"
                  placeholder="Please enter your first name"
                >
              </div>
            </div>
            <div class="col-xl-5">
              <div class="form-group">
                <label class="input-label" for="phone">Phone Number</label>
                <input
                  type="text"
                  class="form-control input-default"
                  id="phone"
                  placeholder="+38 (0xx) xxx xx xx"
                >
              </div>
            </div>
            <div class="col-xl-2">
              <button class="btn btn-success primary-button checkout-button">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.search-row {
  width: 100%;
  height: 52px;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  background-color: #fff;
  margin-bottom: 30px;
}
a {
  color: #2e4053;
}
a:hover {
  color: #17a589;
  text-decoration: none;
}
.search-row p {
  margin-top: 12px;
}

.shopping-results {
  margin: 30px 0 20px;
  font-size: 20px;
  font-weight: 700;
  color: #000;
}

.text-right {
  text-align: right;
}

.checkout {
  padding: 20px 15px;
  border-top: 1px solid #ddd;
}

.input-label {
  font-weight: 600;
}

.input-default {
  border-radius: 0;
}

.primary-button {
  width: 100%;
  text-transform: uppercase;
  color: #fff;
  background-color: #17a589;
  border-radius: 0;
}
.checkout-button {
  margin-top: 32px;
}
</style>

<script>
import CartItem from "@/components/CartItem";

export default {
  components: {
    CartItem
  },
  data() {
    return {
      cartItems: []
    };
  },
  mounted() {
    if (localStorage.getItem("cart")) {
      var cart = JSON.parse(localStorage.getItem("cart"));
      var placeId = this.$route.params.id;
      this.cartItems = Object.values(cart[placeId]);
      console.log(Object.values(cart[placeId]));
    }
  }
};
</script>

