const ArrayGenerator = require('./ArrayGenerator');

class MergeSort {
    constructor() {
    }

    mergeSort(arr, start, end) {
        if (start >= end) {
            return;
        }
        // const mid = start + Math.floor((end - start)/2);
        const mid = Math.floor((end + start)/2);
        this.mergeSort(arr, start, mid);
        this.mergeSort(arr, mid + 1, end);
        arr = this.merge(arr, start, mid, end);
        return arr;
    }

    merge(arr, start, mid, end) {
        let left = arr.slice(start, mid);
        let right = arr.slice(mid, end);
        console.log(start, mid, end);
        // console.log('left', left, 'right', right);
        // for(let i = start, l=0, r=0; i < (end - start + 1); i++) {
        //     if (left.length === 0) {
        //         arr[i] = right[r];
        //         r++;
        //         continue;
        //     }
        //     if (right.length === 0) {
        //         arr[i] = left[l];
        //         l++;
        //         continue;
        //     }
        //     if (left[l] < right[r]) {
        //         arr[i] = left[l];
        //         l++;
        //     } else {
        //         arr[i] = right[r];
        //         r++;
        //     }
        // }
        let i = -1;
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
        
        // arrRes = arrRes.concat(left, right);
        console.log('merged', arr);
        return arr;
    }
}

const m = new MergeSort();

const arr = [3, 6, 9, 2, 3, 5, 34];
// const t1 = ArrayGenerator(8);
const t1 = [62, 15, 74, 87, 19, 36, 48, 76];

// console.log(m.merge(t1, 0, 3, ));
console.log(t1.slice(0));
console.log('result', m.mergeSort(t1, 0, t1.length));

console.log('hold on');
