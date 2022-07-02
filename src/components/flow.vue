<template>
    <div 
    class="flowchart__content" 
    @mousedown="e => {  isDragging = (e.which === 1) ? true: false; }" 
    @mousemove="mouseMove"
    >   
        <div class="flowchart__menu__options">
            <button @click="center" class="pure-material-button-contained">
                <span class="material-icons" :style="{cursor:'pointer',userSelect:'none'}" @click="center">filter_center_focus</span>
            </button>
        </div>
        <template v-if="treeData != null">
            <div id="tree" ref="tree" class="flowchart__orgchart " @mousewheel="mouseWheel" :style="css">
                <ul >
                    <node-tree v-for="(node, index) in treeData" :hide-children-with-click="hideChildrenWithClick" @node-click="onMouseClick" ref="parent" :node="node" :key="index">

                        <template v-if="$scopedSlots.node || $slots.node" v-slot:node="{node,parent, level}" >
                            <slot name="node" :node="node" :parent="parent" :level="level" >
                                {{ node.name }}
                            </slot>
                        </template>

                    </node-tree>
                </ul>
            </div>
        </template>
    </div>
</template>
<script>
    import NodeTree from './node.vue';
    export default {
        name: "Flow",
        props:{
            treeData : {
                type:Array,
                default: () => ([])
            },
            callback: Function,
            activeContext:{
                type:Boolean,
                default:true
            },
            hideChildrenWithClick:{
                type:Boolean,
                default:false,
            }
        },
        components:{
            NodeTree
        },
        computed:{
            css(){
                return{
                    transform: `translate3d( ${this.translateX}px, ${this.translateY}px, ${this.translateZ}px) scale(${this.zoom})`,
                    position:'relative',
                    backgroundColor:'#FFFFFF',
                }
            },
        },
        data(){
            return {
                translateX:0,
                translateY:0,
                translateZ:0,
                stepZ:10,
                initialObjX:0,
                initialObjY:0,
                initialMouseX:0,
                initialMouseY:0,
                isDragging:false,
                width:0,
                nodes:0,
                calcular:true,
                zoom:1,
                contextId:null,
                parent: null,
                node:null,
            };
        },
        mounted(){
            document.addEventListener('touchmove',this.mouseMove);

            document.addEventListener('keydown',(e) => {
                if(e.shiftKey){
                    document.addEventListener('DOMMouseScroll',this.mouseWheel);
                }
            });

            document.addEventListener('keyup',(e) => document.removeEventListener('DOMMouseScroll',this.mouseWheel));

            document.addEventListener('mouseup', e => this.isDragging = false);
        },
        methods:{
            feedback(parent,node){
                // en vez de un callback porque no un emit
                this.parent = parent;
                this.node = node;
            },

            onMouseClick(node, parent, level){
                this.$emit('node-click', node, parent, level);
            },
            mouseWheel(e){
                e.preventDefault();
                let delta = e.delta || e.wheelDelta;
                let zoomOut;
                
                if (delta === undefined) {
                    delta = e.detail;
                    zoomOut = delta ? delta < 0 : e.deltaY > 0;
                    zoomOut = !zoomOut;
                } else {
                    zoomOut = delta ? delta < 0 : e.deltaY > 0;
                }
                if (zoomOut) {
                    this.zoomOut()
                } else {
                    this.zoomIn();                    
                }
            },
            mouseMove(e){
                if (this.isDragging) {
                    e.preventDefault();
                    let currentX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                    let currentY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
                    this.translateX = this.initialObjX + (currentX - this.initialMouseX);
                    this.translateY = this.initialObjY + (currentY - this.initialMouseY);
                } else {
                    this.initialMouseX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                    this.initialMouseY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
                    this.initialObjX = this.translateX;
                    this.initialObjY = this.translateY;
                }
            },
            zoomIn(){
                let tempzoom = this.zoom - 0.1;
                if(tempzoom >= 3) return; 
                this.zoom+=0.1;
            },
            zoomOut(){
                let tempzoom = this.zoom - 0.1;
                if(tempzoom <= 0.1) return
                this.zoom -= 0.1;
            },
            center(){
                this.translateX = this.translateY = 0;
            }
        }
    }
</script>