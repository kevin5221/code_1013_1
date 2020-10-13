let _0 = 0
basic.forever(function () {
    _0 = input.compassHeading()
    if (_0 < 22.5) {
        basic.showString("N")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (_0 < 67.5) {
        basic.showString("NE")
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            # . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (_0 < 112.5) {
        basic.showString("E")
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (_0 < 157.5) {
        basic.showString("ES")
        basic.showLeds(`
            # . . . .
            . # . . #
            . . # . #
            . . . # #
            . # # # #
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (_0 < 202.5) {
        basic.showString("S")
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (_0 < 247.5) {
        basic.showString("SW")
        basic.showLeds(`
            . . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # # .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (_0 < 292.5) {
        basic.showString("W")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (_0 < 337.5) {
        basic.showString("WN")
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
