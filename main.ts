0/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Nov 2023
 * This program motors, turn 90 degrees once within 10cm of an object
*/

// variables
let distanceFromObject: number = 0

// on start
basic.showIcon(IconNames.Happy)

// loop forever
while (true) {
  if (input.buttonIsPressed(Button.A) == true) {
  // finding distance from object
  distanceFromObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )
  basic.showIcon(IconNames.Happy)

  // if within 10cm of an object
  if (distanceFromObject <= 10)
      robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B2)
      robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B2)
      robotbit.StpCarMove(10, 48)
      robotbit.StpCarMove(-10, 48)

    // turning motor 180 degrees
    basic.showIcon(IconNames.Yes)
      robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
      robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B0)
      basic.showIcon(IconNames.Happy)
}
}
