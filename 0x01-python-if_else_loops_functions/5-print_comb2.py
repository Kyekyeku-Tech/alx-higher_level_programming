#!/usr/bin/python3
for digits in range(0, 100):
    if digits < 99:
        print("{:02d}, ".format(digits), end='')
    if digits == 99:
        print("{:d}".format(digits))
