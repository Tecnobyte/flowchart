# Flow Chart 2

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Flow Chart is a package, you will help to create beatiful orgcharts. 

## Installation

Flow Chart requires [Vue 2](https://v2.vuejs.org/) to run.

Install package.

```sh
npm i vnode-flowchart
```
Implement like plugin
```js
Vue.use(FlowChart);
```

Implement like component
```js
import { FlowChart } from 'vnode-flowchart';
export default {
    components:{FlowChart},
}
```



## Props

| Prop | Description | default |
| ------ | ------ | ------ |
| hideChildrenWithClick | This prop do when click in node hide clildren | false |

## Events

| Event | Description | params |
| ------ | ------ | ------ |
| node-click | Emit when click node | function(node, parent, level){} |

# Slots
| Slot | Description |
| ------ | ------ |
| node | You can change desing from node |

## Examples

![example3](https://github.com/Tecnobyte/flowchart/blob/master/img/Screenshot_3.png?raw=true)


```vue

<template>
    <flow-chart v-model="tree" />
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
}

</script>
```
## 
![example1](https://github.com/Tecnobyte/flowchart/blob/master/img/Screenshot_1.png?raw=true)
```vue
<template>
    <flow-chart v-model="tree">
        <template v-slot:node="{node, parent}">
            <div style="widht:100%;background-color:#e0726f;padding:5px" >{{ node.name }}</div>
            <div>
                <img style="float:left" width="50" height="50" src="https://www.fillmurray.com/200/200" alt="Imagen">
                {{ node.name }} {{ parent ? parent.name : '' }}
            </div>
        </template>
    </flow-chart>
</template>
```
##
![example2](https://github.com/Tecnobyte/flowchart/blob/master/img/Screenshot_2.png?raw=true)


## License

MIT
