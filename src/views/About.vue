<template>
  <keep-alive>
    <div>
      About
      <h3>{{ state.count }}</h3>
      <button @click="handelAdd">Add</button>
      <button @click="handelMinus">Minus</button>
    </div>
  </keep-alive>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const { state, commit, dispatch } = useStore()
    const handelAdd = () => {
      commit('increment', 5)
    }
    const handelMinus = () => {
      commit('decrement')
    }
    onMounted(() => {
      console.log('onMounted')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
    return {
      state,
      handelAdd,
      handelMinus,
    }
  },
}
</script>

<style>
</style>
