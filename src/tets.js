// //深拷贝
// function copyDeep(target) {
//   if (typeof target != "object") {
//     //基础类型
//     return target;
//   }
//   let obj = Array.isArray(target) ? [] : {};
//   for (let item in target) {
//     if (typeof target[item] == "object") {
//       obj[item] = copyDeep(target[item]);
//     } else {
//       obj[item] = target[item];
//     }
//   }
//   return obj;
// }
// let obj = {
//   a: { v: 1, m: 2 },
//   b: 44,
// };
// let vm = copyDeep(obj);
// // let vm=obj;
// console.log(vm);

// //trim
// function sameTrim(str){
//   let res=str.replace(/(^\s*)|((\s*$))/g,'')
//   console.log(res);
// }
// sameTrim('  vvnnv   ');
// //质数
// function sushu(num){
//   for(let i=2;i<num;i++){
//     if(num%2==0){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(sushu(8))

// 斐波那契数组

// function feibo(n){
//   if(n<=1){
//     return 1;
//   }
//   return feibo(n-1)+feibo(n-2);
// }
// console.log(feibo(5))

// function test() {
//   console.log("22");
// }
// test.name = "haha";
// console.log(test.name);

// function newCopy(constructor, arguments) {
//   if (typeof constructor != "function") {
//     throw "error";
//   }
//   let obj = {};
//   obj._proto_ = constructor.prototype;
//   let res = constructor.apply(obj, arguments);//绑定this且执行构造函数
//   return (typeof res == "object" && typeof res == "null") ||
//     typeof res == "function"
//     ? res
//     : obj;
// }

//实现一个类，其实例可以链式调用，他有一个sleep方法，可以sleep一段时间后在后续调用。
class person{
  constructor(age,name){
    this.name=name;
    this.age=age;

  };
  sayHi(){
    console.log('hi,你好！');
    return this;

  };
  sleep(){
    console.log('sleep');
    return this;
  }

}
let alan=new person(18,'alan');
alan.sayHi().sleep().sayHi()