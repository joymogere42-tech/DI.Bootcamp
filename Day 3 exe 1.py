# Exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
my_dict = dict(zip(keys, values))
print(my_dict)

# Exercise 2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_cost = 0
for member, age in family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    total_cost += cost
    print(f"{member} ticket: ${cost}")
print(f"Total cost: ${total_cost}")

# Exercise 3
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {"France": "blue", "Spain": "red", "US": ["pink", "green"]}
}
brand["number_stores"] = 2
print(f"Zara sells clothes for {', '.join(brand['type_of_clothes'])}.")
brand["country_creation"] = "Spain"
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
brand.pop("creation_date")
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print(brand.keys())
more_on_zara = {"creation_date": 1975, "number_stores": 10000}
brand.update(more_on_zara)
print(brand)

# Exercise 4
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
dict1 = {user: idx for idx, user in enumerate(users)}
dict2 = {idx: user for idx, user in enumerate(users)}
dict3 = {user: idx for idx, user in enumerate(sorted(users))}
print(dict1)
print(dict2)
print(dict3)