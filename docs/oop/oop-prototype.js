function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.meow = function () {
        console.log('喵喵');
    }
}

var cat1 = new Cat('大毛', '白色');
var cat2 = new Cat('二毛', '黑色');
console.log(cat1.name);
console.log(cat1.color);

console.log(cat1.meow === cat2.meow);


function f() { }
console.log(typeof f.prototype);

function Animal(name) {
    this.name = name;
}

Animal.prototype.color = 'white';

var cat3 = new Animal('三毛');
var cat4 = new Animal('四毛');
console.log(cat3.color, cat4.color);
Animal.prototype.color = 'orange';
Animal.prototype.walk = function () {
    console.log(this.name + ' is walking');
};
console.log(cat3.color, cat4.color);

cat3.color = 'black';
console.log(cat3.color, cat4.color);


function P() {}
var p = new P();
console.log(p.constructor === P)

console.log(p.__proto__.constructor === P.prototype.constructor);