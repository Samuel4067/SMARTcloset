OLED.init(128, 64)
servos.P1.setRange(0, 90)
servos.P2.setRange(0, 90)
let isdoor_open = false
loops.everyInterval(2000, function () {
    OLED.writeStringNewLine("Weather:")
    OLED.writeStringNewLine("29°C")
    OLED.writeStringNewLine("1.School")
    OLED.writeStringNewLine("2.Sports")
    basic.pause(2000)
    OLED.clear()
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        if (isdoor_open == false) {
            isdoor_open = true
            servos.P1.setAngle(90)
        } else {
            isdoor_open = false
            servos.P1.setAngle(0)
        }
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        if (isdoor_open == false) {
            isdoor_open = true
            servos.P2.setAngle(90)
        } else {
            isdoor_open = false
            servos.P2.setAngle(0)
        }
    }
})
