/*
一、回调函数
假定有2个函数f1、f2，后者等待前者的执行结果
*/

function f1(callback){
    setTimeout(function (){
        console.log('f1');
        callback();
    },5000)

}
function f2(){
    console.log('f2');
}

f1(f2);
var fn = new Function("arg1", "arg2", "return arg1 * arg2;");
console.log(fn(2,3));

function execute (someFunction, value) {
    someFunction(value);
}
execute(function(value){
    console.log(value);}, 'hi js.'
);