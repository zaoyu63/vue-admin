<template>
  <baidu-map :center="{lng: 116.404, lat: 39.915}" :zoom="15" class="map" scroll-wheel-zoom>
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    <bm-geolocation :autoLocation="true" :showAddressBar="true" anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-geolocation>
    <bm-overview-map :isOpen="true" anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-overview-map>
    <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
  </baidu-map>
</template>
