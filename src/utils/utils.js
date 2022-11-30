export const getRandomInt = (min = 0, max = 1) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * (max - min + 1) + min))
        }, 1000)
    })
}