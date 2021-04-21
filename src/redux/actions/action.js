export const add = (num = 7) => {
    return {
        type: "INC",
        num: num
    }
}