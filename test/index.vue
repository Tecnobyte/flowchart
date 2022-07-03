<template>
    <div>
        <div>Test Flowchart 2 <button @click="addItem">Add Item</button></div>
        <div>
            <flow-chart v-model="tree">
                <!-- <template v-slot:node="{node, parent}">
                    <div style="widht:100%;background-color:#e0726f;padding:5px" >{{ node.name }}</div>
                    <div>
                        <img style="float:left" width="50" height="50" src="https://www.fillmurray.com/200/200" alt="Imagen">
                        {{ node.name }} {{ parent ? parent.name : '' }}
                    </div>
                </template> -->
            </flow-chart>
        </div>
       
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
        methods: {
            addItem(){
                this.tree[0].children[0].children.push({name:'Test'})
            }
        }
    }
</script>

<style>

</style>