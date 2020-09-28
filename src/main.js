import { createApp } from 'vue'
import router from './routes'
import { store } from './store'
import App from './App.vue'
import './index.css'

const app = createApp(App)
// const asa = component('button-counter', {
//   data() {
//     return {
//       count: 0,
//     }
//   },
//   template: `
//     <button @click="count++">
//       You clicked me {{count}} times
//     </button>
//   `,
// })

app.use(router).use(store).mount('#app')
