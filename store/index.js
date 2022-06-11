export const state = () => ({
  colours: {
    primary: '#00bcd4',
  },
  projectStyles: {
    lol: '#00bcd4',
  }
})
export const mutations = {
  setColours(state, colours) {
    state.projectStyles = colours
  }
}
