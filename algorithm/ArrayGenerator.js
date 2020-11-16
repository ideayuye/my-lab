

module.exports = function ArrayGenerator(num) {
    const arr = [];
    for(let i=0; i < num; i++) {
        arr.push(parseInt( Math.random() * 100 ));
    }
    return arr;
}
5