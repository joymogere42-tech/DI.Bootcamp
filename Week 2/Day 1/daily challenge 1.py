import math

class Circle:
    def __init__(self, radius):
        if radius < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = radius

    # --- Alternative constructor ---
    @classmethod
    def from_diameter(cls, diameter):
        if diameter < 0:
            raise ValueError("Diameter cannot be negative")
        return cls(diameter / 2)

    # --- Properties ---
    @property
    def radius(self):
        return self._radius

    @property
    def diameter(self):
        return self._radius * 2

    # --- Area ---
    def area(self):
        return math.pi * self.radius ** 2

    # --- String representation ---
    def __repr__(self):
        return f"Circle(r={self.radius:.2f})"

    # --- Add circles ---
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(self.radius + other.radius)
        return NotImplemented

    # --- Comparisons ---
    def __eq__(self, other):
        return isinstance(other, Circle) and self.radius == other.radius

    def __lt__(self, other):
        return isinstance(other, Circle) and self.radius < other.radius

    def __gt__(self, other):
        return isinstance(other, Circle) and self.radius > 