from microbit import *

# WS2801 LED strip  : definition : microbit
# white             : GND        : GND
# blue              : MOSI       : P15
# green             : SCK        : P13
# red               : VCC        : Not Connected

basic.show_icon(IconNames.HEART)

pins.spi_frequency(1000000)
pins.spi_format(8, 3)

while True:

    pins.spi_write(0)   # red
    pins.spi_write(0)   # green
    pins.spi_write(150) # blue

    # WS2801 needs 500 micro seconds between flushes
    control.wait_micros(500)
