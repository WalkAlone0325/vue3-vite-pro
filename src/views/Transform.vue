<template>
  <div ref="root">
    <div>
      <div
        v-for="(item, i) in list"
        :key="item.id"
        :ref="
          el => {
            if (el) divs[i] = el
          }
        "
      >
        {{ item }}
      </div>
      <div
        @mousemove="xCoordinate"
        :style="{ backgroundColor: `hsl(${x},80%,50%` }"
        class="movearea"
      >
        <h3>Move your mouse across the screen...</h3>
        <p>x: {{ x }}</p>
      </div>
    </div>

    <button ref="btn" class="button">按钮</button>
    <br />
    <br />
    <br />

    <div>
      <button @click="show = !show">Toggle</button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

    <div>
      <button @click="show = !show">Toggle show</button>

      <transition name="bounce">
        <p v-if="show">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at
          lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.
        </p>
      </transition>
    </div>

    <div>
      <input v-model="query" />
      <transition-group
        name="staggered-fade"
        tag="ul"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <li v-for="(item, index) in computedList" :key="item.msg" :data-index="index">
          {{ item.msg }}
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { computed, onBeforeUpdate, onMounted, reactive, ref } from 'vue'
import useShowTran from '../util/useShowTran'
import useColorTran from '../util/useColorTran'
import useRefElement from '../util/useRefElement'
import useStaggeredList from '../util/useStaggeredList'

export default {
  setup() {
    const { show } = useShowTran()
    const { x, xCoordinate } = useColorTran()
    const { root, list, divs, btn } = useRefElement()
    const { query, tranlist, computedList, beforeEnter, enter, leave } = useStaggeredList()

    return {
      show,
      x,
      xCoordinate,
      root,
      list,
      divs,
      btn,
      query,
      tranlist,
      computedList,
      beforeEnter,
      enter,
      leave,
    }
  },
}
</script>

<style>
.movearea {
  transition: 0.2s background-color ease;
}
.button {
  background: #1b8f5a;
  transition: background 0.25s ease-in;
  border-radius: 4px;
  display: inline-block;
  border: none;
  padding: 0.75rem 1rem;
  margin: 0;
  text-decoration: none;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.button:hover,
.button:focus {
  transition: background 0.3s ease-out;
  background: #3eaf7c;
}

.button:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s ease-out both;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse ease-in both;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
