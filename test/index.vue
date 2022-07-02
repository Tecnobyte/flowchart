<template>
    <div>
        <div>Test Flowchart</div>
        <flow-chart ref="flow" :tree-data="tree" @node-click="feedback">
            <template v-slot:node="{node, parent}">
                <div style="widht:100%;background-color:#e0726f;padding:5px" >{{ node.name }}</div>
                <div>
                    <img style="float:left" width="50" height="50" src="https://www.fillmurray.com/200/200" alt="Imagen">
                    {{ node.name }} {{ parent ? parent.name : '' }}
                </div>
            </template>
        </flow-chart>
    </div>

</template>

<script>
    export default {
        data:()=>{
            return{
                tree: [
                    {
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
                   
                ],
            }
        },
        mounted(){
        },
        methods: {
            feedback(parent,node, level){
                this.parent = parent;
                this.node = node;
                this.level = level;
            },
        }
    }
</script>

<style>

</style>