<template>
  <span>
    <div class="bg-container">
      <div class="container">
        <div class="main-search">
          <div class="row">
            <select class="form-control main-input input-city" id="exampleFormControlSelect1">
              <option>Kharkiv</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <!-- <div class="input-group mb-3"> -->
            <input
              type="text"
              class="form-control main-input input-search"
              placeholder="Please enter the takeaway place"
              aria-label="Please enter the takeaway place"
              aria-describedby="button-search"
            >
            <div class="input-group-append input-search-button">
              <button class="btn btn-outline-secondary main-input" type="button" id="button-addon2">
                <span class="fa fa-search"></span>
              </button>
            </div>
            <!-- </div> -->
            <!-- <input type="test" class="form-control main-input input-search" id="exampleFormControlInput1" placeholder="Please enter the takeaway place"> -->
            <div></div>
          </div>
          <div class="black"></div>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">AppName</a>
    </nav>
  </span>
</template>

<style scoped>
/* * {
        margin: 0;
        padding: 0;
      } */
body {
  color: #212f3c;
  background-color: #f2f4f4;
  font-family: "Open Sans";
}
.bg-container {
  width: 100%;
  height: 300px;
  background: url("../assets/app-bg.jpeg") no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -2;
  margin-bottom: 30px;
}
.black {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: -1;
}
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.bg-light {
  background-color: rgba(0, 0, 0, 0.15) !important;
  color: #fff;
}
.navbar-light .navbar-brand {
  color: #fff;
  font-family: "Dancing Script";
  font-size: 26px;
}
.main-search {
  padding-top: 120px;
}
.input-city {
  width: 30%;
}
.input-search {
  width: 66%;
  margin-left: -1px;
}
.input-search-button {
  width: 4%;
  margin-left: -1px;
}
.btn-outline-secondary {
  border-radius: 0;
  border-color: #eee;
}
.form-control {
  border-radius: 0;
}
.main-input {
  height: 50px;
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.8);
  border-color: #eee;
}
.btn-outline-secondary {
  color: #2e4053;
}
secondary:not(:disabled):not(.disabled).active,
.btn-outline-secondary:not(:disabled):not(.disabled):active,
.show > .btn-outline-secondary.dropdown-toggle,
secondary:not(:disabled):not(.disabled).hover,
.btn-outline-secondary:not(:disabled):not(.disabled):hover,
secondary:not(:disabled):not(.disabled).focus,
.btn-outline-secondary:not(:disabled):not(.disabled):focus {
  color: #fff;
  background-color: #17a589;
  border-color: #17a589;
}
</style>

