<template>
  <div>
    <!-- <button @click="updateUserLocation">按钮</button> -->
    <h1>{{ userLocation }}</h1>
    <h1>{{ userGeolocation.longitude }}</h1>
    <h1>{{ userGeolocation.latitude }}</h1>
    <div>{{ userGeolocation }}</div>
    <!-- <h1>{{ geolocation.longitude }}</h1> -->
    <!-- <h1>{{ geolocation.latitude }}</h1> -->
    <button @click="updateLocation">更新</button>
    <hr />
    <todo-button>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </todo-button>
  </div>
</template>

<script>
import { inject, onMounted } from 'vue'
import TodoButton from './TodoButton.vue'
export default {
  // inject: ['location', 'longitude', 'latitude'],
  inject: ['location', 'geolocation'],
  components: {
    TodoButton,
  },
  // mounted() {
  //   console.log(this.geolocation)
  // },
  setup() {
    const userLocation = inject('location', 'The Universe')
    const userGeolocation = inject('geolocation')
    const updateLocation = inject('updateLocation')

    onMounted(() => {})

    return { userLocation, userGeolocation, updateLocation }
  },
}
</script>

<style></style>
