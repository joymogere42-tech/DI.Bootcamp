import random
import json

# ------------------ EXERCISE 1 ------------------

def get_words_from_file(file_path):
    try:
        with open(file_path, "r") as file:
            content = file.read()
            return content.split()
    except FileNotFoundError:
        print("Error: words.txt file not found.")
        return []


def get_random_sentence(length):
    words = get_words_from_file("words.txt")

    if not words:
        return "No words available."

    sentence = " ".join(random.choice(words) for _ in range(length)).lower()
    return sentence


# ------------------ EXERCISE 2 ------------------

def process_json():
    sampleJson = """{ 
       "company":{ 
          "employee":{ 
             "name":"emma",
             "payable":{ 
                "salary":7000,
                "bonus":800
             }
          }
       }
    }"""

    # Load JSON
    data = json.loads(sampleJson)

    # Access salary
    salary = data["company"]["employee"]["payable"]["salary"]
    print("\nSalary:", salary)

    # Add birth_date
    data["company"]["employee"]["birth_date"] = "1995-06-15"

    # Save to file
    with open("modified_data.json", "w") as file:
        json.dump(data, file, indent=4)

    print("JSON updated and saved to modified_data.json")


# ------------------ MAIN FUNCTION ------------------

def main():
    print("=== Random Sentence Generator ===")

    user_input = input("Enter sentence length (2–20): ")

    try:
        length = int(user_input)

        if length < 2 or length > 20:
            print("Error: Number must be between 2 and 20.")
        else:
            sentence = get_random_sentence(length)
            print("Generated sentence:")
            print(sentence)

    except ValueError:
        print("Error: Please enter a valid integer.")

    print("\n=== JSON Processing ===")
    process_json()


# Run everything
main()