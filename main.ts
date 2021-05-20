radio.onReceivedNumber(function (receivedNumber) {
    ord = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (ord))
})
let ord = 0
radio.setGroup(89)
radio.setTransmitPower(7)
ord = 0
basic.forever(function () {
    basic.showString("Send 12")
    if (ord == 0) {
        radio.sendString("Under vasken")
    } else {
        radio.sendString("LUNSJ")
    }
})
