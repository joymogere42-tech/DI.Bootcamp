# Step 1: Define the function
def display_message():
    # Step 2: Print a message
    print("I am learning about functions in Python.")

# Step 3: Call the function
display_message()
# Step 1: Define the function with a parameter
def favorite_book(title):
    # Step 2: Print a message with the title
    print(f"One of my favorite books is {title}")

# Step 3: Call the function with an argument
favorite_book("The step-mother's tale")
# Step 1: Define the function with two parameters
def describe_city(city, country):
    # Step 2: Print a message with the city and country
    print(f"{city} is in {country}.")

# Step 3: Call the function with examples
describe_city("Paris", "France")
import random

# Step 1: Define the function
def compare_random_numbers():
    # Step 2: Generate two random numbers between 1 and 100
    num1 = random.randint(1, 100)
    num2 = random.randint(1, 100)
    
    # Step 3: Print the numbers
    print(f"Number 1: {num1}")
    print(f"Number 2: {num2}")
    
    # Step 4: Compare the numbers
    if num1 > num2:
        print("Number 1 is greater than Number 2.")
    elif num1 < num2:
        print("Number 2 is greater than Number 1.")
    else:
        print("Both numbers are equal.")

# Step 5: Call the function
compare_random_numbers()
# Step 1: Define the function with default parameters
def describe_shirt(size="Medium", message="I love Python"):
    # Step 2: Print the shirt details
    print(f"Shirt size: {size}")
    print(f"Message on shirt: {message}")

# Step 3: Call the function without arguments (uses default values)
describe_shirt()

# Call the function with custom arguments
describe_shirt(size="Large", message="Coding is fun!")
# Step 1: Create a list of magician names
magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"]

# Step 2: Display each magician's name
print("Magicians in the original list:")
for magician in magicians:
    print(magician)

# Step 3: Add "the Great" to each magician's name
great_magicians = [magician + " the Great" for magician in magicians]

# Step 4: Display the modified names
print("\nMagicians with 'the Great':")
for magician in great_magicians:
    print(magician)

# Step 5: Show that original list is unchanged
print("\nOriginal list still intact:")
print(magicians)
import random

# Step 1: Generate a random temperature between -10 and 40 degrees Celsius
temperature = random.randint(-10, 40)
print(f"Current temperature: {temperature}°C")

# Step 2: Provide advice based on temperature
if temperature < 0:
    print("Brrr! It's freezing. Wear a heavy coat!")
elif 0 <= temperature <= 10:
    print("It's cold. Wear a jacket.")
elif 11 <= temperature <= 20:
    print("It's cool. A light sweater should be fine.")
elif 21 <= temperature <= 30:
    print("It's warm. Enjoy the weather!")
else:
    print("It's hot! Stay hydrated and wear light clothing.")