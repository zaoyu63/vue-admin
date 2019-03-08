<template>
  <div>
    <v-chart
      :data="data">
      <v-scale :tick-count="3" type="timeCat" x/>
      <v-scale :min="0" y/>
      <v-area :colors="gradient" shape="smooth"/>
      <v-line :colors="gradient" shape="smooth"/>
    </v-chart>
  </div>
</template>

<script>
  import {VArea, VChart, VLine, VScale} from '@/utils/v-f2';

  export default {
    components: {
      VChart,
      VLine,
      VArea,
      VScale,
    },
    data() {
      return {
        gradient: [
          [0, '#FE6384'],
          [1, '#f7f7f7']
        ],
        data: [
          {time: '2016-08-08 00:00:00', tem: 10},
          {time: '2016-08-08 00:10:00', tem: 22},
          {time: '2016-08-08 00:30:00', tem: 16},
          {time: '2016-08-09 00:35:00', tem: 26},
          {time: '2016-08-09 01:00:00', tem: 12},
          {time: '2016-08-09 01:20:00', tem: 26},
          {time: '2016-08-10 01:40:00', tem: 18},
          {time: '2016-08-10 02:00:00', tem: 26},
          {time: '2016-08-10 02:20:00', tem: 12}
        ]
      };
    }
  };
</script>
