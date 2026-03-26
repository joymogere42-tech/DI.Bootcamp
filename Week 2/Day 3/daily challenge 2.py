from google.cloud import translate_v2

def translate_words(words):
    translator = translator()
    translations = {}

    for word in words:
        try:
            result = translator.translate(word, src='fr', dest='en')
            translations[word] = result.text
        except Exception as e:
            # fallback in case of error
            translations[word] = "Translation failed"

    return translations


# list of French words
french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

# run translation
translated_dict = translate_words(french_words)

# print result
print(translated_dict)