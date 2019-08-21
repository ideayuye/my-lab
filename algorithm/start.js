/**
 * 有N个台阶，如果一次可以走一步，也可以走两步，有几种走法
 *  */
var step = (n) => {
    var x1 = 1;
    var x2 = 1;
    var arr = [x1, x2];
    var i = 2;
    while(i <= n) {
        var temp = arr[1];
        arr[1] = arr[0] + arr[1];
        arr[0] = temp;
        i++;
    }
    return arr[1];
}

// 递归
var Max = (i) => {
    if (i <= 2) {
        return i;
    }
    return Max(i - 1) + Max(i - 2);
}

var num = 100;
// console.log(Max(num));
console.log(step(num));
