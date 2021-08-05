<template>
    <div>

        <template v-if="treeData != null">
            <div id="content" class="organigrama tree " @mousewheel="mouseWheel" :style="css">
                <div id="parent" :style="{backgroundColor:'#FFFFFF',height: '100%',display:'flex',justifyContent:'center'}">
                    <ul id="ul" v-if="treeData != null && Object.keys(treeData).length > 0">
                        <node-tree :node="treeData" :callback="callback"></node-tree>
                    </ul>
                </div>
            </div>

            <template>
                <div class="contextmenu">
                    <ul>
                        <li >ADD</li>
                        <li >EDIT</li>
                        <li >REMOVE</li>
                    </ul>
                </div>
            </template>
        </template>

        <template v-else>
            
        </template>
    </div>
</template>
<script>
    import NodeTree from './node.vue';
    // import domtoimage from 'dom-to-image';
    export default {
        name: "Flow",
        props:{
            treeData : Object,
            callback: Function
        },
        components:{
            NodeTree
        },
        computed:{
            css(){
                return{
                    transform: `perspective(600px) translate3d( ${this.translateX}px, ${this.translateY}px, ${this.translateZ}px)`,
                    position:'relative',
                    backgroundColor:'#FFFFFF'
                }
            },
        },
        updated(){

            if(this.calcular){
                let ul = document.getElementById('ul');
                this.calcularAncho(ul);
                let content = document.getElementById('content');
                content.style.width = `${this.width + (this.width * 0.34)}px`;
            }

            this.calcular = false;

            
            
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
            };
        },
        watch:{
            treeData(newVal, oldVal){
                this.width = 0;
                this.nodes = 0;
                let content = document.getElementById('content');
                this.calcular = true;
            }
        },
        mounted(){
            let tree = document.querySelector('.tree');
            tree.parentNode.addEventListener('DOMMouseScroll',this.mouseWheel);
            document.addEventListener('mousedown', e => {  this.isDragging = (e.which === 1) ? true: false; } );
            tree.parentNode.addEventListener('mousemove',this.mouseMove);
            tree.parentNode.addEventListener('touchmove',this.mouseMove);

            document.addEventListener('mouseup', e => this.isDragging = false);
            tree.parentNode.style.overflow = 'hidden';
            tree.parentNode.style.cursor = 'all-scroll';
            tree.parentNode.style.display = 'grid';

            document.addEventListener('click',(e) => {
                let context = document.querySelector('.contextmenu');
                if(context.classList.contains('show')){
                    context.classList.remove('show');
                }
            });
        },
        methods:{
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
                    if(this.translateZ >= -300 && this.translateZ <= 300){
                        if(this.translateZ == -300) return;
                        else this.translateZ -= this.stepZ 
                    }
                } else {
                    if(this.translateZ >= -300 && this.translateZ <= 300) {
                        if(this.translateZ == 300) return
                        else this.translateZ += this.stepZ 
                    } 
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
            zoomMax(){
                if(this.translateZ >= -300 && this.translateZ <= 300 ) {
                    if(this.translateZ == 300) return
                    this.translateZ = parseInt(this.translateZ) + this.stepZ;
                }
            },
            zoomMin(){
                if(this.translateZ >= -300 && this.translateZ <= 300){
                    if(this.translateZ == -300) return
                    this.translateZ = parseInt(this.translateZ) - this.stepZ;
                } 
            },

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