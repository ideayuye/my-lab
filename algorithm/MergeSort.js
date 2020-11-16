const ArrayGenerator = require('./ArrayGenerator');

class MergeSort {
    constructor() {
    }

    mergeSort(arr, start, end) {
        if (start >= end) {
            return;
        }
        const mid = start + Math.floor((end - start)/2);
        this.mergeSort(arr, start, mid);
        this.mergeSort(arr, mid + 1, end);
        this.merge(arr, start, mid, end);
        return arr;
    }

    merge(arr, start, mid, end) {
        let left = arr.slice(start, mid + 1);
        let right = arr.slice(mid + 1, end + 1);
        // console.log(start, end);
        console.log('left', left, 'right', right);
        let i = start - 1;
        while(left.length || right.length) {
            i++;
            if (left.length && !right.length) {
                arr[i] = left.shift();
                continue;
            }
            if (right.length && !left.length) {
                arr[i] = right.shift();
                continue;
            }
            if (left[0] <= right[0]) {
                arr[i] = left.shift();
            } else {
                arr[i] = right.shift();
            }
        }

        // console.log('merged', arr);
        return arr;
    }
}

const m = new MergeSort();

const arr = [3, 6, 9, 2, 3, 5, 34];
const t1 = ArrayGenerator(9);
// const t1 = [62, 15, 74, 87, 19, 36, 48, 76];

// console.log(m.merge(t1, 0, 3, ));
console.log(t1.slice(0));
console.log('result', m.mergeSort(t1, 0, t1.length - 1));

console.log('hold on');
