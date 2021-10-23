const getRandomColor = () => {
    const COLOR_LIST = ['deeppink', 'green', 'red', 'yellow', 'blue', 'black']
    const randomIndex = Math.trunc(Math.random() * 6)
    return COLOR_LIST[randomIndex];
}
export default getRandomColor;