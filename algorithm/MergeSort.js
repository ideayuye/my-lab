
class MergeSort {
    constructor() {
    }

    mergeSort(arr, start, end) {
        if (start >= end) {
            return;
        }
        const mid = start + parseInt((end - start)/2);
        // console.log(start, end, mid);
        this.mergeSort(arr, start, mid);
        this.mergeSort(arr, mid + 1, end);
        return this.merge(arr, start, mid, end);
    }

    merge(arr, start, mid, end) {
        let left = arr.slice(start, mid);
        let right = arr.slice(mid, end + 1);
        // console.log('left', left, 'right', right);
        for(let i = start, l=0, r=0; i < end; i++) {
            if (left[l] < right[r]) {
                arr[i] = left[l];
                l++;
            } else {
                arr[i] = right[r];
                r++;
            }
        }
        return arr;
    }
}

const m = new MergeSort();

const arr = [3, 6, 9, 2, 3, 5, 34];
// console.log(m.merge(arr, 0, 3, 6));
console.log('result', m.mergeSort(arr, 0, arr.length - 1));
