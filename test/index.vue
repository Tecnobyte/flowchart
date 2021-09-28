<template>
    <div>
        <div>flowchart vue 2</div>
        <FlowChart ref="flow" :tree-data="datos_arbol" :activeContext="true">
            <template v-slot:contextmenu="{item}">
                <ul>
                    <li @click="add(item)">agregar</li>
                    <li>eliminar</li>
                </ul>
            </template>
            <!-- <template v-slot:node>
                <img src="http://lorempixel.com/200/200/" alt="Imagen">
            </template> -->
        </FlowChart>
    </div>

</template>

<script>
    import {FlowChart} from "./../src/main"
    export default {
        components:{
            FlowChart
        },
        data:()=>{
            return{
                datos_arbol: {
                    name: "root",
                    description: 'root description',
                    children:[
                        {
                            name: 'child 1 1',
                            description: 'description one',
                            children:[
                                {
                                    name: 'child 2 1',
                                    description: 'description one'
                                },
                                {
                                    name: 'child 2 2',
                                    description: 'description one'
                                },
                                {
                                    name: 'child 2 3',
                                    description: 'description one'
                                },
                                {
                                    name: 'child 2 4',
                                    description: 'description one'
                                },
                            ]
                        },
                        {
                            name: 'child 1 2',
                            description: 'description'
                        },
                        {
                            name: 'child 1 3',
                            description: 'description one'
                        },
                        {
                            name: 'child 1 4',
                            description: 'description one'
                        },
                        {
                            name: 'child 1 5',
                            description: 'description one',
                            children:[
                                {
                                    name: 'child 2 1',
                                    description: 'description one'
                                },
                                {
                                    name: 'child 2 2',
                                    description: 'description one'
                                },
                                {
                                    name: 'child 2 3',
                                    description: 'description one'
                                },
                                {
                                    name: 'child 2 4',
                                    description: 'description one'
                                },
                            ]
                        },
                    ]
                },
            }
        },
        mounted(){
            setTimeout(() => {
                this.datos_arbol.children.push({
                    name: 'child 1 6',
                    description: 'description one',
                    children:[
                        {
                            name: 'child 2 1',
                            description: 'description one'
                        },
                        {
                            name: 'child 2 2',
                            description: 'description one'
                        },
                        {
                            name: 'child 2 3',
                            description: 'description one'
                        },
                        {
                            name: 'child 2 4',
                            description: 'description one'
                        },
                    ]
                });
                
            }, 1000);
        },
        methods: {
            feedback(parent,node){
                // en vez de un callback porque no un emit
                this.parent = parent;
                this.node = node;
            },
            add(item){
                console.log(item)

            }
        }
    }
</script>

<style>

</style>