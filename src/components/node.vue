<template>
    <li>
        <span @contextmenu="contextMenu" :style="css"> 
            {{ node.name }} 
        </span> 

        <!-- <template v-if="node.staffs && node.staffs.length > 0">
            <div v-for="(staff,index) of node.staffs"  class="staff-content" :key="index">
                <div class="line"></div>
                <div class="staff">{{ staff.description }}</div>
            </div>
        </template> -->

        <template v-if="node.children && node.children.length > 0">
            <ul >
                <NodeTree v-for="(child,index) in node.children" :parent="node" :node="child" :callback="callback" :key="index"></NodeTree>    
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
        callback: Function
    },
    created(){
        // this.css.backgroundColor = this.node.tipo_nivel_organizacional.color;
        // this.css.border = `1px solid ${this.node.tipo_nivel_organizacional.color}`; 
    },
    data(){
        return {
            css:{
                border: `1px solid #f80`,
                backgroundColor : '#666666',
                color: "#0000",
                opacity:1
            }
        }
    },
    methods:{
        mouseClick(){
            console.log(this.parent);
            console.log(this.node);
        },
        contextMenu(e){
            e.preventDefault();
            if(!Boolean(this.node.staff)){
                let context = document.querySelector('.contextmenu');
                context.classList.add('show');
                context.style.top = e.pageY + 'px';
                context.style.left = e.pageX + 'px';
                if(this.callback != undefined) this.callback(this.parent,this.node);
            }
        },
    }
}
</script>