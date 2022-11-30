import { getRandomInt } from '@/utils/utils'

const counterState = {
    namespaced: true,
    state: () => ({
        count: 0,
        isLoading: false,
    }),
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
    },
    getters: {
        square(state) {
            const value = state.count
            return value * value
        }
    }
}

export default counterState