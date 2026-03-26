# ================================
# EXERCISE 1: TODAY + NEXT HOLIDAY
# ================================
from datetime import datetime
import holidays

def next_holiday():
    today = datetime.now()
    print("\n--- Exercise 1 ---")
    print("Today's date:", today.date())

    kenya_holidays = holidays.Kenya()

    for date, name in sorted(kenya_holidays.items()):
        if date > today.date():
            diff = date - today.date()
            print(f"The next holiday is {name} in {diff.days} days.")
            break


# ================================
# EXERCISE 2: AGE ON PLANETS
# ================================
def age_on_planets(seconds):
    print("\n--- Exercise 2 ---")

    earth_year = 31557600

    planets = {
        "Earth": 1,
        "Mercury": 0.2408467,
        "Venus": 0.61519726,
        "Mars": 1.8808158,
        "Jupiter": 11.862615,
        "Saturn": 29.447498,
        "Uranus": 84.016846,
        "Neptune": 164.79132
    }

    for planet, ratio in planets.items():
        age = seconds / earth_year / ratio
        print(f"{planet}: {age:.2f} years")


# ================================
# EXERCISE 3: REGEX NUMBERS
# ================================
import re

def return_numbers(string):
    print("\n--- Exercise 3 ---")
    numbers = re.findall(r'\d', string)
    result = ''.join(numbers)
    print("Extracted numbers:", result)
    return result


# ================================
# EXERCISE 4: VALIDATE NAME
# ================================
def validate_name():
    print("\n--- Exercise 4 ---")
    name = input("Enter your full name: ")

    pattern = r'^[A-Z][a-z]+ [A-Z][a-z]+$'

    if re.match(pattern, name):
        print("Valid name ✅")
    else:
        print("Invalid name ❌")


# ================================
# EXERCISE 5: PASSWORD GENERATOR
# ================================
import random
import string

def generate_password(length):
    lower = string.ascii_lowercase
    upper = string.ascii_uppercase
    digits = string.digits
    special = "!@#$%^&_"

    # Ensure at least one of each
    password = [
        random.choice(lower),
        random.choice(upper),
        random.choice(digits),
        random.choice(special)
    ]

    all_chars = lower + upper + digits + special

    for _ in range(length - 4):
        password.append(random.choice(all_chars))

    random.shuffle(password)

    return ''.join(password)


def is_valid(password):
    return (
        any(c.islower() for c in password) and
        any(c.isupper() for c in password) and
        any(c.isdigit() for c in password) and
        any(c in "!@#$%^&_" for c in password)
    )


def test_passwords():
    print("\nTesting passwords...")
    for _ in range(100):
        length = random.randint(6, 30)
        pwd = generate_password(length)

        assert len(pwd) == length
        assert is_valid(pwd)

    print("All tests passed ✅")


def password_program():
    print("\n--- Exercise 5 ---")

    while True:
        length = input("Enter password length (6-30): ")

        if length.isdigit() and 6 <= int(length) <= 30:
            length = int(length)
            break
        else:
            print("Invalid input, try again.")

    password = generate_password(length)

    print(f"Your password is: {password}")
    print("Keep it safe! 🔒")


# ================================
# RUN ALL EXERCISES
# ================================
if __name__ == "__main__":
    next_holiday()

    age_on_planets(1000000000)

    return_numbers('k5k3q2g5z6x9bn')

    validate_name()

    password_program()
    test_passwords()