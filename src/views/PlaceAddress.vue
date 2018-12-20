<template>
  <div>
    <GmapMap
      :center="{lat:place.lat, lng:place.lng}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>
<script>
export default {
  props: ["place"]
};
</script>