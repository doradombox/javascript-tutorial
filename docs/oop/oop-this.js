/* 

// this 关键字
function describe(){
    return '姓名：'+ this.name;
}
var A = {
    name: '张三',
    describe:describe,
    describe: function () {
        return '姓名：' + this.name;
    } 
};

 var B = {
    name: '李四',
    describe:describe
  };


console.log(A.describe.prototype === describe.prototype);
console.log(B.describe());
console.log(A.describe());

var obj = {
    foo: function(){
        console.log(this);
    }
}; 

//(obj.foo = obj.foo)();
 (obj.foo = function(){
    console.log(this);
})(); 
 */
//(false || obj.foo)();

//(1 , obj.foo)();

//#region 避免数组处理方法中的 this 

// 错误写法
/* var o = {
    v:'hello',
    p:['a1','a2'],
    f:function(){
        var that = this;  
        方式一：使用变量固定 this
        this.p.forEach(function (item){
            console.log(that.v + '' + item);
        }); 

        // 方式二：将 this 当作 forEach 方法的第二个参数，
        this.p.forEach(function(item){
            // 固定它的运行环境
            console.log(this.v + '' + item);
        },this)
    }
};

o.f(); */
//#endregion 


//#region 避免回调函数中的 this

/* var o = new Object();
o.f = function () {
    console.log(this === o);
}

// jQuery 的写法
$(document).ready(function () {
    $('#button').on('click', o.f);
}); */

//#endregion

//#region Function.prototype.call()
/* var obj = {};

var f = function () {
    return this;
} */
/* 
console.log(f() === window);
console.log(f.call(obj) === obj); */

/* var n = 123;
var obj1 = { n: 456 };

function a(){
    console.log(this.n);
}

a.call();
a.call(null);
a.call(undefined);
a.call(window);
a.call(obj1); */

/* var f = function () {
    return this;
};

console.log(f.call(5))

var f1 = function add(a, b) {
    console.log(a + b);
    return a + b;
}

f1.call(this, 1, 2); */

// call 方法调用对象的原生方法
var obj2 = {};
console.log(obj2.hasOwnProperty('toString'));

obj2.hasOwnProperty = function () {
    return true;
}

console.log(obj2.hasOwnProperty('toString'));
Object.prototype.hasOwnProperty.call(obj2, 'toString')

//#endregion

//#region Function.prototype.apply() 

function f(x, y) {
    console.log(x + y);
}

f.call(null, 1, 1) // 2
f.apply(null, [1, 1]) // 2

var arr1 = [10, 2, 4, 15, 9];

console.log(Math.max(arr1));
console.log(Math.max.apply(window, arr1));

var array1 = new Array();
console.log(array1[0], typeof array1, array1.length)
//#endregion

//#region Function.prototype.bind()
var d = new Date();
console.log(d.getTime());

//var print = d.getTime;
var print = d.getTime.bind(d);
print();

var counter = {
    count: 0,
    inc: function () {
        'use strict';
        this.count++;
        console.log(this.count);
        $('ol').append(`<li>${this.count}</li>`)
    }
};

var hundred = {
    count: 100
}

var func = counter.inc.bind(hundred);

$(document).ready(function () {
    $('#button1').on('click', func);
});

var add = function (x, y) {
    return x * this.m + y * this.n;
}

var param = {
    m: 2,
    n: 3
}
/*绑定add方法到 param 对象，并且传递了 add方法的参数,
这里是 x=2，y=3。也可以在调用新方法 newAdd 的时候再传递参数
var newAdd = add.bind(param,x=3);
newAdd(y=4);
*/
var newAdd = add.bind(param);
console.log(typeof add.bind());
console.log(newAdd(2, 3));//x=2,y=3

window.onload = function () {
    document.getElementById('button1').addEventListener('click', showMsg);

    function showMsg() {
        console.log('被点击');
        document.getElementById('button1').removeEventListener('click', showMsg);
        console.log('被移除click');
    }
}

function callIt(callback) {
    callback();
}

callIt(counter.inc.bind(counter));
console.log(counter.count);



var obj3 = {
    name: '张三',
    times: [1, 2, 3],
    /* print: function () {
      this.times.forEach(function (n) {
        debugger
        console.log(this.name);
      });
    } */
  };

  obj3.print = function(){
    this.times.forEach(function(n){
        console.log(n);
        console.log(this.name);
    }.bind(this));
  }
  
  obj3.print();





//#endregion