input.onGesture(Gesture.TiltLeft, function () {
    XPos += -1
    basic.clearScreen()
    led.plot(XPos, YPos)
    if (XPos < 0) {
        XPos = 0
        basic.clearScreen()
        led.plot(XPos, YPos)
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    YPos += -1
    basic.clearScreen()
    led.plot(XPos, YPos)
    if (YPos < 0) {
        YPos = 0
        basic.clearScreen()
        led.plot(XPos, YPos)
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    YPos += 1
    basic.clearScreen()
    led.plot(XPos, YPos)
    if (YPos > 4) {
        YPos = 4
        basic.clearScreen()
        led.plot(XPos, YPos)
    }
})
input.onButtonPressed(Button.B, function () {
    XPos += 1
    led.plot(XPos, YPos)
    if (XPos > 4) {
        XPos = 4
        basic.clearScreen()
        led.plot(XPos, YPos)
    }
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    XPos += 1
    basic.clearScreen()
    led.plot(XPos, YPos)
    if (XPos > 4) {
        XPos = 4
        basic.clearScreen()
        led.plot(XPos, YPos)
    }
})
let YPos = 0
let XPos = 0
XPos = 2
YPos = 4
led.plot(XPos, YPos)
