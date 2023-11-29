0/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Nov 2023
 * This program motors, turn 90 degrees once within 10cm of an object
*/

let distanceToObject: number = 0

// setup
basic.showIcon(IconNames.Happy)

while (true) {
  if (input.buttonIsPressed(Button.A) == true) {
    // finding distance with sonar
    basic.clearScreen()
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
    // if distance more than 10cm
    if (distanceToObject >= 10) {
        robotbit.StpCarMove(10, 48)
    }
    // if distance is less than 10cm
    if (distanceToObject < 10) {
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
        robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)
        basic.pause(500)
        robotbit.StpCarMove(10, 48)
    }
  }
}
