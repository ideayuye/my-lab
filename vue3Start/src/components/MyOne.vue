<template>
    <div>
        <div>count:{{readersNumber}}</div>
        <button @click="test">test</button>
        <ul>
            <li v-for="(item, index) in arrReactive" :key="index">{{item.a}}</li>
        </ul>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
    name: 'MyOne',
    setup() {
        const readersNumber = ref(0);
        const arr = [{a:1}, {a:2}, {a: 3}];
        const arrReactive = reactive(arr);

        return {
            readersNumber,
            arrReactive
        };
    },
    mounted() {
        this.readersNumber ++;
    },
    methods: {
        test() {
            this.arrReactive[0].a = 'xfa';
        }
    }
}
</script>
