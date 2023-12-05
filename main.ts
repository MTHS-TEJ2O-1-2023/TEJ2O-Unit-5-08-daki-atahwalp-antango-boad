0/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Nov 2023
 * This program motors, turn 90 degrees once within 10cm of an object
*/

let distanceFromObject: number = 0

// setup
basic.showIcon(IconNames.Happy)

while (true) {
  if (input.buttonIsPressed(Button.A) === true) {
    basic.clearScreen()
    while (true) {
        // find distance with sonar
        distanceFromObject = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        )
        basic.showNumber(distanceFromObject)
        basic.pause(500)
        basic.showIcon(IconNames.Happy)

        if (distanceFromObject < 10) {
            robotbit.StpCarMove(-10, 48)
            basic.pause(500)
            robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
            basic.pause(500)
            robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)
            basic.pause(500)
            robotbit.StpCarMove(10, 48)

        } else {

            robotbit.StpCarMove(10, 48)
        }
    }
}
}
