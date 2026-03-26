class Temperature:
    def __init__(self, value):
        self.value = value

    def __repr__(self):
        return f"{self.value} degrees"


class Celsius(Temperature):
    def to_fahrenheit(self):
        return Fahrenheit((self.value * 9/5) + 32)

    def to_kelvin(self):
        return Kelvin(self.value + 273.15)


class Fahrenheit(Temperature):
    def to_celsius(self):
        return Celsius((self.value - 32) * 5/9)

    def to_kelvin(self):
        return Kelvin((self.value - 32) * 5/9 + 273.15)


class Kelvin(Temperature):
    def to_celsius(self):
        return Celsius(self.value - 273.15)

    def to_fahrenheit(self):
        return Fahrenheit((self.value - 273.15) * 9/5 + 32)


# Test
c = Celsius(25)
print(c.to_fahrenheit())  # 77.0 degrees
print(c.to_kelvin())      # 298.15 degrees

f = Fahrenheit(32)
print(f.to_celsius())     # 0.0 degrees

k = Kelvin(300)
print(k.to_celsius())     # 26.85 degrees