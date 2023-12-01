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
      distanceToObject = sonar.ping(
          DigitalPin.P1,
          DigitalPin.P2,
          PingUnit.Centimeters
      )
      basic.showIcon(IconNames.Happy)
      // if distance is less than 10cm
      if (distanceToObject <= 10) 
        robotbit.StpCarTurn(90, 48, 125)
        robotbit.StpCarMove(10, 48)

      } else { 

        // if distance is more than 10cm
        (distanceToObject > 10) 
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
        robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)
        robotbit.StpCarMove(10, 48)
      }
 }
