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
        const preArr = result[i - 1]
        const nArr = new Array(i+1).fill(1);
        nArr.forEach((x, index) => {
            if (index !==0 && index !== nArr.length -1) {
                nArr[index] = preArr[index - 1] + preArr[index];
            }
        });
        result.push(nArr);
    }
    return result;
};

console.log(generate(5));
