<template>
  <div>
    <v-chart :data="data">
      <v-scale :tick-count="3" mask="MM/DD" type="timeCat" x/>
      <v-scale :min="0" :tick-count="5" alias="日均温度" y/>
      <v-point
        :style="{
          stroke: '#fff',
          lineWidth: 1
        }"
        shape="smooth"/>
      <v-line shape="smooth"/>
    </v-chart>
  </div>
</template>

<script>
  import {VChart, VLine, VPoint, VScale} from '@/utils/v-f2';

  export default {
    components: {
      VChart,
      VPoint,
      VLine,
      VScale,
    },
    data() {
      return {
        data: [
          {time: '2016-08-08 00:00:00', tem: 10},
          {time: '2016-08-08 00:10:00', tem: 22},
          {time: '2016-08-08 00:30:00', tem: 20},
          {time: '2016-08-09 00:35:00', tem: 26},
          {time: '2016-08-09 01:00:00', tem: 20},
          {time: '2016-08-09 01:20:00', tem: 26},
          {time: '2016-08-10 01:40:00', tem: 28},
          {time: '2016-08-10 02:00:00', tem: 20},
          {time: '2016-08-10 02:20:00', tem: 18}
        ]
      };
    }
  };
</script>

<style lang='css'>
</style>
