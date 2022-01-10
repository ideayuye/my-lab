
function reactive(data) {
    return new Proxy(data, {
        get(target, key, receiver) {
            const res = Reflect.get(target, key, receiver);
            // 收集响应
            return res;
        },
        set(target, key, value, receiver) {
            const hadKey = hasOwn(target, key);
            const oldValue = target[key];
            const res = Reflect.set(target, key, value, receiver);
            // 触发响应
            if (!hadKey) {
                console.log('set value: new', key, value);
            } else if (value !== oldValue) {
                console.log('set value: set', key, value);
            }
            return res;
        }
    })
}

var ob = { a: '123', b: '546' };
var wm = {};
var pb = new Proxy(ob, { 
    get(data, key, receiver) {
        console.log(receiver);
        return data[key];
    }
 });
 pb.a;
