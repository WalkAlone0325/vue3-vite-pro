import { computed, ref, watch } from 'vue'

export default function useAnimatedNumber() {
  const number = ref(0)
  const tweenedNumber = ref(0)

  const animatedNumber = computed(() => tweenedNumber.value.toFixed(0))

  const number = watch(newValue => {
    gsap.to({ number, tweenedNumber }, { duration: 0.5, tweenedNumber: newValue })
  })

  return {
    number,
    tweenedNumber,
    animatedNumber,
  }
}
