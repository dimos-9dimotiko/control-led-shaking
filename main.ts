input.onGesture(Gesture.TiltLeft, function () {
    XPos += -1
    if (XPos < 0) {
        XPos = 0
    }
    basic.clearScreen()
    led.plot(XPos, YPos)
})
input.onGesture(Gesture.ScreenUp, function () {
    YPos += -1
    if (YPos < 0) {
        YPos = 0
    }
    basic.clearScreen()
    led.plot(XPos, YPos)
})
input.onGesture(Gesture.ScreenDown, function () {
    YPos += 1
    if (YPos > 4) {
        YPos = 4
    }
    basic.clearScreen()
    led.plot(XPos, YPos)
})
input.onGesture(Gesture.TiltRight, function () {
    XPos += 1
    if (XPos > 4) {
        XPos = 4
    }
    basic.clearScreen()
    led.plot(XPos, YPos)
})
let YPos = 0
let XPos = 0
XPos = 2
YPos = 2
led.plot(XPos, YPos)
