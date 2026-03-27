# Step 1: Define function to calculate age
def get_age(year, month, day):
    current_year = 2026
    current_month = 3
    age = current_year - year
    if month > current_month:
        age -= 1
    return age

# Step 2: Define function to check retirement eligibility
def can_retire(gender, date_of_birth):
    year, month, day = map(int, date_of_birth.split('-'))
    age = get_age(year, month, day)
    
    if gender.lower() == "male":
        return age >= 67
    elif gender.lower() == "female":
        # Women born after April 1947 retire at 62
        if year > 1947 or (year == 1947 and month > 4):
            return age >= 62
        else:
            return age >= 60  # If born before April 1947, optional old rules
    else:
        return False

# Example usage:
print(can_retire("male", "1960-05-20"))    # False
print(can_retire("female", "1965-06-15"))  # True
def sum_pattern(x):
    # Convert the number to string to repeat it
    x_str = str(x)
    total = int(x_str) + int(x_str*2) + int(x_str*3) + int(x_str*4)
    return total

# Example usage:
print(sum_pattern(3))  # Output: 3702 (3 + 33 + 333 + 3333)
import random

# Function to simulate a single dice throw
def throw_dice():
    return random.randint(1, 6)

# Function to throw two dice until doubles are rolled
def throw_until_doubles():
    count = 0
    while True:
        die1 = throw_dice()
        die2 = throw_dice()
        count += 1
        if die1 == die2:
            break
    return count

# Main function
def main():
    results = []
    for _ in range(100):
        throws = throw_until_doubles()
        results.append(throws)
    
    total_throws = sum(results)
    average_throws = round(total_throws / len(results), 2)
    
    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws}")

# Call the main function
main()