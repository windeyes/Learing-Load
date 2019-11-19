let string = 'ssjdfjiejisessddd';
//设立一个对象
let obj = {};
//将字符串转化为数组
let arr = string.split('');
// 遍历数组赋值对象
arr.forEach(function(e){
    // 将字符转化为对象的一个属性并用数字作为属性的值
    obj[e];
    // 记录字符出现的次数
    obj[e] = obj[e] == null? 1: obj[e]+ 1;
});
// 将obj中出现的所有字母输出其次数
for(let key in obj){
   console.log(key,obj[key])
}