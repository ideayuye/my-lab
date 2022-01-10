/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    const result = [];
    for(let i = 0; i< numRows; i++) {
        if (i < 2) {
            const arr = new Array(i+1).fill(1);
            result.push(arr);
            continue;
        }
        const nArr = [1];
        const preArr = result[i - 1]
        preArr.forEach((x, index) => {
            if (preArr.length > (index + 1) && index + 1 > 0) {
                nArr.push(x + preArr[index + 1]);
            }
        });
        nArr.push(1);
        result.push(nArr);
    }
    return result;
};

console.log(generate(5));
