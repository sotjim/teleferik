input.onButtonPressed(Button.A, function () {
    wuKong.stopAllMotor()
})
let sonor = 0
let speed = 100
let fora = 180
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        . . # # .
        # # # # .
        # # # # .
        # . . . .
        `)
    sonor = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (sonor < 20 && sonor > 1) {
        speed = speed * -1
        fora = fora * -1
        wuKong.setMotorSpeed(wuKong.MotorList.M1, speed)
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S1, fora)
    }
})
