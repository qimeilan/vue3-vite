// index.js
const { effect, reactive } = require('@vue/reactivity');
// reactive 定义响应式数据，也就是用proxy 设置 get、set handle
const obj = reactive({ num: 1 });

// effect 定义副作用函数
effect(() => {
  console.log(obj.num);
});

// 修改num， trigger 触发响应，执行 effect
setInterval(() => {
  ++obj.num;
}, 1000);
