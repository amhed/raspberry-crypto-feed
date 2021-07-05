const {
  LedMatrix, LedMatrixInstance, Font, LayoutUtils, HorizontalAlignment, VerticalAlignment
} = require('rpi-led-matrix');
const { matrixOptions, runtimeOptions } = require('./_config');
const { Colors } = require('./constants')
const { useStatusBar } = require('./components/StatusBar');
const { setTickerDisplay } = require('./components/TickerDisplay');
const { registerExitHandler, resetScreen, pauseFor } = require('./helpers');
const { getNextTickerPrice } = require('./cryptofeed');
const _ = require('lodash');

// Start "game loop" 
(async () => {
  const matrix = new LedMatrix(matrixOptions, runtimeOptions);
  registerExitHandler(matrix);
  
  resetScreen(matrix);
  const { setStatus } = useStatusBar(matrix);

  const nextTick = async () => {
    // get current price for ticker
    const {key, value, color: currencyColor} = await getNextTickerPrice();
    
    console.log(key, value, currencyColor);
    setTickerDisplay(matrix, key, value, currencyColor);

    // update status bar until next tick
    setStatus(0);
    let pct = 0;
    while (pct < 1) {
      setStatus(pct += 0.05);
      await pauseFor(200);
    }

    matrix
      .clear()
      .brightness(80)
      .bgColor(Colors.black)
      .fgColor(Colors.black)
      .fill()
      .sync();

    // start ticker again
    nextTick();
  }

  nextTick();
  await pauseFor(5000);
})();