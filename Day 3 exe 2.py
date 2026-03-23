# 🌟 Exercise 1: Student Grades Analysis
student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

student_averages = {}
student_letter_grades = {}

for student, grades in student_grades.items():
    avg = sum(grades)/len(grades)
    student_averages[student] = avg
    
    if avg >= 90:
        letter = "A"
    elif avg >= 80:
        letter = "B"
    elif avg >= 70:
        letter = "C"
    elif avg >= 60:
        letter = "D"
    else:
        letter = "F"
    student_letter_grades[student] = letter

class_average = sum(student_averages.values()) / len(student_averages)
print(f"Class Average: {class_average:.2f}\n")

for student in student_grades:
    print(f"{student}: Average = {student_averages[student]:.2f}, Letter Grade = {student_letter_grades[student]}")

# 🌟 Exercise 2: Sales Data Analysis
sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

# Add total_price field
for transaction in sales_data:
    transaction["total_price"] = transaction["price"] * transaction["quantity"]

# Total sales per product
total_sales = {}
for t in sales_data:
    total_sales[t["product"]] = total_sales.get(t["product"], 0) + t["total_price"]

# Total spent per customer
customer_spending = {}
for t in sales_data:
    customer_spending[t["customer_id"]] = customer_spending.get(t["customer_id"], 0) + t["total_price"]

# High-value transactions (> $500)
high_value_transactions = sorted(
    [t for t in sales_data if t["total_price"] > 500],
    key=lambda x: x["total_price"], reverse=True
)

# Customer loyalty (more than 1 purchase)
purchase_counts = {}
for t in sales_data:
    purchase_counts[t["customer_id"]] = purchase_counts.get(t["customer_id"], 0) + 1
loyal_customers = [cid for cid, count in purchase_counts.items() if count > 1]

# Bonus insights
average_transaction_per_product = {product: total_sales[product]/sum(t["quantity"] for t in sales_data if t["product"] == product) for product in total_sales}
most_popular_product = max({product: sum(t["quantity"] for t in sales_data if t["product"] == product) for product in total_sales}, key=lambda k: k)

# Outputs
print("\nTotal Sales per Product:", total_sales)
print("Customer Spending:", customer_spending)
print("High-Value Transactions:", high_value_transactions)
print("Loyal Customers:", loyal_customers)
print("Average Transaction per Product:", average_transaction_per_product)
print("Most Popular Product:", most_popular_product)