const { 
    LedMatrix, 
    GpioMapping, 
    LedMatrixUtils,
    PixelMapperType,
    Font 
} = require('rpi-led-matrix');

const matrix = new LedMatrix(
    {
        ...LedMatrix.defaultMatrixOptions(),
        rows: 16,
        cols: 32,
        chainLength: 1,
        hardwareMapping: GpioMapping.AdafruitHat,
        pixelMapperConfig: LedMatrixUtils.encodeMappers({type: PixelMapperType.U})
    },
    {
        ...LedMatrix.defaultRuntimeOptions(),
        gpioSlowdown: 1
    }
);

matrix
    .clear()
    .brightness(10)
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
