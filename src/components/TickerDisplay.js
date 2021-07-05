const { LayoutUtils, HorizontalAlignment, VerticalAlignment } = require('rpi-led-matrix');
const { defaultFont } = require('../constants');
const { BigNumber } = require('bignumber.js');

const setTickerDisplay = (matrix, ticker, price, color) => {
  const formattedPrice = new BigNumber(price).toFormat(price > 1000 ? 0 : 2);
  let lines = LayoutUtils.textToLines(
    defaultFont, matrix.width(), `${ticker} ${formattedPrice}`
  )
  if (lines.length === 1) {
    const first = LayoutUtils.textToLines(defaultFont, matrix.width(), ticker);
    const second = LayoutUtils.textToLines(defaultFont, matrix.width(), formattedPrice);
    lines = [...first, ...second]
  }

  matrix.clear();
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
      .fgColor(color)
      .drawText(glyph.char, glyph.x + 2, glyph.y + 2)
      .sync();
  });
}

module.exports = { setTickerDisplay };