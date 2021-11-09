
module.exports = function ArraySortedGenerator(num) {
    const arr = [];
    for(let i=0; i < num; i++) {
        arr.push((arr[arr.length -1] || 0) + parseInt( Math.random() * 10 ));
    }
    return arr;
}
