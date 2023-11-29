#!/usr/bin/python3
def islower(c):
    # check for ASCII values for lowercase letters using ord()
    if ord(c) >= 97 and ord(c) <= 122:
        return True
    else:
        return False
