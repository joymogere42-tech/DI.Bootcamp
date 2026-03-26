# Given classes
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


# Step 1: Create Siamese class
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'


# Step 2: Create instances of cats
bengal_cat = Bengal("Leo", 3)
chartreux_cat = Chartreux("Milo", 5)
siamese_cat = Siamese("Luna", 2)

# Create list
all_cats = [bengal_cat, chartreux_cat, siamese_cat]


# Step 3: Create Pets instance
sara_pets = Pets(all_cats)


# Step 4: Take cats for a walk
sara_pets.walk()

# Step 1: Create the Dog class
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if self_power > other_power:
            return f"{self.name} wins the fight against {other_dog.name}"
        elif self_power < other_power:
            return f"{other_dog.name} wins the fight against {self.name}"
        else:
            return "It's a tie!"


# Step 2: Create Dog instances
dog1 = Dog("Max", 4, 20)
dog2 = Dog("Rocky", 5, 25)
dog3 = Dog("Bella", 3, 18)


# Step 3: Test methods
print(dog1.bark())
print(dog2.bark())

print(dog1.run_speed())
print(dog2.run_speed())

print(dog1.fight(dog2))
print(dog2.fight(dog3))

# Step 1: (Assume Dog class is imported)
# from dog import Dog

import random

# Rewriting Dog here for completeness
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10


# Step 2: Create PetDog class
class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        names = [self.name] + [dog.name for dog in args]
        print(f"{', '.join(names)} all play together")

    def do_a_trick(self):
        tricks = [
            "does a barrel roll",
            "stands on his back legs",
            "shakes your hand",
            "plays dead"
        ]

        if self.trained:
            trick = random.choice(tricks)
            print(f"{self.name} {trick}")
        else:
            print(f"{self.name} is not trained yet")


# Create dog instances
dog1 = PetDog("Buddy", 3, 15)
dog2 = PetDog("Charlie", 4, 20)
dog3 = PetDog("Daisy", 2, 10)

# Train dog1
dog1.train()

# Play together
dog1.play(dog2, dog3)

# Do tricks
dog1.do_a_trick()
dog2.do_a_trick()

# Step 1: Create Person class
class Person:
    def __init__(self, first_name, age, last_name=""):
        self.first_name = first_name
        self.age = age
        self.last_name = last_name

    def is_18(self):
        return self.age >= 18


# Step 2: Create Family class
class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_person = Person(first_name, age, self.last_name)
        self.members.append(new_person)

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print(f"You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print(f"Sorry, you are not allowed to go out with your friends.")
                return
        print("Person not found")

    def family_presentation(self):
        print(f"Family name: {self.last_name}")
        for member in self.members:
            print(f"{member.first_name}, Age: {member.age}")


# Testing the classes

# Create a family
my_family = Family("Smith")

# Add members
my_family.born("John", 40)
my_family.born("Jane", 38)
my_family.born("Mike", 20)
my_family.born("Anna", 15)

# Check majority
my_family.check_majority("Mike")
my_family.check_majority("Anna")

# Display family
my_family.family_presentation()
