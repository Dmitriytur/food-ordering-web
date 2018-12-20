<template>
  <div>
    <iframe
      :src="place.mapLink"
      frameborder="0"
      style="border:0"
      allowfullscreen
      class="address-map"
    ></iframe>
    <!-- <GmapMap :center="{lat:place.lat, lng:place.lng}" :zoom="18" class="address-map">
      <GmapMarker :position="{lat:place.lat, lng:place.lng}"/>
    </GmapMap>-->
  </div>
</template>
<script>
export default {
  props: ["place"]
};
</script>

<style lang="less" scoped>
.address-map {
  width: 100%;
  height: calc(~"100vh - 360px");
  margin-top: -30px;
}
</style>
