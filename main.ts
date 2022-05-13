radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -60) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
radio.setTransmitPower(3)
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
})
