# =========================
# Exercise 1
# =========================
print("Hello world\n" * 4)

# =========================
# Exercise 2
# =========================
print((99**3) * 8)

# =========================
# Exercise 3
# =========================
print(15 < 8)        # False
print(5 < 3)         # False
print(3 == 3)        # True
print(3 == "3")      # False
# print("3" > 3)     # Error: cannot compare string and integer
print("Hello" == "hello")  # False

# =========================
# Exercise 4
# =========================
computer_brand = "HP"
print(f"I have a {computer_brand} computer.")

# =========================
# Exercise 5
# =========================
name = "Joy"
age = 20
shoe_size = 38
info = f"My name is {name}, I am {age} years old and my shoe size is {shoe_size}."
print(info)

# =========================
# Exercise 6
# =========================
a = 10
b = 5
if a > b:
    print("Hello World")

# =========================
# Exercise 7
# =========================
num = int(input("Enter a number: "))
if num % 2 == 0:
    print("Even")
else:
    print("Odd")

# =========================
# Exercise 8
# =========================
my_name = "Joy"
user_name = input("What is your name? ")
if user_name == my_name:
    print("Wow! We have the same name 😄")
else:
    print("Nice to meet you!")

# =========================
# Exercise 9
# =========================
height = int(input("Enter your height in cm: "))
if height > 145:
    print("You are tall enough to ride!")
else:
    print("You need to grow some more to ride.")