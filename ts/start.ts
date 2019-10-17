function greeter(person) {
    return "Hello, " + person;
}

function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called", target, propertyKey);
    }
}

class C {
    @f()
    method() {

    }
}

@classDecorator
@sealed
class Greeter {

    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello," + this.greeting;
    }
}

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

console.log(new Greeter('world'));
