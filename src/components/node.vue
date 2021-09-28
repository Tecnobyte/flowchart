<template>
    <li ref="element" >
        <span class="flowchart__node" @click="visibleChilds = !visibleChilds" @contextmenu="contextMenu"> 
            <slot name="node" :parent="parent" :node="node">
                {{ node.name }} 
            </slot>
            
        </span> 

        <template v-if="node.children && node.children.length > 0">
            <div v-show="visibleChilds">
                <NodeTree v-for="(child,index) in node.children" :parent="node" :node="child" :callback="callback" :key="index" :context-id="contextId">
                    <template v-if="$scopedSlots.node || $slots.node" v-slot:node="{parent,node}">
                        <slot name="node" :node="node" :parent="parent" >
                            {{ node.name }}
                        </slot>
                    </template>
                </NodeTree>    
            </div>
            
        </template>
    </li>
</template>
<script>
 import EventBus from '../eventbus/EventBus';
export default {
    
    name:'NodeTree',
    props:{ 
        node: Object,
        parent: Object,
        callback: Function,
        contextId:String
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
    mounted(){
        this.$nextTick(() => {
            let heighChildren = this.$refs.contentChildren ? this.$refs.contentChildren.offsetHeight : 0;
            this.height = this.$refs.element.offsetHeight + heighChildren ;

            // console.log(this.height);
            let width = this.$refs.element.offsetWidth;
            EventBus.$emit('change-width',width);
        });
    },
    methods:{
        contextMenu(e){
            e.preventDefault();
            let context = document.getElementById(`${this.contextId}`);
            if(!context) return;
            context.classList.add('show');
            context.style.top = e.pageY + 'px';
            context.style.left = e.pageX + 'px';
            if(this.callback) this.callback(this.parent,this.node);
        },
        show(event){
            this.visibleChilds = !this.visibleChilds;
            let contentChildren = this.$refs.contentChildren.offsetHeight;
            if(!this.visibleChilds){
                this.height = this.height - contentChildren;
            }else {
                this.height =  this.height + contentChildren;
            }
        },
    }
}
</script>