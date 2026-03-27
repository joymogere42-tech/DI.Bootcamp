import random

# Generate the list and target number
list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728

# Find all pairs that sum to the target number
pairs = []
seen = set()

for num in list_of_numbers:
    complement = target_number - num
    if complement in seen:
        pairs.append((complement, num))
    seen.add(num)

# Print the pairs
print(f"Pairs that sum to {target_number}:")
for p in pairs:
    print(p)