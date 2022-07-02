import Vue from 'vue';
import Index from './index.vue';
import FlowChart from '@/main';
Vue.use(FlowChart);

new Vue({
  el: '#app',
  render: h => h(Index),
});
