<template>
  <div>Home</div>
  <button @click="updateLocation">按钮</button>
  <my-slot></my-slot>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import { onMounted, onUnmounted, onUpdated, provide, reactive, ref } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import MySlot from '../components/Slot.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MySlot,
  },
  // provide: {
  //   location: 'North Pole',
  //   geolocation: {
  //     longitude: 90,
  //     latitude: 135,
  //   },
  // },
  setup() {
    onMounted(() => {
      console.log('里面的onMounted')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
    const location = ref('North Pole')
    const geolocation = reactive({
      longitude: 90,
      latitude: 135,
    })
    let num = 0
    const updateLocation = () => {
      location.value = 'South Pole' + num++
      console.log('loaction 更新了')
    }
    provide('location', location)
    provide('geolocation', geolocation)
    provide('updateLocation', updateLocation)
    return {
      location,
      // updateLocation,
    }
  },
}
</script>
