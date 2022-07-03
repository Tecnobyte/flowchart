<template>
    <div>
        <div>Test Flowchart 2 <button @click="addItem">Add Item</button></div>
        <div>
            <flow-chart v-model="tree">
                <!-- <template v-slot:node="{node, parent}">
                    <div style="widht:100%;background-color:#e0726f;padding:5px" >{{ node.name }}</div>
                    <div>
                        <img style="float:left" width="50" height="50" src="https://www.fillmurray.com/200/200" alt="Imagen">
                        {{ node.name }}  {{ parent ? `Parent: ${parent.name}` : '' }}
                    </div>
                </template> -->
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
                tree: [
                    {
                        name: "root",
                        description: 'root description',
                        children:[
                            {
                                name: 'child',
                                description: 'description one',
                                children:[
                                    {
                                        name: 'child',
                                        description: 'description one'
                                    },
                                    {
                                        name: 'child',
                                        description: 'description one'
                                    },
                                    {
                                        name: 'child',
                                        description: 'description one'
                                    },
                                    {
                                        name: 'child',
                                        description: 'description one'
                                    },
                                ]
                            },
                            {
                                name: 'child',
                                description: 'description'
                            },
                            {
                                name: 'child',
                                description: 'description one'
                            },
                            {
                                name: 'child',
                                description: 'description one'
                            },
                            {
                                name: 'child',
                                description: 'description one',
                                children:[
                                    {
                                        name: 'child',
                                        description: 'description one'
                                    },
                                    {
                                        name: 'child',
                                        description: 'description one'
                                    },
                                    {
                                        name: 'child',
                                        description: 'description one'
                                    },
                                    {
                                        name: 'child',
                                        description: 'description one'
                                    },
                                ]
                            },
                        ]
                    },
                   
                ],
            }
        },
        methods: {
            addItem(){
                this.tree[0].children[0].children.push({name:'Test'})
            }
        }
    }
</script>

<style>

</style>