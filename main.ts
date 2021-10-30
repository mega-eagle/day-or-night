let lightLevel = 0
basic.showString("Hi!")
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    lightLevel = input.lightLevel()
    if (input.lightLevel() <= 127) {
        basic.showLeds(`
            . # # # .
            # # # . .
            # # . . .
            # # # . .
            . # # # .
            `)
    } else if (input.lightLevel() >= 128) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
    	
    }
})
