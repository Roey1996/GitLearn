<template>
  <div id="cesiumContainer" style="width: 100%; height: 100%;"></div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1YjcyYTNlOC00OWY5LTQ0ZGMtODIwYy0xODBjYjY1NWRhNGIiLCJpZCI6Mzk2NjEsImlhdCI6MTYwNzc4MTQxM30.glvOaf6iSB9Z30dBT145_SMMmGWi3XH9RfZo7L5Au8M';
  const viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox: false
  });
  // console.log(viewer)
})


</script>