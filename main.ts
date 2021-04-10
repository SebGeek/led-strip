//  WS2801 LED strip  : definition : microbit
//  white             : GND        : GND
//  blue              : MOSI       : P15
//  green             : SCK        : P13
//  red               : VCC        : Not Connected
basic.showIcon(IconNames.Heart)
pins.spiFrequency(1000000)
pins.spiFormat(8, 3)
while (true) {
    pins.spiWrite(0)
    //  red
    pins.spiWrite(0)
    //  green
    pins.spiWrite(150)
    //  blue
    //  WS2801 needs 500 micro seconds between flushes
    control.waitMicros(500)
}
