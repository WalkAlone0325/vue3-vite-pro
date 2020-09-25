<template>
  <div class="todo-list">
    <div>
      <label>新增待办</label>
      <input type="text" v-model="state.todo" @keyup.enter="handleAddTodo" />
    </div>
    <div>
      <h3>待办列表（{{ todos.length }}）</h3>
    </div>
    <ul>
      <li
        v-for="item in todos"
        :key="item.id"
        @click="handleChangeStatus(item, true)"
      >
        {{ item.text }}
      </li>
    </ul>
    <div>
      <h3>已办列表（{{ dones.length }}）</h3>
    </div>
    <ul>
      <li
        v-for="item in dones"
        :key="item.id"
        @click="handleChangeStatus(item, false)"
      >
        <input type="checkbox" checked />
        <label>{{ item.text }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  setup(props, context) {
    const state = reactive({
      todolist: [
        {
          id: 1,
          done: false,
          text: '吃饭'
        },
        {
          id: 2,
          done: true,
          text: '睡觉'
        },
        {
          id: 3,
          done: false,
          text: '打豆豆'
        }
      ],
      todo: ''
    })

    // 使用计算属性生成待办列表
    const todos = computed(() => {
      return state.todolist.filter(item => !item.done)
    })

    // 使用计算属性生成已办列表
    const dones = computed(() => {
      return state.todolist.filter(item => item.done)
    })

    // 修改待办状态
    const handleChangeStatus = (item, status) => {
      item.done = status
    }

    // 新增待办
    const handleAddTodo = () => {
      if (!state.todo) {
        alert('请输入待办事项')
        return
      }
      state.todolist.push({
        text: state.todo,
        id: Date.now(),
        done: false
      })
      state.todo = ''
    }

    return { state, todos, dones, handleChangeStatus, handleAddTodo }
  }
}
</script>

<style scoped>
.todo-list {
  text-align: center;
}
.todo-list ul li {
  list-style: none;
}
</style>