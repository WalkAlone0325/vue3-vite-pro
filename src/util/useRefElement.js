import { ref, reactive, onMounted, onBeforeUpdate } from 'vue'

export default function useRefElement() {
  const root = ref(null)
  const btn = ref(null)
  const list = reactive([1, 2, 3])
  const divs = ref([])

  onMounted(() => {
    console.log(divs.value)
    console.log(root.value)
    console.log(btn.value)
  })

  // 确保在每次更新之前重置ref
  onBeforeUpdate(() => {
    divs.value = []
  })

  return {
    root,
    list,
    divs,
    btn,
  }
}
