<template>
    <div>count:{{readersNumber}}</div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
    name: 'MyOne',
    setup() {
        const readersNumber = ref(0);

        return {
            readersNumber
        };
    },
    mounted() {
        this.readersNumber ++;
    }
}
</script>
