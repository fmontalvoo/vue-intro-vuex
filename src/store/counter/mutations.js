export const add = (state) => {
    state.count += 1
}

export const substract = (state) => {
    state.count -= 1
}

export const addNumber = (state, value) => {
    state.count += value
}

export const substractNumber = (state, value) => {
    state.count -= value
}
