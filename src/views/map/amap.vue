<template>
  <el-amap :amap-manager="amapManager" :center="center" :events="events" :plugin="plugin" :zoom="zoom" ref="map"
           vid="amapDemo">
  </el-amap>
</template>

<script>
  // NPM 方式
  import {AMapManager} from 'vue-amap';
  // CDN 方式
  let amapManager = new AMapManager();
  export default {
    data: function () {
      return {
        amapManager,
        zoom: 12,
        center: [121.59996, 31.197646],
        events: {
          init: (o) => {
            console.log(o.getCenter());
            console.log(this.$refs.map.$$getInstance());
            o.getCity(result => {
              console.log(result);
            });
          },
          'moveend': () => {
          },
          'zoomchange': () => {
          },
          'click': (e) => {
            alert('map clicked');
          }
        },
        plugin: ['ToolBar', {
          pName: 'MapType',
          defaultType: 0,
          events: {
            init(o) {
              console.log(o);
            }
          }
        }]
      };
    },

    methods: {
      getMap() {
        // amap vue component
        console.log(amapManager._componentMap);
        // gaode map instance
        console.log(amapManager._map);
      }
    }
  };
</script>
