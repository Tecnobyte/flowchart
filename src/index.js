import "./scss/app.scss";
import FlowChart from "./components/flow.vue";


export { FlowChart };

const install = function(Vue){
    if (install.installed) return;
    install.installed = true;
    Vue.component('flow-chart', FlowChart);
}

export default {
    install
}