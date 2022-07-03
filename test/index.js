import Vue from 'vue';
import Index from './index.vue';
import FlowChart from '@/';
Vue.use(FlowChart);

new Vue({
  el: '#app',
  render: h => h(Index),
});
