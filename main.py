from microbit import *

# WS2801 LED strip  : definition : microbit
# white             : GND        : GND
# blue              : MOSI       : P15
# green             : SCK        : P13
# red               : VCC        : Not Connected

basic.show_icon(IconNames.HEART)

pins.spi_frequency(1000000)
pins.spi_format(8, 3)

led_count = 96
while True:

    color = (50, 0, 50) # RGB
    for i in range(led_count):
        pins.spi_write(color[0])
        pins.spi_write(color[1])
        pins.spi_write(color[2])

    # WS2801 needs 500 micro seconds between flushes
    control.wait_micros(500)
