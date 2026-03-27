# Pattern 1
for i in range(1, 4):
    print(' '*(3-i) + '*'*(2*i-1))

# Pattern 2
for i in range(1, 6):
    print(' '*(5-i) + '*'*i)

# Pattern 3
# Top half
for i in range(1, 6):
    print('*'*i)
# Bottom half
for i in range(5, 0, -1):
    print(' '*(5-i) + '*'*i)