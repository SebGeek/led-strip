let color: number[];
let i: number;
//  WS2801 LED strip  : definition : microbit
//  white             : GND        : GND
//  blue              : MOSI       : P15
//  green             : SCK        : P13
//  red               : VCC        : Not Connected
// 
//  WS2801 needs 500 micro seconds between flushes
pins.spiFrequency(1000000)
pins.spiFormat(8, 3)
let led_count = 96
while (true) {
    color = [5, 5, 5]
    //  RGB
    for (i = 0; i < led_count; i++) {
        pins.spiWrite(color[0])
        pins.spiWrite(color[1])
        pins.spiWrite(color[2])
    }
    control.waitMicros(500)
    basic.clearScreen()
    basic.pause(1000)
    color = [8, 8, 8]
    //  RGB
    for (i = 0; i < led_count; i++) {
        pins.spiWrite(color[0])
        pins.spiWrite(color[1])
        pins.spiWrite(color[2])
    }
    control.waitMicros(500)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
}
