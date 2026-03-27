# Exercise 1
lst = [1, 2, 3, 4]
lst.insert(2, 99)

# Exercise 2
s = "Count the spaces in this string"
space_count = s.count(" ")

# Exercise 3
s = "Hello World"
upper_count = sum(1 for c in s if c.isupper())
lower_count = sum(1 for c in s if c.islower())

# Exercise 4
def my_sum(arr):
    total = 0
    for num in arr:
        total += num
    return total

# Exercise 5
def find_max(lst):
    max_val = lst[0]
    for num in lst:
        if num > max_val:
            max_val = num
    return max_val

# Exercise 6
def factorial(n):
    result = 1
    for i in range(2, n+1):
        result *= i
    return result

# Exercise 7
def list_count(lst, elem):
    count = 0
    for x in lst:
        if x == elem:
            count += 1
    return count

# Exercise 8
def norm(lst):
    total = sum(x**2 for x in lst)
    return total**0.5

# Exercise 9
def is_mono(arr):
    return all(arr[i] <= arr[i+1] for i in range(len(arr)-1)) or all(arr[i] >= arr[i+1] for i in range(len(arr)-1))

# Exercise 10
def longest_word(lst):
    return max(lst, key=len)

# Exercise 11
def separate_types(lst):
    ints = [x for x in lst if isinstance(x,int)]
    strs = [x for x in lst if isinstance(x,str)]
    return ints, strs

# Exercise 12
def is_palindrome(s):
    return s == s[::-1]

# Exercise 13
def sum_over_k(sentence, k):
    return sum(1 for word in sentence.split() if len(word) > k)

# Exercise 14
def dict_avg(d):
    return sum(d.values())/len(d)

# Exercise 15
def common_div(a,b):
    return [i for i in range(1, min(a,b)+1) if a%i==0 and b%i==0]

# Exercise 16
def is_prime(n):
    if n<2:
        return False
    for i in range(2,int(n**0.5)+1):
        if n%i==0:
            return False
    return True

# Exercise 17
def weird_print(lst):
    return [val for idx,val in enumerate(lst) if idx%2==0 and val%2==0]

# Exercise 18
def type_count(**kwargs):
    counts = {}
    for v in kwargs.values():
        t = type(v).__name__
        counts[t] = counts.get(t,0)+1
    return counts

# Exercise 19
def my_split(s, sep=None):
    res = []
    temp = ''
    for c in s:
        if c == (sep if sep is not None else ' '):
            if temp:
                res.append(temp)
                temp = ''
        else:
            temp += c
    if temp:
        res.append(temp)
    return res

# Exercise 20
def to_password(s):
    return '*' * len(s)