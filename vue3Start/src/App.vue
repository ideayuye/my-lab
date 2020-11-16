<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="Vite" />
  <MyOne></MyOne>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyOne from './components/MyOne.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyOne
  }
}
</script>

