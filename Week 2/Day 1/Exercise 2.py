import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    # Method to return reversed list
    def reversed_list(self):
        return self.letters[::-1]

    # Method to return sorted list
    def sorted_list(self):
        return sorted(self.letters)

    # Bonus: Generate random numbers list of same length
    def random_numbers_list(self):
        return [random.randint(1, 100) for _ in self.letters]

# Example usage
mylist = MyList(['d', 'a', 'c', 'b'])
print("Reversed:", mylist.reversed_list())
print("Sorted:", mylist.sorted_list())
print("Random numbers:", mylist.random_numbers_list())

# menu_manager.py

class MenuManager:
    def __init__(self):
        # Menu: list of dictionaries for each dish
        self.menu = [
            {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True}
        ]

    # Add new dish
    def add_item(self, name, price, spice, gluten):
        self.menu.append({"name": name, "price": price, "spice": spice, "gluten": gluten})
        print(f"{name} added to the menu.")

    # Update dish
    def update_item(self, name, price, spice, gluten):
        for dish in self.menu:
            if dish["name"] == name:
                dish.update({"price": price, "spice": spice, "gluten": gluten})
                print(f"{name} has been updated.")
                return
        print(f"{name} is not in the menu.")

    # Remove dish
    def remove_item(self, name):
        for dish in self.menu:
            if dish["name"] == name:
                self.menu.remove(dish)
                print(f"{name} removed. Updated menu:")
                for d in self.menu:
                    print(d)
                return
        print(f"{name} is not in the menu.")

# Example usage
if __name__ == "__main__":
    manager = MenuManager()
    manager.add_item("Pizza", 20, "A", True)
    manager.update_item("Salad", 20, "B", False)
    manager.remove_item("Soup")

    