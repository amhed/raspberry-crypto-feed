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

matrix
  .clear()
  .brightness(40)
  .fgColor(0x0000FF)
  .fill()
  .fgColor(0xFFFF00)
  .drawCircle(
      matrix.width()/2, 
      matrix.height()/2,
      5
  )
  .drawRect(
      matrix.width() / 4,
      matrix.height() / 4,
      matrix.width() / 2,
      matrix.height() / 2
  )
  .fgColor({ r: 255, g: 0, b: 0 })
  .drawLine(0, 0, matrix.width(), matrix.height())
  .fgColor(0xFFFFFF)
  .drawLine(matrix.width()-1, 0, 0, matrix.height()-1)
  .sync();

setTimeout(() => {
  console.log('ended!');
}, 5000);
