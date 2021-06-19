const { 
  LedMatrix, 
  GpioMapping, 
  LedMatrixUtils,
  PixelMapperType,
  Font 
} = require('rpi-led-matrix');

const { matrixOptions, runtimeOptions } = require('../_config')

const matrix = new LedMatrix(
  matrixOptions,
  runtimeOptions
);

// Sample on scrolling text
for (let i = 0; i < 100; i++) {
  const lines = LayoutUtils.textToLines(
    font, matrix.width(), 'BTC 34,500'
  )

  LayoutUtils.linesToMappedGlyphs(
    lines, 
    font.height(), 
    matrix.width(), 
    matrix.height()
  )

  matrix
    .clear()
    .font(font)
    .fgColor(Colors.orange)
    .drawText('BTC 34,500', i*-1, 0)
    .fgColor(Colors.cyan)
    .drawText('ETH 1,780', 42 + (i*-1), 0)
    .sync();

  await wait(100);
}

// Static
const lines = LayoutUtils.textToLines(
  font, matrix.width(), 'BTC 34,500'
)

LayoutUtils.linesToMappedGlyphs(
  lines, 
  font.height(), 
  matrix.width(), 
  matrix.height(),
  HorizontalAlignment.Left,
  VerticalAlignment.Top
).map(glyph => {
  matrix
    .fgColor(Colors.orange)
    .drawText(glyph.char, glyph.x, glyph.y)
    .sync();
});