import { getRandomInt } from '@/utils/utils'

export const addRandom = async (context) => {
    context.state.isLoading = true
    const rnd = await getRandomInt(-7, 7)
    context.state.isLoading = false
    context.commit('addNumber', rnd)
}