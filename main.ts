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
      basic.showString('cm')
      basic.pause(500)
      basic.showIcon(IconNames.Happy)

      if (distanceFromObject < 10) {
        robotbit.StpCarTurn(90, 48, 125)
        basic.pause(500)
        robotbit.StpCarMove(10, 48)

      } else {

        robotbit.StpCarMove(10, 48)
      }
    }
  }
}
