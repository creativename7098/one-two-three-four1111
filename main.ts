function armUp () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
function backward () {
    wuKong.setAllMotor(-20, -20)
}
function armDown () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function forward () {
    wuKong.setAllMotor(20, 20)
}
joystickbit.initJoystickBit()
radio.setGroup(3)
basic.showIcon(IconNames.Silly)
basic.forever(function () {
	
})
