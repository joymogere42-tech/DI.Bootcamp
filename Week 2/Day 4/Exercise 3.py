import json
import re
import random

# =====================================
# VALENTINE MENU PART
# =====================================

FILE = "restaurant_menu.json"

def load_data():
    try:
        with open(FILE, "r") as f:
            data = json.load(f)
            if "valentine_items" not in data:
                data["valentine_items"] = []
            return data
    except:
        return {"items": [], "valentine_items": []}


def save_data(data):
    with open(FILE, "w") as f:
        json.dump(data, f, indent=4)


# ✅ Validation rules
def is_valid_name(name):
    if any(char.isdigit() for char in name):
        return False

    if name.lower().count("e") < 2:
        return False

    words = name.split()

    if not words[0].startswith("V"):
        return False

    for word in words:
        if word.lower() in ["of", "and", "the"]:
            if not word.islower():
                return False
        else:
            if not word[0].isupper():
                return False

    return True


def is_valid_price(price):
    return re.match(r"^\d{2},14$", price)


def add_valentine_item():
    data = load_data()

    name = input("Enter Valentine item name: ")
    price = input("Enter price (format XX,14): ")

    if not is_valid_name(name):
        print("Invalid name.")
        return

    if not is_valid_price(price):
        print("Invalid price.")
        return

    data["valentine_items"].append({"name": name, "price": price})
    save_data(data)

    print("Valentine item added!")


# ❤️ Heart pattern
def print_heart():
    print("\n❤️ Valentine Heart ❤️\n")
    for i in range(6):
        for j in range(7):
            if (i == 0 and j % 3 != 0) or \
               (i == 1 and j % 3 == 0) or \
               (i - j == 2) or (i + j == 8):
                print("*", end=" ")
            else:
                print(" ", end=" ")
        print()


def show_menu():
    data = load_data()

    print("\n--- MENU ---")
    for item in data["items"]:
        print(item["name"], "-", item["price"])

    print("\n--- VALENTINE SPECIAL ---")
    for item in data["valentine_items"]:
        print(item["name"], "-", item["price"])

    print_heart()


# =====================================
# DUNGEONS & DRAGONS PART
# =====================================

class Character:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.stats = self.generate_stats()

    def roll_dice(self):
        rolls = [random.randint(1, 6) for _ in range(4)]
        rolls.remove(min(rolls))
        return sum(rolls)

    def generate_stats(self):
        return {
            "Strength": self.roll_dice(),
            "Dexterity": self.roll_dice(),
            "Constitution": self.roll_dice(),
            "Intelligence": self.roll_dice(),
            "Wisdom": self.roll_dice(),
            "Charisma": self.roll_dice(),
        }


class Game:
    def __init__(self):
        self.players = []

    def create_players(self):
        num = int(input("How many players? "))

        for _ in range(num):
            name = input("Enter name: ")
            age = input("Enter age: ")
            character = Character(name, age)
            self.players.append(character)

    def save_to_json(self):
        data = []

        for p in self.players:
            data.append({
                "name": p.name,
                "age": p.age,
                "stats": p.stats
            })

        with open("characters.json", "w") as f:
            json.dump(data, f, indent=4)

    def save_to_txt(self):
        with open("characters.txt", "w") as f:
            for p in self.players:
                f.write(f"Name: {p.name}, Age: {p.age}\n")
                for stat, value in p.stats.items():
                    f.write(f"{stat}: {value}\n")
                f.write("\n")

    def run(self):
        self.create_players()
        self.save_to_json()
        self.save_to_txt()
        print("Characters saved to JSON and TXT.")


# =====================================
# MAIN MENU
# =====================================

def main():
    while True:
        print("\n=== MAIN MENU ===")
        print("1. Show Menu")
        print("2. Add Valentine Item")
        print("3. Play D&D Game")
        print("4. Exit")

        choice = input("Choose: ")

        if choice == "1":
            show_menu()
        elif choice == "2":
            add_valentine_item()
        elif choice == "3":
            game = Game()
            game.run()
        elif choice == "4":
            print("Goodbye!")
            break
        else:
            print("Invalid choice.")


main()