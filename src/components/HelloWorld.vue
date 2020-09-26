<template>
  <h3>Vite is the future of Frontend Development.</h3>
  <small>Thanks to Evan You</small>
  <br />
  <button @click="darkThemeSwitch">switch</button>
</template>

<script>
import themeChanger from '../util/theme.js'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      themeChanger: null
    }
  },
  methods: {
    darkThemeSwitch() {
      this.themeChanger._darkThemeSwitch()
    }
  },
  created() {
    this.themeChanger = new themeChanger()
  },
}
</script>
