# Take input from user
words = input("Enter words separated by commas: ")

# Split the string into a list
words_list = words.split(',')

# Sort the list alphabetically
words_list.sort()

# Join the sorted list back into a string
sorted_words = ','.join(words_list)

# Print the result
print(sorted_words)