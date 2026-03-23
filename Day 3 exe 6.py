num = int(input("Enter a number: "))
# Find divisors and calculate their sum (excluding the number itself)
divisor_sum = sum(i for i in range(1, num) if num % i == 0)

# Check if the number is perfect
if divisor_sum == num:
    print(True)
else:
    print(False)