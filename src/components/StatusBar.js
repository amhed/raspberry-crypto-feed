const { Colors } = require('../constants');

const useStatusBar = (matrix) => {
  // initial draw
  let width = 0
  let height = 1

  const setStatus = (pct) => {    
    width = Math.round(matrix.width() * pct);
    matrix
      .fgColor(Colors.white)
      .drawLine(0, matrix.height()-1, width, matrix.height()-1)
      .sync();
  }

  return { setStatus };
}

module.exports = { useStatusBar}