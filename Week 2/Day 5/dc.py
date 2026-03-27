import random

# Card Class
class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return f"{self.value} of {self.suit}"


# Deck Class (does NOT inherit from Card)
class Deck:
    def __init__(self):
        self.cards = []
        self.create_deck()

    def create_deck(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", 
                  "8", "9", "10", "J", "Q", "K"]

        self.cards = [Card(suit, value) for suit in suits for value in values]

    def shuffle(self):
        # Ensure full deck before shuffling
        if len(self.cards) != 52:
            self.create_deck()
        random.shuffle(self.cards)

    def deal(self):
        if len(self.cards) == 0:
            return "No cards left!"
        return self.cards.pop()


# Example usage
deck = Deck()
deck.shuffle()

print("Dealing 5 cards:")
for _ in range(5):
    print(deck.deal())