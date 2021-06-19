const { LayoutUtils, HorizontalAlignment, VerticalAlignment } = require('rpi-led-matrix');
const { Colors, defaultFont } = require('../constants');
const { BigNumber } = require('bignumber.js');

const setTickerDisplay = (matrix, ticker, price) => {
  const lines = LayoutUtils.textToLines(
    defaultFont, matrix.width(), `${ticker} ${new BigNumber(price).toFormat(0)}`
  )

  LayoutUtils.linesToMappedGlyphs(
    lines,
    defaultFont.height(),
    matrix.width(),
    matrix.height(),
    HorizontalAlignment.Left,
    VerticalAlignment.Top
  ).map(glyph => {
    matrix
      .font(defaultFont)
      .fgColor(Colors.orange)
      .drawText(glyph.char, glyph.x + 2, glyph.y + 2)
      .sync();
  });
}

module.exports = { setTickerDisplay };