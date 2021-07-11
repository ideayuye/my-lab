
class Sqrt {

    
    data = [];
    blocks = [];
    N;
    B;
    Bn;

    constructor(nums) {
        this.N = nums.length;
        if (this.N === 0) {
            return;
        }

        this.B = parseInt(Math.sqrt(this.N));
        this.Bn = this.N / this.B + (this.N % this.B > 0 ? 1 : 0);

        this.data = nums.slice();

        for(let i = 0; i < this.N; i++) {
            let index = parseInt(i / this.B);
            if (this.blocks[index] === undefined) {
                this.blocks[index] = 0;
            }
            this.blocks[index] += nums[i];
        }
    }

    sumRange(x, y) {
        if(x < 0 || x >= this.N || y < 0 || y >= this.N || x > y) return 0;

        let bstart = parseInt(x / this.B), bend = parseInt(y / this.B);

        let res = 0;
        if (bstart === bend) {
            for(let i = x; i <= y; i++) res += this.data[i];
            return res;
        }

        for(let i = x; i < (bstart + 1) * this.B; i++ ) {
            res += this.data[i];
        }
        for(let b = bstart + 1; b < bend; b++) {
            res += this.blocks[b];
        }
        for (let i = bend * this.B; i <= y; i++) {
            res += this.data[i];
        }

        return res;
    }

    update(i, val) {
        if (i < 0 || this.i >= this.N) return;

        let index = i / this.B;
        this.blocks[index] -= this.data[i];
        this.blocks[index] += val;

        this.data[i] = val;
    }


}

let data = [1, 3, 5, 32, 2, 23, 5, 54, 33];
let sq = new Sqrt(data);

sq.update(0, 5);

console.log(sq.sumRange(0, 8));