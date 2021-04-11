from microbit import *

# WS2801 LED strip  : definition : microbit
# white             : GND        : GND
# blue              : MOSI       : P15
# green             : SCK        : P13
# red               : VCC        : Not Connected
#
# WS2801 needs 500 micro seconds between flushes

pins.spi_frequency(1000000)
pins.spi_format(8, 3)

led_count = 96

while True:

    color = (5, 5, 5) # RGB
    for i in range(led_count):
        pins.spi_write(color[0])
        pins.spi_write(color[1])
        pins.spi_write(color[2])
    control.wait_micros(500)
    basic.clear_screen()
    basic.pause(1000)

    color = (8, 8, 8) # RGB
    for i in range(led_count):
        pins.spi_write(color[0])
        pins.spi_write(color[1])
        pins.spi_write(color[2])
    control.wait_micros(500)
    basic.show_icon(IconNames.HEART)
    basic.pause(1000)
