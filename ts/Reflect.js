
let s = {
    a: 1,
    hello: 'world'
}

s.say = (message) => {
    return "say:" + message;
}

console.log(Reflect.apply(s.say, this, ["aaa"]));

function func1(a, b, c) {
    this.sum = a + b + c;
}

const args = [1, 2, 3];
const object1 = new func1(...args);
const object2 = Reflect.construct(func1, args);

console.log(object1.sum);
console.log(object2.sum);
