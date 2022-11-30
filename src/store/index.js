import { createStore } from 'vuex'

export default createStore({
    state: {
        count: 0
    },
    mutations: {
        add(state) {
            state.count += 1
        },
        substract(state) {
            state.count -= 1
        },
        addNumber(state, value) {
            state.count += value
        },
        substractNumber(state, value) {
            state.count -= value
        },
    }
})