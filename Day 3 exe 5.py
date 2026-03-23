# Input sentence
sentence = input("Enter a sentence: ")

# Split sentence into words
words = sentence.split()

# Reverse the list of words
reversed_words = words[::-1]

# Join the reversed words into a sentence
reversed_sentence = " ".join(reversed_words)

# Output
print(reversed_sentence)