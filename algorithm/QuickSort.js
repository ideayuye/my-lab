const ArrayGenerator = require('./ArrayGenerator');

class QuickSort {
    constructor() {

    }

    sort(arr, l, r) {
        if (l >= r) {
            return;
        }
        const p = this.partition(arr, l, r);
        console.log(p, l, r, 'xfa');
        this.sort(arr, l, p - 1);
        this.sort(arr, p + 1, r);
        return arr;
    }

    partition(arr, l, r) {
        const pVal = arr[l];
        let i = l, j = l;
        for(let k = l + 1 ; k <= r; k++) {
            // i 小于
            // j 大于
            if (pVal >= arr[k] ) {
                // do nothing
                this.swap(arr, i+1, k);
                i++;
                j++;
            }
            if (pVal < arr[k]) {
                j++;
            }
        }

        // p 和 i 交换
        this.swap(arr, l, i);

        // 返回p的index
        return i;
    }

    swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

const t1 = ArrayGenerator(9);
const m = new QuickSort();
console.log('origin', t1.slice());

console.log('result', m.sort(t1, 0, t1.length - 1).slice());

console.log('hold on');
