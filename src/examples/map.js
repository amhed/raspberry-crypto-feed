const {  LedMatrix } = require('rpi-led-matrix');

const { matrixOptions, runtimeOptions } = require('../_config');

const nextColor = (f, t) => {
  const brightness = 0xFF & Math.max(0, 255 * Math.sin(f * t / 1000));

  return (brightness << 16) | (brightness << 8) | brightness;
};

(async () => {
  try {
    const matrix = new LedMatrix(matrixOptions, runtimeOptions);
    const freqs = [...Array(matrix.width() * matrix.height()).keys()].map(i => i / 30);

    matrix.afterSync((mat, dt, t) =>
      matrix.map(([x, y, i]) => nextColor(freqs[i], t))
    );

    matrix.sync();
  }
  catch (error) {
    console.error(error);
  }
})();
