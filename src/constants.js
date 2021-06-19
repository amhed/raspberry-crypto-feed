const { Font } = require('rpi-led-matrix');

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

module.exports = {
  Colors,
  defaultFont: new Font('helvR12', `${process.cwd()}/fonts/4x6.bdf`)
}