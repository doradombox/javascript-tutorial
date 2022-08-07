let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

let uniq = require('uniq')
let loadsh = require('loadsh')


// module1.foo()
// module1.bar()
// module2()
// module3.foo()
// module3.bar()
//
// let arr = [1,11,2,2,2,5,5,5,3,4,6,6,9,7,8]
// console.log(uniq(arr));

console.log(module2.counter);
module2.inCounter();
console.log(module2.counter);

module2.foo1();