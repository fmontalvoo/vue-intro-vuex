import { createStore } from 'vuex'

import { getRandomInt } from '@/utils/utils'

export default createStore({
    state: {
        count: 0,
        isLoading: false,
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
    },
    actions: {
        async addRandom(context) {
            context.state.isLoading = true
            const rnd = await getRandomInt(-7, 7)
            context.state.isLoading = false
            context.commit('addNumber', rnd)
        }
    }
})