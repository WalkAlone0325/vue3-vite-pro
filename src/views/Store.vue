<template></template>

<script>
import { useReducer, iState } from '../store/useStore'

export default {
  setup(props) {
    const [state, dispatch] = useReducer(reducer, iState())
  },
}
</script>

<style>
</style>