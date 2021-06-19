const { Colors } = require('../constants');

const useStatusBar = (matrix) => {
  // initial draw
  let width = 0
  let height = 1

  const setStatus = (pct) => {    
    width = Math.round(matrix.width() * pct);
    matrix
      .fgColor(Colors.white)
      .drawRect(0, matrix.height()-2, width, height)
      .sync();
  }

  return { setStatus };
}

module.exports = { useStatusBar}