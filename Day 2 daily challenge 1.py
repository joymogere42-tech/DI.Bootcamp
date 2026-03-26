# Ask for user input
number = int(input("Enter a number: "))
length = int(input("Enter the length: "))

# Create empty list
multiples = []

# Generate multiples
for i in range(1, length + 1):
    multiples.append(number * i)

# Print result
print(multiples)
# Ask for user input
word = input("Enter a word: ")

# Initialize result with first character
result = ""

# Loop through the string
for char in word:
    if result == "" or char != result[-1]:
        result += char

# Print result
print(result)