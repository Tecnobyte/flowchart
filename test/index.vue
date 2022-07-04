<template>
    <div>
        <div>Test Flowchart 2 <button @click="addItem">Add Item</button></div>
        <div>
            <flow-chart v-model="tree" />
        </div>
        <div style="margin-top:20px;height:500px">
            <flow-chart v-model="tree" hide-children-with-click :style="{height:'500px'}">
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
                   
                    ] 
                }, 2000);
                
            }
        }
    }
</script>

<style>

</style>