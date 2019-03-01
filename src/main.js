import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from '@/utils/element-ui';
import DayJs from 'dayjs';
import '@/assets/scss/index.scss';
import '@/assets/font/iconfont.css';
import VueAMap from 'vue-amap';
import BaiduMap from 'vue-baidu-map';

Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
  key: 'b551e033d09a45de75ebbc1170025c20',
  plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
});


Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'ey4Q8mftyglv0vmy7MQz6Qhec8igNgkn'
});

Vue.use(ElementUI);
Vue.prototype.$moment = DayJs;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
