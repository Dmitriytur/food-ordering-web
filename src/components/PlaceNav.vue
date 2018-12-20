<template>
  <div class="search-row">
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="menu">Menu</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="info">Info</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="reviews">Reviews</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="address">Address</router-link>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            ></div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            ></div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            ></div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="search-menu" v-if="showSearch">
            <select class="form-control main-input sort-input" id="exampleFormControlSelect2">
              <option>Sort by price</option>
              <option>Sort by time</option>
            </select>
            <input
              type="text"
              class="form-control main-input dishes-input"
              placeholder="Search by dishes"
            >
            <div class="input-group-append input-search-button-in-row">
              <button
                class="btn btn-outline-secondary-in-row main-input"
                type="button"
                id="button-addon2"
              >
                <span class="fa fa-search"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-item {
  line-height: 32px;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: #fff;
  border-radius: 0;
  border-bottom: 3px solid #17a589;
  color: #17a589;
}
.nav-item a {
  color: #2e4053;
  font-weight: 500;
}
.nav-item .active a,
.nav-item a:hover {
  color: #17a589;
}
.search-row {
  width: 100%;
  height: 52px;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  background-color: #fff;
  margin-bottom: 30px;
}
.main-search {
  width: 94%;
  margin: 0 auto;
  padding-top: 120px;
}
.search-results-title {
  font-size: 16px;
  margin-top: 10px;
}
.sort-input {
  display: inline-block;
  width: 35%;
}
.dishes-input {
  display: inline-block;
  width: 58%;
  margin-left: -1px;
}
.input-search-button-in-row {
  display: inline-block;
  width: 2%;
  margin-left: -1px;
  line-height: 14px;
}
.btn-outline-secondary-in-row {
  display: inline-block;
  margin-top: -3px;
  border-radius: 0;
  border-color: #eee;
  color: #2e4053;
}
.form-control {
  border-radius: 0;
}
.main-input {
  height: 50px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  border-color: #eee;
}
secondary:not(:disabled):not(.disabled).active,
.btn-outline-secondary-in-row:not(:disabled):not(.disabled):active,
.show > .btn-outline-secondary-in-row.dropdown-toggle,
secondary:not(:disabled):not(.disabled).hover,
.btn-outline-secondary-in-row:not(:disabled):not(.disabled):hover,
secondary:not(:disabled):not(.disabled).focus,
.btn-outline-secondary-in-row:not(:disabled):not(.disabled):focus {
  color: #fff;
  background-color: #17a589;
  border-color: #17a589;
}
</style>


<script>
export default {
  props: ["showSearch"]
};
</script>


