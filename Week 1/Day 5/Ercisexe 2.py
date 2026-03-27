import random

# List of possible words
words = ["python", "hangman", "programming", "challenge", "computer"]

# Hangman body parts
body_parts = ["head", "body", "left arm", "right arm", "left leg", "right leg"]

# Choose a random word
word = random.choice(words)
word_display = ["*" for _ in word]

guessed_letters = set()
wrong_guesses = 0
max_wrong = len(body_parts)

print("Welcome to Hangman!")
print(" ".join(word_display))

# Game loop
while wrong_guesses < max_wrong and "*" in word_display:
    guess = input("Guess a letter: ").lower()
    
    if len(guess) != 1 or not guess.isalpha():
        print("Please enter a single letter.")
        continue
    if guess in guessed_letters:
        print("You already guessed that letter.")
        continue
    
    guessed_letters.add(guess)
    
    if guess in word:
        for i, letter in enumerate(word):
            if letter == guess:
                word_display[i] = guess
        print("Good guess!")
    else:
        wrong_guesses += 1
        print(f"Wrong guess! You have added: {body_parts[wrong_guesses-1]}")
    
    print(" ".join(word_display))
    print(f"Wrong guesses: {wrong_guesses}/{max_wrong}")
    print(f"Guessed letters: {', '.join(sorted(guessed_letters))}\n")

# End of game
if "*" not in word_display:
    print(f"Congratulations! You guessed the word: {word}")
else:
    print(f"Game over! The word was: {word}")