input.onButtonPressed(Button.A, function () {
    startbit.setServo(startbit.startbit_servorange.range2, 1, 160, 500)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    startbit.setServo(startbit.startbit_servorange.range2, 1, 110, 50)
    basic.pause(500)
})
startbit.startbit_Init()
basic.pause(500)
startbit.setServo(startbit.startbit_servorange.range2, 1, 160, 500)
basic.pause(500)
