let color: number[];
//  WS2801 LED strip  : definition : microbit
//  white             : GND        : GND
//  blue              : MOSI       : P15
//  green             : SCK        : P13
//  red               : VCC        : Not Connected
basic.showIcon(IconNames.Heart)
pins.spiFrequency(1000000)
pins.spiFormat(8, 3)
let led_count = 96
while (true) {
    color = [50, 0, 50]
    //  RGB
    for (let i = 0; i < led_count; i++) {
        pins.spiWrite(color[0])
        pins.spiWrite(color[1])
        pins.spiWrite(color[2])
    }
    //  WS2801 needs 500 micro seconds between flushes
    control.waitMicros(500)
}
