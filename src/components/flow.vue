<template>
    <div 
    ref="content"
    class="flowchart__content" 
    @mousedown="e => {  isDragging = (e.which === 1) ? true: false; }" 
    @mousemove="mouseMove"
    >   
        <div v-if="tree && tree.length > 0 && !hideButtons" class="flowchart__menu__options">
            <button @click="center" class="pure-material-button-contained">
                <span :style="{cursor:'pointer',userSelect:'none'}">
                    <font-awesome-icon icon="fa-solid fa-arrows-to-eye" />
                </span>
            </button>
            <button @click="zoomIn" class="pure-material-button-contained" :style="{marginLeft:'5px'}">
                <span :style="{cursor:'pointer',userSelect:'none'}" >
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass-plus" />
                </span>
            </button>
            <button @click="zoomOut" class="pure-material-button-contained" :style="{marginLeft:'5px'}">
                <span :style="{cursor:'pointer',userSelect:'none'}" >
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass-minus" />
                </span>
            </button>
        </div>
         <div v-if="tree && tree.length > 0" class="flowchart__menu__options" :style="{top: '50px'}">
            <slot name="options"></slot>
        </div>
        <div class="flowchart__orgchart " @mousewheel="mouseWheel" :style="css">
            <ul >
                <node-tree v-for="(node, index) in tree" :hide-children-with-click="hideChildrenWithClick" @node-click="onMouseClick" :node="node" :key="index">

                    <template v-if="$scopedSlots.node || $slots.node" v-slot:node="{node,parent, level}" >
                        <slot name="node" :node="node" :parent="parent" :level="level" >
                            {{ node.name }}
                        </slot>
                    </template>

                </node-tree>
            </ul>
        </div>
    </div>
</template>
<script>
    import NodeTree from './node.vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    export default {
        name: "Flow",
        props:{
            value:{
                type:Array,
                default: () => ([])
            },
            activeContext:{
                type:Boolean,
                default:true
            },
            hideChildrenWithClick:{
                type:Boolean,
                default:false,
            },
            hideButtons:{
                type:Boolean,
                default:false,
            }
        },
        components:{
            NodeTree,
            'font-awesome-icon': FontAwesomeIcon
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
                tree: this.value,
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
        watch:{
            value:{
                handler(value){
                    this.tree = value;
                }
            }
        },
        methods:{
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