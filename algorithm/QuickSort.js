const ArrayGenerator = require('./ArrayGenerator');
const ArraySortedGenerator =  require('./ArraySortedGenerator');

class QuickSort {
    constructor() {

    }

    sort(arr, l, r) {
        if (l >= r) {
            return;
        }
        const p = this.partition(arr, l, r);
        // console.log(p, l, r, 'xfa');
        this.sort(arr, l, p - 1);
        this.sort(arr, p + 1, r);
        return arr;
    }

    partition(arr, l, r) {
        const pNum = this.getRandomInt(l, r);
        this.swap(arr, l, pNum);
        const pVal = arr[l];
        let i = l, j = l;
        for(let k = l + 1 ; k <= r; k++) {
            // i 小于
            // j 大于
            if (pVal >= arr[k] ) {
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

    partition2Ways(arr, l, r) {
        const pNum = this.getRandomInt(l, r);
        this.swap(arr, l, pNum);
        const pVal = arr[l];
        let i = l + 1, j = r;
        while(i<=j) {
            i++;
            j--;
        }

        // p 和 i 交换
        this.swap(arr, l, i);

        // 返回p的index
        return i;
    }

    getRandomInt(min, max) {
        return min + Math.floor(Math.random() * Math.floor(max-min));
    }

    swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

// const t1 = ArrayGenerator(9);
const t1 = ArraySortedGenerator(15000000);
const m = new QuickSort();
// console.log('origin', t1.slice());

const tm1 = Date.now();
m.sort(t1, 0, t1.length - 1).slice();
const tm2 = Date.now();

console.log('hold on', (tm2-tm1)/1000);
