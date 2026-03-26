import string
import re

# =====================================
# TEXT CLASS
# =====================================

class Text:
    def __init__(self, text):
        self.text = text

    # Step 2: word frequency
    def word_frequency(self, word):
        words = self.text.lower().split()
        count = words.count(word.lower())
        return count if count > 0 else None

    # Step 3: most common word
    def most_common_word(self):
        words = self.text.lower().split()
        freq = {}

        for w in words:
            freq[w] = freq.get(w, 0) + 1

        most_common = max(freq, key=freq.get)
        return most_common

    # Step 4: unique words
    def unique_words(self):
        words = self.text.lower().split()
        return list(set(words))

    # Step 5: class method from file
    @classmethod
    def from_file(cls, file_path):
        try:
            with open(file_path, "r") as file:
                content = file.read()
                return cls(content)
        except FileNotFoundError:
            print("File not found.")
            return None


# =====================================
# TEXT MODIFICATION CLASS
# =====================================

class TextModification(Text):

    # Step 7: remove punctuation
    def remove_punctuation(self):
        return self.text.translate(str.maketrans('', '', string.punctuation))

    # Step 8: remove stop words
    def remove_stop_words(self):
        stop_words = {
            "a", "the", "is", "in", "on", "and", "or", "an", "of", "to", "for"
        }

        words = self.text.lower().split()
        filtered = [word for word in words if word not in stop_words]

        return " ".join(filtered)

    # Step 9: remove special characters
    def remove_special_characters(self):
        return re.sub(r'[^a-zA-Z0-9\s]', '', self.text)


# =====================================
# EXAMPLE USAGE
# =====================================

def main():
    text_str = "Hello! This is a simple example. This example is simple and fun."

    print("=== USING STRING ===")
    t = Text(text_str)

    print("Word frequency (example):", t.word_frequency("example"))
    print("Most common word:", t.most_common_word())
    print("Unique words:", t.unique_words())

    print("\n=== USING FILE ===")
    file_text = Text.from_file("sample.txt")
    if file_text:
        print("Most common word from file:", file_text.most_common_word())

    print("\n=== TEXT MODIFICATION ===")
    tm = TextModification(text_str)

    print("Without punctuation:", tm.remove_punctuation())
    print("Without stop words:", tm.remove_stop_words())
    print("Without special characters:", tm.remove_special_characters())


# Run program
main()