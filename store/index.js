export const state = () => ({
  colours: {
    "colorDarkest": "rgba(1,0,35,1)",
    "colorDark": "red",
    "colorLight": "rgba(112,152,255,1)",
    "colorLightest": "rgba(50,124,220,1)",
    "text": "blue"
  },
  projectStyles: {
    "colorDarkest": "rgba(1,0,35,1)",
    "colorDark": "rgba(23,22,79,1)",
    "colorLight": "rgba(112,152,255,1)",
    "colorLightest": "rgba(50,124,220,1)",
    "text": "blue"
  },
  directory: ''
})
export const mutations = {
  setColours(state, colours) {
    state.projectStyles = colours
  },
  setDirectory(state, directory) {
    state.directory = directory
  }
}
