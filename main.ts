input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    _switch += 1
    basic.showNumber(Number_1 + number_2)
})
input.onButtonPressed(Button.AB, function () {
    OP += 1
    if (OP == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
    } else {
        if (OP == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(100)
        } else {
            if (OP == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(100)
                basic.clearScreen()
            } else {
            	
            }
        }
    }
})
let number_2 = 0
let Number_1 = 0
let OP = 0
OP = 0
Number_1 = 0
number_2 = 0
let _switch = 0
