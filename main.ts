/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali Elouasbi
 * Created on: Oct 2024
 * This program ...
*/

// set up
radio.setGroup(60)
basic.showIcon(IconNames.Happy)

// sending
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Triangle)
    radio.sendString("Hello, World!")
    basic.showIcon(IconNames.Happy)
})


// reciving
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})

// ending
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// if too close
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    let objectDistance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    if (objectDistance > 10) {
        basic.showString("you're too close")
    }else
        basic.showString("Perfect")
})
