#!/usr/bin/python3
for o in range(97, 123):
    if o == 101 or o == 113:
        continue
    print("{:c}".format(o), end="")
