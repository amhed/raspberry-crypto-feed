const {
  LedMatrix, LedMatrixInstance, Font, LayoutUtils, HorizontalAlignment, VerticalAlignment 
} = require('rpi-led-matrix');
const { matrixOptions, runtimeOptions } = require('./_config');

//TODO: Move to other screen
const Colors = {
  white: 0xffffff,
  black: 0x000000,
  red: 0xFF0000,
  green: 0x00FF00,
  blue: 0x0000FF,
  orange: 0xffa500,
  magenta: 0xFF00FF,
  cyan: 0x00FFFF,
  yellow: 0xFFFF00,
}

const wait = (t) => new Promise(ok => setTimeout(ok, t));

(async () => {
  const matrix = new LedMatrix(matrixOptions, runtimeOptions);

  matrix
  .clear()
  .brightness(40)
  .bgColor(Colors.black)
  .fill()

  const font = new Font('helvR12', `${process.cwd()}/fonts/4x6.bdf`);
  matrix
    .font(font)
    .fgColor(Colors.orange)
    .drawText('BTC 14.50', 0, 0)
    .sync();

  await wait(5000);
})();