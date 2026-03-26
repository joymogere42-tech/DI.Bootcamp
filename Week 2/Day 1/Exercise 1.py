# Step 1: Define the Cat class
class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# Create three Cat objects
cat1 = Cat("Whiskers", 3)
cat2 = Cat("Milo", 5)
cat3 = Cat("Luna", 2)

# Step 2: Function to find the oldest cat
def find_oldest_cat(cat1, cat2, cat3):
    oldest = cat1  # assume first cat is oldest

    if cat2.age > oldest.age:
        oldest = cat2
    if cat3.age > oldest.age:
        oldest = cat3

    return oldest

# Step 3: Print the oldest cat's details
oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")