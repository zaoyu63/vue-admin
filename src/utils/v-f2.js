import VArea from '@/components/v-f2/v-area.vue';
import VAxis from '@/components/v-f2/v-axis.vue';
import VBar from '@/components/v-f2/v-bar.vue';
import VChart from '@/components/v-f2/v-chart.vue';
import VGuide from '@/components/v-f2/v-guide.vue';
import VLegend from '@/components/v-f2/v-legend.vue';
import VLine from '@/components/v-f2/v-line.vue';
import VPie from '@/components/v-f2/v-pie.vue';
import VPoint from '@/components/v-f2/v-point.vue';
import VScale from '@/components/v-f2/v-scale.vue';
import VTooltip from '@/components/v-f2/v-tooltip.vue';

const components = [
  VArea, VAxis, VBar, VChart, VGuide, VLegend, VLine, VPie, VPoint, VScale, VTooltip
];

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install, VArea, VAxis, VBar, VChart, VGuide, VLegend, VLine, VPie, VPoint, VScale, VTooltip
};

export default {
  install, VArea, VAxis, VBar, VChart, VGuide, VLegend, VLine, VPie, VPoint, VScale, VTooltip
};
