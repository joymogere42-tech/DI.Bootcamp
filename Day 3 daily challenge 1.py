# =========================
# Challenge 1: Letter Index Dictionary
# =========================

def letter_indices():
    word = input("Enter a word: ")
    result = {}

    for index, char in enumerate(word):
        if char in result:
            result[char].append(index)
        else:
            result[char] = [index]

    print(result)


# =========================
# Challenge 2: Affordable Items
# =========================

def affordable_items():
    items_purchase = {
        "Water": "$1",
        "Bread": "$3",
        "TV": "$1,000",
        "Fertilizer": "$20"
    }

    wallet = "$300"

    # Clean wallet value
    clean_wallet = int(wallet.replace("$", "").replace(",", ""))

    basket = []

    for item, price in items_purchase.items():
        # Clean price
        clean_price = int(price.replace("$", "").replace(",", ""))

        if clean_price <= clean_wallet:
            basket.append(item)
            clean_wallet -= clean_price

    if not basket:
        print("Nothing")
    else:
        print(sorted(basket))


# =========================
# Run both challenges
# =========================

letter_indices()
affordable_items()