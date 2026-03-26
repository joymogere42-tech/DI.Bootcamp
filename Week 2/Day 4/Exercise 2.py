import json
import requests

# =====================================
# MENU MANAGER (BACKEND LOGIC)
# =====================================

class MenuManager:
    def __init__(self, file_path="restaurant_menu.json"):
        self.file_path = file_path
        try:
            with open(self.file_path, "r") as file:
                self.menu = json.load(file)
        except FileNotFoundError:
            self.menu = {"items": []}

    def add_item(self, name, price):
        self.menu["items"].append({"name": name, "price": price})

    def remove_item(self, name):
        for i, item in enumerate(self.menu["items"]):
            if item["name"].lower() == name.lower():
                del self.menu["items"][i]
                return True
        return False

    def save_to_file(self):
        with open(self.file_path, "w") as file:
            json.dump(self.menu, file, indent=4)

    def get_menu(self):
        return self.menu["items"]


# =====================================
# MENU EDITOR (USER INTERFACE)
# =====================================

def show_restaurant_menu(manager):
    print("\n--- Restaurant Menu ---")
    for item in manager.get_menu():
        print(f"{item['name']} - ${item['price']}")
    print()


def add_item_to_menu(manager):
    name = input("Enter item name: ")
    try:
        price = float(input("Enter item price: "))
        manager.add_item(name, price)
        print("Item added successfully.")
    except ValueError:
        print("Invalid price.")


def remove_item_from_menu(manager):
    name = input("Enter item name to remove: ")
    if manager.remove_item(name):
        print("Item removed successfully.")
    else:
        print("Error: Item not found.")


def menu_program():
    manager = MenuManager()

    while True:
        print("\n=== MENU MANAGER ===")
        print("1. Show Menu")
        print("2. Add Item")
        print("3. Remove Item")
        print("4. Exit")

        choice = input("Choose an option: ")

        if choice == "1":
            show_restaurant_menu(manager)
        elif choice == "2":
            add_item_to_menu(manager)
        elif choice == "3":
            remove_item_from_menu(manager)
        elif choice == "4":
            manager.save_to_file()
            print("Menu saved. Exiting...")
            break
        else:
            print("Invalid choice.")


# =====================================
# GIPHY API #1
# =====================================

def giphy_api_1():
    api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    query = "hilarious"
    limit = 10

    url = f"https://api.giphy.com/v1/gifs/search?q={query}&rating=g&limit={limit}&api_key={api_key}"

    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()["data"]

        # filter gifs with height > 100
        filtered = [
            gif for gif in data
            if int(gif["images"]["original"]["height"]) > 100
        ]

        print("\nFiltered GIF count:", len(filtered))

        for gif in filtered:
            print(gif["url"])
    else:
        print("Error fetching GIFs.")


# =====================================
# GIPHY API #2
# =====================================

def giphy_api_2():
    api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    search_term = input("\nEnter a search term for GIFs: ")

    search_url = f"https://api.giphy.com/v1/gifs/search?q={search_term}&api_key={api_key}&limit=10"
    trending_url = f"https://api.giphy.com/v1/gifs/trending?api_key={api_key}&limit=10"

    response = requests.get(search_url)

    if response.status_code == 200:
        data = response.json()["data"]

        if len(data) == 0:
            print("No results found. Showing trending GIFs instead.")
            response = requests.get(trending_url)
            data = response.json()["data"]

        print("\nGIF Results:")
        for gif in data:
            print(gif["url"])
    else:
        print("Error fetching GIFs.")


# =====================================
# MAIN MENU (COMBINED PROGRAM)
# =====================================

def main():
    while True:
        print("\n=== MAIN PROGRAM ===")
        print("1. Restaurant Menu Manager")
        print("2. Giphy API #1")
        print("3. Giphy API #2")
        print("4. Exit")

        choice = input("Choose an option: ")

        if choice == "1":
            menu_program()
        elif choice == "2":
            giphy_api_1()
        elif choice == "3":
            giphy_api_2()
        elif choice == "4":
            print("Goodbye!")
            break
        else:
            print("Invalid choice.")


# Run program
main()