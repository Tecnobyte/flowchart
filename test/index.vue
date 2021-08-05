<template>
    <div>
        <div>flowchart vue 2</div>
        <FlowChart ref="flow" :tree-data="datos_arbol" :callback="feedback"></FlowChart>
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
        }, methods: {
            feedback(parent,node){
                // en vez de un callback porque no un emit
                this.parent = parent;
                this.node = node;
            },
        }
    }
</script>

<style>

</style>