<template>
    <li ref="element" >
        <span @click="mouseClick" class="flowchart__node"> 
            <slot name="node" :parent="parent" :node="node">
                {{ node.name }} 
            </slot>
        </span> 

        <template v-if="node.children && node.children.length > 0">
            <ul class="parent" v-if="visibleChilds">
                <NodeTree :hide-children-with-click="hideChildrenWithClick" :level="level + 1" @node-click="(node, parent, level) => $emit('node-click', node, parent, level)" v-for="(child,index) in node.children" :parent="node" :node="child" :key="index" :context-id="contextId">
                    <template v-if="$scopedSlots.node || $slots.node" v-slot:node="{parent,node,level}">
                        <slot name="node" :node="node" :parent="parent" :level="level" >
                            {{ node.name }}
                        </slot>
                    </template>
                </NodeTree>    
            </ul>
            
        </template>
    </li>
</template>
<script>
export default {
    
    name:'NodeTree',
    props:{ 
        node: Object,
        parent: Object,
        callback: Function,
        contextId:String,
        level: {
            type:Number,
            default: 1
        },
        hideChildrenWithClick:{
            type:Boolean,
            default:false,
        }
    },
    data(){
        return {
            visibleChilds:true,
            height:0
        }
    },
    computed:{
        css(){
            return {
                height:`${this.height}px`,
                transitionDuration:'1s',
                overflow:'hidden'
            }
        }
    },
    methods:{
        mouseClick(event){
            if(this.hideChildrenWithClick){
                this.visibleChilds = !this.visibleChilds;
            }
            
            event.stopPropagation();
            this.$emit('node-click', this.node, this.parent, this.level);
        }
    }
}
</script>