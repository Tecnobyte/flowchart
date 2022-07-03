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
Vue.use(FlowChart);
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
[dill]: <https://github.com/joemccann/dillinger>
[git-repo-url]: <https://github.com/joemccann/dillinger.git>


## License

MIT
