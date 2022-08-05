var Vehicle = function (price) {
    this.price = price;
}

var v = new Vehicle(1000);
v.price
var v1 = Vehicle(2000)

console.log(typeof v1);
console.log(price === window.price);


function Fubar(foo, bar) {
    if (!(this instanceof Fubar)) {
        return new Fubar(foo, bar);
    }
    this._foo = foo;
    this._bar = bar;
}

console.log(Fubar(1, 2)._foo)
console.log(new Fubar(1, 2)._foo)

function getMsg() {
    if (!new.target) {
        throw new Error('未使用 new 命令调用会引发 this 指向全局');
    }
    return 'this is a message';
}
var msg = new getMsg();
//console.log(getMsg());
console.log(['a', 'b'].shift())
function Person(name, age) {

    this.name = name;
    this.age = age;
}
/**
 * new 命令简化流程示例
 * @param {*} constructor 构造函数
 * @param {*} params 参数
 * @returns  instance
 */
function _new(/* 构造函数 */ constructor,/**/params) {
    // 将 arguments 对象转为数组
    var args = [].slice.call(arguments);
    // 取出构造函数
    var constructor = args.shift();
    // 创建一个空对象，继承构造函数的 prototype 属性
    var context = Object.create(constructor.prototype);
    // 执行构造函数
    var result = constructor.apply(context, args);
    // 如果返回结果是对象，就直接返回，否则返回 context 对象
    return (typeof result === 'object' && result != null) ? result : context;

}

var actor = _new(Person, '张三', 28);



// this 关键字
function describe(){
    return '姓名：'+ this.name;
}
var A = {
    name: '张三',
    describe:describe,
    /* describe: function () {
        return '姓名：' + this.name;
    } */
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


//(false || obj.foo)();

//(1 , obj.foo)();