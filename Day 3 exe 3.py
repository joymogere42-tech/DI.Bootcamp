manufacturers = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

manufacturer_list = manufacturers.split(", ")

print(f"There are {len(manufacturer_list)} manufacturers in the list.")

print("Manufacturers in descending order (Z-A):")
print(sorted(manufacturer_list, reverse=True))

count_with_o = sum(1 for name in manufacturer_list if 'o' in name.lower())
print(f"Manufacturers with the letter 'o': {count_with_o}")

count_without_i = sum(1 for name in manufacturer_list if 'i' not in name.lower())
print(f"Manufacturers without the letter 'i': {count_without_i}")


duplicates_list = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

unique_companies = list(set(duplicates_list))

print("Companies without duplicates:")
print(", ".join(unique_companies))

print(f"There are now {len(unique_companies)} unique companies.")

reversed_names = [name[::-1] for name in sorted(unique_companies)]
print("Ascending order with reversed names:")
print(reversed_names)