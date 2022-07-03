

import "./scss/app.scss";
import FlowChart from "./components/flow.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowsToEye, faMagnifyingGlassPlus, faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowsToEye, faMagnifyingGlassPlus, faMagnifyingGlassMinus);
export { FlowChart };

const install = function(Vue){
    if (install.installed) return;
    install.installed = true;
    Vue.component('flow-chart', FlowChart);
}

export default {
    install
}