my_fav_numbers = {3, 7, 21}
my_fav_numbers.add(10)
my_fav_numbers.add(15)
my_fav_numbers.remove(15)

friend_fav_numbers = {5, 7, 12}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)
my_tuple = (1, 2, 3)
my_tuple = my_tuple + (4, 5)
print(my_tuple)
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")

print(basket.count("Apples"))

basket.clear()

print(basket)
while True:
    name = input("Enter your name: ")
    if not name.isdigit() and len(name) >= 3:
        print("thank you")
        break
    fruits = input("Enter your favorite fruits (separated by spaces): ").split()

fruit = input("Enter a fruit: ")

if fruit in fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")
    toppings = []
price = 10

while True:
    topping = input("Enter a topping (or 'quit' to stop): ")
    if topping.lower() == 'quit':
        break
    print(f"Adding {topping} to your pizza.")
    toppings.append(topping)
    price += 2.5

print("Toppings:", toppings)
print("Total cost: $", price)
