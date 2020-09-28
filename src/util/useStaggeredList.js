import { ref, reactive, computed } from 'vue'

export default function useStaggeredList() {
  const query = ref('')
  const tranlist = reactive([
    { msg: 'Bruce Lee' },
    { msg: 'Jackie Chan' },
    { msg: 'Chuck Norris' },
    { msg: 'Jet Li' },
    { msg: 'Kung Fury' },
  ])

  const computedList = computed(() => {
    return tranlist.filter(item => {
      return item.msg.toLowerCase().indexOf(query.value.toLowerCase()) !== -1
    })
  })

  const beforeEnter = el => {
    el.style.opacity = 0
    el.style.height = 0
  }
  const enter = (el, done) => {
    gsap.to(el, {
      opacity: 1,
      height: '1.6em',
      delay: el.dataset.index * 0.15,
      onComplete: done,
    })
  }
  const leave = (el, done) => {
    gsap.to(el, {
      opacity: 0,
      height: 0,
      delay: el.dataset.index * 0.15,
      onComplete: done,
    })
  }

  return {
    query,
    tranlist,
    computedList,
    beforeEnter,
    enter,
    leave,
  }
}
