import random

# ------------------- Game Class -------------------
class Game:

    def get_user_item(self):
        while True:
            choice = input("Choose (rock/paper/scissors): ").lower()
            if choice in ["rock", "paper", "scissors"]:
                return choice
            else:
                print("Invalid choice, try again.")

    def get_computer_item(self):
        return random.choice(["rock", "paper", "scissors"])

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif (
            (user_item == "rock" and computer_item == "scissors") or
            (user_item == "paper" and computer_item == "rock") or
            (user_item == "scissors" and computer_item == "paper")
        ):
            return "win"
        else:
            return "loss"

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f"\nYou chose: {user_item}")
        print(f"Computer chose: {computer_item}")
        print(f"Result: {result}\n")

        return result


# ------------------- Menu Functions -------------------

def get_user_menu_choice():
    while True:
        print("Menu:")
        print("1. Play a new game")
        print("2. Show scores")
        print("3. Quit")

        choice = input("Enter your choice (1/2/3): ")

        if choice in ["1", "2", "3"]:
            return choice
        else:
            print("Invalid choice, try again.\n")


def print_results(results):
    print("\nGame Results:")
    print(f"Wins: {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws: {results['draw']}")
    print("Thanks for playing! ")


# ------------------- Main Function -------------------

def main():
    results = {"win": 0, "loss": 0, "draw": 0}

    while True:
        choice = get_user_menu_choice()

        if choice == "1":
            game = Game()
            result = game.play()
            results[result] += 1

        elif choice == "2":
            print_results(results)

        elif choice == "3":
            print_results(results)
            break


# Run program
if __name__ == "__main__":
    main()