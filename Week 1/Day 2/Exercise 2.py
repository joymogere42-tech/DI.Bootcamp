list1 = [1, 2, 3]
list2 = [4, 5, 6]

list1.extend(list2)

print(list1)
for num in range(1500, 2501):
    if num % 5 == 0 and num % 7 == 0:
        print(num)
        names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Enter your name: ")

if user_name in names:
    print("Index of first occurrence:", names.index(user_name))

num1 = int(input("26: "))
num2 = int(input("78: "))
num3 = int(input("52: "))


greatest = max(num26, num78, num52)

print("78", greatest)
import string

alphabet = string.ascii_lowercase
vowels = "aeiou"

for letter in alphabet:
    if letter in vowels:
        print(f"{letter} is a vowel")
    else:
        print(f"{letter} is a consonant")
        words = []
for i in range(7):
    word = input(f"Enter word {i+1}: ")
    words.append(word)

letter = input("Enter a single character: ")

for word in words:
    if letter in word:
        print(f"In '{word}', '{letter}' appears at index {word.index(letter)}")
    else:
        print(f"'{letter}' does not appear in '{word}'")
        numbers = list(range(1, 1_000_001))

print("Minimum number:", min(numbers))
print("Maximum number:", max(numbers))
print("Sum of all numbers:", sum(numbers))
values = input("Enter comma-separated numbers: ")

numbers_list = values.split(',')
numbers_tuple = tuple(numbers_list)

print(numbers_list)
print(numbers_tuple)
import random

wins = 0
losses = 0

while True:
    user_input = input("Guess a number from 1 to 9 (or type 'quit' to exit): ")
    if user_input.lower() == 'quit':
        break

    if not user_input.isdigit() or not (1 <= int(user_input) <= 9):
        print("Please enter a valid number between 1 and 9.")
        continue

    user_guess = int(user_input)
    random_number = random.randint(1, 9)

    if user_guess == random_number:
        print("Winner!")
        wins += 1
    else:
        print(f"Better luck next time! The number was {random_number}.")
        losses += 1

print(f"Total games won: {wins}")
print(f"Total games lost: {losses}")