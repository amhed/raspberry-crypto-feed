const {
  LedMatrix, LedMatrixInstance, Font, LayoutUtils, HorizontalAlignment, VerticalAlignment
} = require('rpi-led-matrix');
const { matrixOptions, runtimeOptions } = require('./_config');
const { Colors, defaultFont } = require('./constants')
const { useStatusBar } = require('./components/StatusBar');
const { setTickerDisplay } = require('./components/TickerDisplay');
const { resetScreen, pauseFor } = require('./helpers');

// Start "game loop" 
(async () => {
  const matrix = new LedMatrix(matrixOptions, runtimeOptions);
  const { setStatus } = useStatusBar(matrix);

  // Reset the matrix on each start.
  // Helps with flickering during hot reload.
  resetScreen(matrix);

  const nextTick = async () => {
    // get current price for ticker
    setTickerDisplay(matrix, 'BTC', 34500);
    
    // update status bar until next update
    setStatus(0);
    let pct = 0;
    while (pct < 1) {
      setStatus(pct += 0.05);
      await pauseFor(200);
    }

    matrix
      .clear()
      .brightness(40)
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