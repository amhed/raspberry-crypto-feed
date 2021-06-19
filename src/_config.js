const {
  GpioMapping,
  LedMatrix,
  LedMatrixUtils,
  PixelMapperType,
} = require('rpi-led-matrix');

const matrixOptions = {
  ...LedMatrix.defaultMatrixOptions(),
  rows: 16,
  cols: 32,
  chainLength: 1,
  hardwareMapping: GpioMapping.AdafruitHat,
  pixelMapperConfig: LedMatrixUtils.encodeMappers({ type: PixelMapperType.U })
  // pixelMapperConfig: LedMatrixUtils.encodeMappers(
  //   { type: PixelMapperType.Chainlink }
  // ),
  // pixelMapperConfig: LedMatrixUtils.encodeMappers({ type: PixelMapperType.U }),
};

const runtimeOptions = {
  ...LedMatrix.defaultRuntimeOptions(),
  gpioSlowdown: 1,
};

module.exports = {
  matrixOptions, runtimeOptions
}