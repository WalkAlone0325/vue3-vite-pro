<template>
  <div>animate</div>
  <div id="animated-number-demo">
    <input type="number" v-model.number="number" step="20" />
    <p>{{ animatedNumber }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref, watch, onMounted, toRefs } from 'vue'

export default {
  setup() {
    const state1 = reactive({
      number: 0,
      tweenedNumber: 0,
    })
    // const number = ref(0)
    // const tweenedNumber = ref(0)

    const animatedNumber = computed(() => state1.tweenedNumber.toFixed(0))

    const number = watch(newValue => {
      gsap.to(state1, { duration: 0.5, tweenedNumber: newValue })
    })
    // const { number, tweenedNumber, animatedNumber } = useAnimatedNumber()
    onMounted(() => {
      console.log(state1)
    })

    // return { number, tweenedNumber, animatedNumber }
    return { ...toRefs(state1), number, animatedNumber }
  },
  /* data() {
    return {
      number: 0,
      tweenedNumber: 0,
    }
  },
  mounted() {
    console.log(this.$data)
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0)
    },
  },
  watch: {
    number(newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue })
    },
  }, */
}
</script>

<style></style>
