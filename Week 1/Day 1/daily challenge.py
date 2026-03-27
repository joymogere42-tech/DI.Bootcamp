import random

# Step 1: Ask user for input
user_string = input("Enter a string: ")

# Step 2: Check length
if len(user_string) < 10:
    print("String not long enough.")
elif len(user_string) > 10:
    print("String too long.")
else:
    print("Perfect string")

    # Step 3: First and last characters
    print("First character:", user_string[0])
    print("Last character:", user_string[-1])

    # Step 4: Build string progressively
    print("\nBuilding string:")
    for i in range(len(user_string)):
        print(user_string[:i+1])

    # Step 5 (Bonus): Shuffle string
    char_list = list(user_string)
    random.shuffle(char_list)
    shuffled = "".join(char_list)

    print("\nJumbled string:", shuffled)