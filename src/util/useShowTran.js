import { ref } from 'vue'

export default function useShowTran() {
  const show = ref(true)
  return {
    show,
  }
}
