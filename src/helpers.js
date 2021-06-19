const { Colors } = require('./constants')

const pauseFor = (t) => new Promise(ok => setTimeout(ok, t));

const resetScreen = (matrix) => {
  matrix
    .clear()
    .brightness(40)
    .bgColor(Colors.black)
    .fill()
    .sync();
}

module.exports = {
  pauseFor,
  resetScreen
}