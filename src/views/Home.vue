<template>
  <div>Home</div>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {

    onMounted(() => {
      console.log('onMounted')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
  }
}
</script>
