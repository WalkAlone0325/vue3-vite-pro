<template>
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>

  <!-- <h1>{{ location }}</h1> -->
  <!-- <h1>{{ longitude }}</h1> -->
  <!-- <h1>{{ latitude }}</h1> -->
</template>

<script>
import { onMounted } from 'vue'

export default {
  // inject: ['location', 'longitude', 'latitude'],
}
</script>
