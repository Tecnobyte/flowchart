<template>
    <div>
        <template v-if="treeData != null">
            <div ref="tree" class="flowchart__orgchart " @mousewheel="mouseWheel" :style="css">
                <div :style="{backgroundColor:'#FFFFFF',height: '100%',display:'flex',justifyContent:'center'}">
                    <ul  v-if="treeData != null && Object.keys(treeData).length > 0">
                        <node-tree ref="parent" :node="treeData" :callback="callback" :context-id="contextId">

                            <template v-if="$scopedSlots.node || $slots.node" v-slot:node="{node,parent}" >
                                <slot name="node" :node="node" :parent="parent" >
                                    {{ node.name }}
                                </slot>
                            </template>

                        </node-tree>
                    </ul>
                </div>
            </div>

            <slot name="contextmenu">
                <div v-if="activeContext" :id="contextId" class="contextmenu">
                    <ul>
                        <li >ADD</li>
                        <li >EDIT</li>
                        <li >REMOVE</li>
                    </ul>
                </div>
            </slot>
        </template>
    </div>
</template>
<script>
    import EventBus from '../eventbus/EventBus';
    import NodeTree from './node.vue';
    // import domtoimage from 'dom-to-image';
    export default {
        name: "Flow",
        props:{
            treeData : Object,
            callback: Function,
            activeContext:{
                type:Boolean,
                default:true
            }
        },
        components:{
            NodeTree
        },
        created(){
            this.contextId = this.generateId;
            EventBus.$on('change-width',(width) => {
                this.width+=width;
            });
        },
        computed:{
            css(){
                return{
                    transform: `perspective(600px) translate3d( ${this.translateX}px, ${this.translateY}px, ${this.translateZ}px) scale(${this.zoom})`,
                    position:'relative',
                    backgroundColor:'#FFFFFF',
                    width:`${this.width}px`
                }
            },

            generateId(){ 
                let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'];
                let concat = '';

                for(let i = 0;i<= 10;i++){
                    let index = Math.floor(Math.random() * (letters.length -1) ) + 1;
                    let char = letters[index];
                    concat += char;
                }

                let randomNumber = Math.floor(Math.random() * 100000000) + 1;
                return `${concat}-${randomNumber}`; 
            }
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
            };
        },
        watch:{
            treeData(newVal, oldVal){
                this.width = 0;
                this.nodes = 0;
                this.$nextTick(() => this.calc());
            }
        },
        mounted(){
            let tree = this.$refs.tree;

            
            document.addEventListener('mousedown', e => {  this.isDragging = (e.which === 1) ? true: false; } );
            document.addEventListener('mousemove',this.mouseMove);
            document.addEventListener('touchmove',this.mouseMove);


            document.addEventListener('keydown',(e) => {
                if(e.shiftKey){
                    document.addEventListener('DOMMouseScroll',this.mouseWheel);
                }
            });

            document.addEventListener('keyup',(e) => document.removeEventListener('DOMMouseScroll',this.mouseWheel));

            document.addEventListener('mouseup', e => this.isDragging = false);
            tree.parentNode.style.overflow = 'hidden';
            tree.parentNode.style.cursor = 'all-scroll';
            tree.parentNode.style.display = 'grid';

            document.addEventListener('click',(e) => {
                let context = document.getElementById(`${this.contextId}`);
                if(!context) return;
                if(context.classList.contains('show')){
                    context.classList.remove('show');
                }
            });

            this.$nextTick(() => {
                console.log('hola mundo');
                this.calc();
            });
        },
        methods:{

            calc(){
                let ul = this.$refs.parent;
                // this.calcularAncho(ul);
                // let content = this.$refs.tree;
                // content.style.width = `${this.width + (this.width * 0.34)}px`;
            },
            calcularAncho(parent){
                let children = Array.from(parent.children).filter( li => li.localName == 'li');
                for(let child of children){
                    let ul =  Array.from(child.children).find( ul => ul.localName == 'ul');
                    if(ul != undefined){
                        let childs = Array.from( ul.children );
                        for(let ch of childs){
                            let l = Array.from(ch.children).find( ul => ul.localName == 'ul');
                            if(l != undefined){
                                let chs = Array.from(l.children);
                                if(chs.length > 0){
                                    for(let ci of chs){
                                        this.width += ci.offsetWidth;
                                    }    
                                }else{
                                    this.width += l.offsetWidth;
                                }
                            }else{
                                this.width += ch.offsetWidth;
                            }
                        }
                    }else{
                        this.width += child.offsetWidth;
                    }
                }
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
            }
            // imprimirOrganigrama(){
            //     let content = document.getElementById('parent');
            //     domtoimage.toJpeg(content, { quality: 0.95 })
            //     .then(function (dataUrl) {
            //         var link = document.createElement('a');
            //         link.download = 'organigrama.jpeg';
            //         link.href = dataUrl;
            //         link.click();
            //     });
            // }
        }
    }
</script>