import { reactive } from 'vue'

export const useReducer = (reducer, iState) => {
  const state = reactive(iState)
  const dispatch = action => {
    reducer(state, action)
  }
  return [state, dispatch]
}

export const iState = () => ({
  counter: 0,
})

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREASE:
      state.counter++
      break

    default:
      break
  }
}
