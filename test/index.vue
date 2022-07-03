<template>
    <div>
        <div>Test Flowchart 2 <button @click="addItem">Add Item</button></div>
        <div>
            <flow-chart v-model="tree" />
        </div>
        <div style="margin-top:20px">
            <flow-chart v-model="tree">
                <template v-slot:node="{node}">
                    <div style="widht:100%;background-color:#e0726f;padding:5px" >{{ node.description }}</div>
                    
                </template>
            </flow-chart>
        </div>
       
    </div>

</template>

<script>
    import { FlowChart } from '@/';
    export default {
        components:{FlowChart},
        data:()=>{
            return{
                tree: []
            }
        },
        mounted(){
            this.load();
        },
        methods: {
            addItem(){
                this.tree[0].children[0].children.push({name:'Test'})
            },
            load(){

                setTimeout(() => {
                    this.tree =  [
                    {
                        "census": {
                        "apply": true, 
                        "availables": 0, 
                        "census_config": null, 
                        "census_config_id": null, 
                        "census_id": 30, 
                        "current_weighting": 0.0, 
                        "equivalence_weighting": 100.0, 
                        "id": 1693, 
                        "missing": 0, 
                        "no_availables": 0, 
                        "node": {
                            "active": true, 
                            "description": "Mitigaci\u00f3n", 
                            "id": 1, 
                            "type": {
                            "created_at": "2022-05-12 20:38:27", 
                            "description": "Grupo capas", 
                            "id": 1, 
                            "label": "grouplayers", 
                            "updated_at": "2022-05-12 20:38:27"
                            }, 
                            "type_id": 1
                        }, 
                        "node_id": 1, 
                        "protocol_node_id": 179, 
                        "weighting": 100.0
                        }, 
                        "children": [
                        {
                            "census": {
                            "apply": true, 
                            "availables": 0, 
                            "census_config": {
                                "node": {
                                "active": true, 
                                "description": "Mitigaci\u00f3n", 
                                "id": 1, 
                                "type": {
                                    "created_at": "2022-05-12 20:38:27", 
                                    "description": "Grupo capas", 
                                    "id": 1, 
                                    "label": "grouplayers", 
                                    "updated_at": "2022-05-12 20:38:27"
                                }, 
                                "type_id": 1
                                }
                            }, 
                            "census_config_id": 1693, 
                            "census_id": 30, 
                            "current_weighting": 0.0, 
                            "equivalence_weighting": 25.0, 
                            "id": 1694, 
                            "missing": 0, 
                            "no_availables": 0, 
                            "node": {
                                "active": true, 
                                "description": "Mit_acdh_1", 
                                "id": 104, 
                                "type": {
                                "created_at": "2022-05-12 20:38:27", 
                                "description": "Capas", 
                                "id": 2, 
                                "label": "layer", 
                                "updated_at": "2022-05-12 20:38:27"
                                }, 
                                "type_id": 2
                            }, 
                            "node_id": 104, 
                            "protocol_node_id": 180, 
                            "weighting": 25.0
                            }, 
                            "children": [
                            {
                                "census": {
                                "apply": true, 
                                "availables": 0, 
                                "census_config": {
                                    "node": {
                                    "active": true, 
                                    "description": "Mit_acdh_1", 
                                    "id": 104, 
                                    "type": {
                                        "created_at": "2022-05-12 20:38:27", 
                                        "description": "Capas", 
                                        "id": 2, 
                                        "label": "layer", 
                                        "updated_at": "2022-05-12 20:38:27"
                                    }, 
                                    "type_id": 2
                                    }
                                }, 
                                "census_config_id": 1694, 
                                "census_id": 30, 
                                "current_weighting": 0.0, 
                                "equivalence_weighting": 25.0, 
                                "id": 1695, 
                                "missing": 0, 
                                "no_availables": 0, 
                                "node": {
                                    "active": true, 
                                    "description": "SisMit_acdh_1", 
                                    "id": 110, 
                                    "type": {
                                    "created_at": "2022-05-12 20:38:27", 
                                    "description": "Sistemas", 
                                    "id": 3, 
                                    "label": "systems", 
                                    "updated_at": "2022-05-12 20:38:27"
                                    }, 
                                    "type_id": 3
                                }, 
                                "node_id": 110, 
                                "protocol_node_id": 181, 
                                "weighting": 25.0
                                }, 
                                "children": [], 
                                "created_at": "2022-06-28 10:07:45", 
                                "description": "SisMit_acdh_1", 
                                "id": 110, 
                                "protocol_node": {
                                "equivalence_weighting": 25.0, 
                                "id": 181, 
                                "matrix": [
                                    {
                                    "label": "operation", 
                                    "max": 100, 
                                    "min": 75
                                    }, 
                                    {
                                    "label": "diminished", 
                                    "max": 75, 
                                    "min": 45
                                    }, 
                                    {
                                    "label": "vulnerated", 
                                    "max": 45, 
                                    "min": 0
                                    }
                                ], 
                                "node_id": 110, 
                                "protocol_id": 3, 
                                "protocol_node_id": 180, 
                                "weighting": 25.0
                                }, 
                                "type": {
                                "created_at": "2022-05-12 20:38:27", 
                                "description": "Sistemas", 
                                "id": 3, 
                                "label": "systems", 
                                "updated_at": "2022-05-12 20:38:27"
                                }, 
                                "type_id": 3, 
                                "updated_at": "2022-06-28 10:07:45"
                            }
                            ], 
                            "created_at": "2022-06-28 10:03:00", 
                            "description": "Mit_acdh_1", 
                            "id": 104, 
                            "protocol_node": {
                            "equivalence_weighting": 25.0, 
                            "id": 180, 
                            "matrix": null, 
                            "node_id": 104, 
                            "protocol_id": 3, 
                            "protocol_node_id": 179, 
                            "weighting": 25.0
                            }, 
                            "type": {
                            "created_at": "2022-05-12 20:38:27", 
                            "description": "Capas", 
                            "id": 2, 
                            "label": "layer", 
                            "updated_at": "2022-05-12 20:38:27"
                            }, 
                            "type_id": 2, 
                            "updated_at": "2022-06-28 10:03:00"
                        }, 
                        {
                            "census": {
                            "apply": true, 
                            "availables": 0, 
                            "census_config": {
                                "node": {
                                "active": true, 
                                "description": "Mitigaci\u00f3n", 
                                "id": 1, 
                                "type": {
                                    "created_at": "2022-05-12 20:38:27", 
                                    "description": "Grupo capas", 
                                    "id": 1, 
                                    "label": "grouplayers", 
                                    "updated_at": "2022-05-12 20:38:27"
                                }, 
                                "type_id": 1
                                }
                            }, 
                            "census_config_id": 1693, 
                            "census_id": 30, 
                            "current_weighting": 0.0, 
                            "equivalence_weighting": 25.0, 
                            "id": 1698, 
                            "missing": 0, 
                            "no_availables": 0, 
                            "node": {
                                "active": true, 
                                "description": "Mit_acdh_2", 
                                "id": 105, 
                                "type": {
                                "created_at": "2022-05-12 20:38:27", 
                                "description": "Capas", 
                                "id": 2, 
                                "label": "layer", 
                                "updated_at": "2022-05-12 20:38:27"
                                }, 
                                "type_id": 2
                            }, 
                            "node_id": 105, 
                            "protocol_node_id": 184, 
                            "weighting": 25.0
                            }, 
                            "children": [
                            {
                                "census": {
                                "apply": true, 
                                "availables": 0, 
                                "census_config": {
                                    "node": {
                                    "active": true, 
                                    "description": "Mit_acdh_2", 
                                    "id": 105, 
                                    "type": {
                                        "created_at": "2022-05-12 20:38:27", 
                                        "description": "Capas", 
                                        "id": 2, 
                                        "label": "layer", 
                                        "updated_at": "2022-05-12 20:38:27"
                                    }, 
                                    "type_id": 2
                                    }
                                }, 
                                "census_config_id": 1698, 
                                "census_id": 30, 
                                "current_weighting": 0.0, 
                                "equivalence_weighting": 25.0, 
                                "id": 1699, 
                                "missing": 0, 
                                "no_availables": 0, 
                                "node": {
                                    "active": true, 
                                    "description": "SisMit_acdh_2", 
                                    "id": 113, 
                                    "type": {
                                    "created_at": "2022-05-12 20:38:27", 
                                    "description": "Sistemas", 
                                    "id": 3, 
                                    "label": "systems", 
                                    "updated_at": "2022-05-12 20:38:27"
                                    }, 
                                    "type_id": 3
                                }, 
                                "node_id": 113, 
                                "protocol_node_id": 185, 
                                "weighting": 25.0
                                }, 
                                "children": [], 
                                "created_at": "2022-06-28 10:09:24", 
                                "description": "SisMit_acdh_2", 
                                "id": 113, 
                                "protocol_node": {
                                "equivalence_weighting": 25.0, 
                                "id": 185, 
                                "matrix": [
                                    {
                                    "label": "operation", 
                                    "max": 100, 
                                    "min": 85
                                    }, 
                                    {
                                    "label": "diminished", 
                                    "max": 85, 
                                    "min": 50
                                    }, 
                                    {
                                    "label": "vulnerated", 
                                    "max": 50, 
                                    "min": 0
                                    }
                                ], 
                                "node_id": 113, 
                                "protocol_id": 3, 
                                "protocol_node_id": 184, 
                                "weighting": 25.0
                                }, 
                                "type": {
                                "created_at": "2022-05-12 20:38:27", 
                                "description": "Sistemas", 
                                "id": 3, 
                                "label": "systems", 
                                "updated_at": "2022-05-12 20:38:27"
                                }, 
                                "type_id": 3, 
                                "updated_at": "2022-06-28 10:09:24"
                            }
                            ], 
                            "created_at": "2022-06-28 10:03:27", 
                            "description": "Mit_acdh_2", 
                            "id": 105, 
                            "protocol_node": {
                            "equivalence_weighting": 25.0, 
                            "id": 184, 
                            "matrix": null, 
                            "node_id": 105, 
                            "protocol_id": 3, 
                            "protocol_node_id": 179, 
                            "weighting": 25.0
                            }, 
                            "type": {
                            "created_at": "2022-05-12 20:38:27", 
                            "description": "Capas", 
                            "id": 2, 
                            "label": "layer", 
                            "updated_at": "2022-05-12 20:38:27"
                            }, 
                            "type_id": 2, 
                            "updated_at": "2022-06-28 10:03:27"
                        }, 
                        {
                            "census": {
                            "apply": true, 
                            "availables": 0, 
                            "census_config": {
                                "node": {
                                "active": true, 
                                "description": "Mitigaci\u00f3n", 
                                "id": 1, 
                                "type": {
                                    "created_at": "2022-05-12 20:38:27", 
                                    "description": "Grupo capas", 
                                    "id": 1, 
                                    "label": "grouplayers", 
                                    "updated_at": "2022-05-12 20:38:27"
                                }, 
                                "type_id": 1
                                }
                            }, 
                            "census_config_id": 1693, 
                            "census_id": 30, 
                            "current_weighting": 0.0, 
                            "equivalence_weighting": 50.0, 
                            "id": 1702, 
                            "missing": 0, 
                            "no_availables": 0, 
                            "node": {
                                "active": true, 
                                "description": "Mit_acdh_3", 
                                "id": 107, 
                                "type": {
                                "created_at": "2022-05-12 20:38:27", 
                                "description": "Capas", 
                                "id": 2, 
                                "label": "layer", 
                                "updated_at": "2022-05-12 20:38:27"
                                }, 
                                "type_id": 2
                            }, 
                            "node_id": 107, 
                            "protocol_node_id": 188, 
                            "weighting": 50.0
                            }, 
                            "children": [
                            {
                                "census": {
                                "apply": true, 
                                "availables": 0, 
                                "census_config": {
                                    "node": {
                                    "active": true, 
                                    "description": "Mit_acdh_3", 
                                    "id": 107, 
                                    "type": {
                                        "created_at": "2022-05-12 20:38:27", 
                                        "description": "Capas", 
                                        "id": 2, 
                                        "label": "layer", 
                                        "updated_at": "2022-05-12 20:38:27"
                                    }, 
                                    "type_id": 2
                                    }
                                }, 
                                "census_config_id": 1702, 
                                "census_id": 30, 
                                "current_weighting": 0.0, 
                                "equivalence_weighting": 50.0, 
                                "id": 1703, 
                                "missing": 0, 
                                "no_availables": 0, 
                                "node": {
                                    "active": true, 
                                    "description": "SisMit_acdh_3", 
                                    "id": 114, 
                                    "type": {
                                    "created_at": "2022-05-12 20:38:27", 
                                    "description": "Sistemas", 
                                    "id": 3, 
                                    "label": "systems", 
                                    "updated_at": "2022-05-12 20:38:27"
                                    }, 
                                    "type_id": 3
                                }, 
                                "node_id": 114, 
                                "protocol_node_id": 189, 
                                "weighting": 50.0
                                }, 
                                "children": [], 
                                "created_at": "2022-06-28 10:09:55", 
                                "description": "SisMit_acdh_3", 
                                "id": 114, 
                                "protocol_node": {
                                "equivalence_weighting": 50.0, 
                                "id": 189, 
                                "matrix": [
                                    {
                                    "label": "operation", 
                                    "max": 100, 
                                    "min": 85
                                    }, 
                                    {
                                    "label": "diminished", 
                                    "max": 85, 
                                    "min": 35
                                    }, 
                                    {
                                    "label": "vulnerated", 
                                    "max": 35, 
                                    "min": 0
                                    }
                                ], 
                                "node_id": 114, 
                                "protocol_id": 3, 
                                "protocol_node_id": 188, 
                                "weighting": 50.0
                                }, 
                                "type": {
                                "created_at": "2022-05-12 20:38:27", 
                                "description": "Sistemas", 
                                "id": 3, 
                                "label": "systems", 
                                "updated_at": "2022-05-12 20:38:27"
                                }, 
                                "type_id": 3, 
                                "updated_at": "2022-06-28 10:09:55"
                            }
                            ], 
                            "created_at": "2022-06-28 10:06:32", 
                            "description": "Mit_acdh_3", 
                            "id": 107, 
                            "protocol_node": {
                            "equivalence_weighting": 50.0, 
                            "id": 188, 
                            "matrix": null, 
                            "node_id": 107, 
                            "protocol_id": 3, 
                            "protocol_node_id": 179, 
                            "weighting": 50.0
                            }, 
                            "type": {
                            "created_at": "2022-05-12 20:38:27", 
                            "description": "Capas", 
                            "id": 2, 
                            "label": "layer", 
                            "updated_at": "2022-05-12 20:38:27"
                            }, 
                            "type_id": 2, 
                            "updated_at": "2022-06-28 10:06:32"
                        }
                        ], 
                        "created_at": "2022-05-12 20:38:27", 
                        "description": "Mitigaci\u00f3n", 
                        "id": 1, 
                        "protocol_node": {
                        "equivalence_weighting": 100.0, 
                        "id": 179, 
                        "matrix": [
                            {
                            "label": "operation", 
                            "max": 100, 
                            "min": 80
                            }, 
                            {
                            "label": "diminished", 
                            "max": 80, 
                            "min": 52
                            }, 
                            {
                            "label": "vulnerated", 
                            "max": 52, 
                            "min": 0
                            }
                        ], 
                        "node_id": 1, 
                        "protocol_id": 3, 
                        "protocol_node_id": null, 
                        "weighting": 100.0
                        }, 
                        "type": {
                        "created_at": "2022-05-12 20:38:27", 
                        "description": "Grupo capas", 
                        "id": 1, 
                        "label": "grouplayers", 
                        "updated_at": "2022-05-12 20:38:27"
                        }, 
                        "type_id": 1, 
                        "updated_at": "2022-05-12 20:38:27"
                    }, 
                    {
                        "census": {
                        "apply": true, 
                        "availables": 0, 
                        "census_config": null, 
                        "census_config_id": null, 
                        "census_id": 30, 
                        "current_weighting": 0.0, 
                        "equivalence_weighting": 100.0, 
                        "id": 1707, 
                        "missing": 0, 
                        "no_availables": 0, 
                        "node": {
                            "active": true, 
                            "description": "Prevenci\u00f3n", 
                            "id": 2, 
                            "type": {
                            "created_at": "2022-05-12 20:38:27", 
                            "description": "Grupo capas", 
                            "id": 1, 
                            "label": "grouplayers", 
                            "updated_at": "2022-05-12 20:38:27"
                            }, 
                            "type_id": 1
                        }, 
                        "node_id": 2, 
                        "protocol_node_id": 193, 
                        "weighting": 100.0
                        }, 
                        "children": [
                        {
                            "census": {
                            "apply": true, 
                            "availables": 0, 
                            "census_config": {
                                "node": {
                                "active": true, 
                                "description": "Prevenci\u00f3n", 
                                "id": 2, 
                                "type": {
                                    "created_at": "2022-05-12 20:38:27", 
                                    "description": "Grupo capas", 
                                    "id": 1, 
                                    "label": "grouplayers", 
                                    "updated_at": "2022-05-12 20:38:27"
                                }, 
                                "type_id": 1
                                }
                            }, 
                            "census_config_id": 1707, 
                            "census_id": 30, 
                            "current_weighting": 0.0, 
                            "equivalence_weighting": 45.0, 
                            "id": 1708, 
                            "missing": 0, 
                            "no_availables": 0, 
                            "node": {
                                "active": true, 
                                "description": "Prev_acdh_1", 
                                "id": 108, 
                                "type": {
                                "created_at": "2022-05-12 20:38:27", 
                                "description": "Capas", 
                                "id": 2, 
                                "label": "layer", 
                                "updated_at": "2022-05-12 20:38:27"
                                }, 
                                "type_id": 2
                            }, 
                            "node_id": 108, 
                            "protocol_node_id": 194, 
                            "weighting": 45.0
                            }, 
                            "children": [
                            {
                                "census": {
                                "apply": true, 
                                "availables": 0, 
                                "census_config": {
                                    "node": {
                                    "active": true, 
                                    "description": "Prev_acdh_1", 
                                    "id": 108, 
                                    "type": {
                                        "created_at": "2022-05-12 20:38:27", 
                                        "description": "Capas", 
                                        "id": 2, 
                                        "label": "layer", 
                                        "updated_at": "2022-05-12 20:38:27"
                                    }, 
                                    "type_id": 2
                                    }
                                }, 
                                "census_config_id": 1708, 
                                "census_id": 30, 
                                "current_weighting": 0.0, 
                                "equivalence_weighting": 45.0, 
                                "id": 1709, 
                                "missing": 0, 
                                "no_availables": 0, 
                                "node": {
                                    "active": true, 
                                    "description": "SisPrev_acdh_1", 
                                    "id": 115, 
                                    "type": {
                                    "created_at": "2022-05-12 20:38:27", 
                                    "description": "Sistemas", 
                                    "id": 3, 
                                    "label": "systems", 
                                    "updated_at": "2022-05-12 20:38:27"
                                    }, 
                                    "type_id": 3
                                }, 
                                "node_id": 115, 
                                "protocol_node_id": 195, 
                                "weighting": 45.0
                                }, 
                                "children": [
                                {
                                    "census": {
                                    "apply": true, 
                                    "availables": 0, 
                                    "census_config": {
                                        "node": {
                                        "active": true, 
                                        "description": "SisPrev_acdh_1", 
                                        "id": 115, 
                                        "type": {
                                            "created_at": "2022-05-12 20:38:27", 
                                            "description": "Sistemas", 
                                            "id": 3, 
                                            "label": "systems", 
                                            "updated_at": "2022-05-12 20:38:27"
                                        }, 
                                        "type_id": 3
                                        }
                                    }, 
                                    "census_config_id": 1709, 
                                    "census_id": 30, 
                                    "current_weighting": 0.0, 
                                    "equivalence_weighting": 100.0, 
                                    "id": 1710, 
                                    "missing": 0, 
                                    "no_availables": 0, 
                                    "node": {
                                        "active": true, 
                                        "description": "SubPrev_acdh_1", 
                                        "id": 118, 
                                        "type": {
                                        "created_at": "2022-05-12 20:38:27", 
                                        "description": "Subistemas", 
                                        "id": 4, 
                                        "label": "subsystems", 
                                        "updated_at": "2022-05-12 20:38:27"
                                        }, 
                                        "type_id": 4
                                    }, 
                                    "node_id": 118, 
                                    "protocol_node_id": 196, 
                                    "weighting": 100.0
                                    }, 
                                    "children": [], 
                                    "created_at": "2022-06-28 10:11:24", 
                                    "description": "SubPrev_acdh_1", 
                                    "id": 118, 
                                    "protocol_node": {
                                    "equivalence_weighting": 100.0, 
                                    "id": 196, 
                                    "matrix": null, 
                                    "node_id": 118, 
                                    "protocol_id": 3, 
                                    "protocol_node_id": 195, 
                                    "weighting": 100.0
                                    }, 
                                    "type": {
                                    "created_at": "2022-05-12 20:38:27", 
                                    "description": "Subistemas", 
                                    "id": 4, 
                                    "label": "subsystems", 
                                    "updated_at": "2022-05-12 20:38:27"
                                    }, 
                                    "type_id": 4, 
                                    "updated_at": "2022-06-28 10:11:24"
                                }
                                ], 
                                "created_at": "2022-06-28 10:10:13", 
                                "description": "SisPrev_acdh_1", 
                                "id": 115, 
                                "protocol_node": {
                                "equivalence_weighting": 45.0, 
                                "id": 195, 
                                "matrix": null, 
                                "node_id": 115, 
                                "protocol_id": 3, 
                                "protocol_node_id": 194, 
                                "weighting": 45.0
                                }, 
                                "type": {
                                "created_at": "2022-05-12 20:38:27", 
                                "description": "Sistemas", 
                                "id": 3, 
                                "label": "systems", 
                                "updated_at": "2022-05-12 20:38:27"
                                }, 
                                "type_id": 3, 
                                "updated_at": "2022-06-28 10:10:13"
                            }
                            ], 
                            "created_at": "2022-06-28 10:06:51", 
                            "description": "Prev_acdh_1", 
                            "id": 108, 
                            "protocol_node": {
                            "equivalence_weighting": 45.0, 
                            "id": 194, 
                            "matrix": null, 
                            "node_id": 108, 
                            "protocol_id": 3, 
                            "protocol_node_id": 193, 
                            "weighting": 45.0
                            }, 
                            "type": {
                            "created_at": "2022-05-12 20:38:27", 
                            "description": "Capas", 
                            "id": 2, 
                            "label": "layer", 
                            "updated_at": "2022-05-12 20:38:27"
                            }, 
                            "type_id": 2, 
                            "updated_at": "2022-06-28 10:06:51"
                        }, 
                        {
                            "census": {
                            "apply": true, 
                            "availables": 0, 
                            "census_config": {
                                "node": {
                                "active": true, 
                                "description": "Prevenci\u00f3n", 
                                "id": 2, 
                                "type": {
                                    "created_at": "2022-05-12 20:38:27", 
                                    "description": "Grupo capas", 
                                    "id": 1, 
                                    "label": "grouplayers", 
                                    "updated_at": "2022-05-12 20:38:27"
                                }, 
                                "type_id": 1
                                }
                            }, 
                            "census_config_id": 1707, 
                            "census_id": 30, 
                            "current_weighting": 0.0, 
                            "equivalence_weighting": 55.0, 
                            "id": 1713, 
                            "missing": 0, 
                            "no_availables": 0, 
                            "node": {
                                "active": true, 
                                "description": "Prev_acdh_2", 
                                "id": 109, 
                                "type": {
                                "created_at": "2022-05-12 20:38:27", 
                                "description": "Capas", 
                                "id": 2, 
                                "label": "layer", 
                                "updated_at": "2022-05-12 20:38:27"
                                }, 
                                "type_id": 2
                            }, 
                            "node_id": 109, 
                            "protocol_node_id": 199, 
                            "weighting": 55.0
                            }, 
                            "children": [
                            {
                                "census": {
                                "apply": true, 
                                "availables": 0, 
                                "census_config": {
                                    "node": {
                                    "active": true, 
                                    "description": "Prev_acdh_2", 
                                    "id": 109, 
                                    "type": {
                                        "created_at": "2022-05-12 20:38:27", 
                                        "description": "Capas", 
                                        "id": 2, 
                                        "label": "layer", 
                                        "updated_at": "2022-05-12 20:38:27"
                                    }, 
                                    "type_id": 2
                                    }
                                }, 
                                "census_config_id": 1713, 
                                "census_id": 30, 
                                "current_weighting": 0.0, 
                                "equivalence_weighting": 55.0, 
                                "id": 1714, 
                                "missing": 0, 
                                "no_availables": 0, 
                                "node": {
                                    "active": true, 
                                    "description": "SisPrev_acdh_2", 
                                    "id": 117, 
                                    "type": {
                                    "created_at": "2022-05-12 20:38:27", 
                                    "description": "Sistemas", 
                                    "id": 3, 
                                    "label": "systems", 
                                    "updated_at": "2022-05-12 20:38:27"
                                    }, 
                                    "type_id": 3
                                }, 
                                "node_id": 117, 
                                "protocol_node_id": 200, 
                                "weighting": 55.0
                                }, 
                                "children": [], 
                                "created_at": "2022-06-28 10:10:59", 
                                "description": "SisPrev_acdh_2", 
                                "id": 117, 
                                "protocol_node": {
                                "equivalence_weighting": 55.0, 
                                "id": 200, 
                                "matrix": [
                                    {
                                    "label": "operation", 
                                    "max": 100, 
                                    "min": 85
                                    }, 
                                    {
                                    "label": "diminished", 
                                    "max": 85, 
                                    "min": 45
                                    }, 
                                    {
                                    "label": "vulnerated", 
                                    "max": 45, 
                                    "min": 0
                                    }
                                ], 
                                "node_id": 117, 
                                "protocol_id": 3, 
                                "protocol_node_id": 199, 
                                "weighting": 55.0
                                }, 
                                "type": {
                                "created_at": "2022-05-12 20:38:27", 
                                "description": "Sistemas", 
                                "id": 3, 
                                "label": "systems", 
                                "updated_at": "2022-05-12 20:38:27"
                                }, 
                                "type_id": 3, 
                                "updated_at": "2022-06-28 10:10:59"
                            }
                            ], 
                            "created_at": "2022-06-28 10:07:03", 
                            "description": "Prev_acdh_2", 
                            "id": 109, 
                            "protocol_node": {
                            "equivalence_weighting": 55.0, 
                            "id": 199, 
                            "matrix": null, 
                            "node_id": 109, 
                            "protocol_id": 3, 
                            "protocol_node_id": 193, 
                            "weighting": 55.0
                            }, 
                            "type": {
                            "created_at": "2022-05-12 20:38:27", 
                            "description": "Capas", 
                            "id": 2, 
                            "label": "layer", 
                            "updated_at": "2022-05-12 20:38:27"
                            }, 
                            "type_id": 2, 
                            "updated_at": "2022-06-28 10:07:03"
                        }
                        ], 
                        "created_at": "2022-05-12 20:38:27", 
                        "description": "Prevenci\u00f3n", 
                        "id": 2, 
                        "protocol_node": {
                        "equivalence_weighting": 100.0, 
                        "id": 193, 
                        "matrix": [
                            {
                            "label": "operation", 
                            "max": 100, 
                            "min": 80
                            }, 
                            {
                            "label": "diminished", 
                            "max": 80, 
                            "min": 60
                            }, 
                            {
                            "label": "vulnerated", 
                            "max": 60, 
                            "min": 0
                            }
                        ], 
                        "node_id": 2, 
                        "protocol_id": 3, 
                        "protocol_node_id": null, 
                        "weighting": 100.0
                        }, 
                        "type": {
                        "created_at": "2022-05-12 20:38:27", 
                        "description": "Grupo capas", 
                        "id": 1, 
                        "label": "grouplayers", 
                        "updated_at": "2022-05-12 20:38:27"
                        }, 
                        "type_id": 1, 
                        "updated_at": "2022-05-12 20:38:27"
                    }
                    ] 
                }, 2000);
                

            }
        }
    }
</script>

<style>

</style>