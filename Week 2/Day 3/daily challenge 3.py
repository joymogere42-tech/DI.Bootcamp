# create empty list
students = []

# take input 5 times
for _ in range(5):
    name = input("Enter name: ")
    age = input("Enter age: ")
    score = input("Enter score: ")
    
    students.append((name, age, score))

# sort using lambda: Name > Age > Score
students.sort(key=lambda x: (x[0], x[1], x[2]))

# print result
print(students)