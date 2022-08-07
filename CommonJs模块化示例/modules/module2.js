

/*
CommonJs模块输出的是值的拷贝，一旦输出了值。模块内部的变化就有些昂不到这个值
除非写成一个函数，get Fun(){return Fun}
 */
let counter = 3;
function inCounter(){
    counter++;
}
module.exports = {
    foo1:function (){
        console.log('module2');
    },
    get counter(){
        return counter;
    },
    inCounter:inCounter,
}