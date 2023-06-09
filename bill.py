amount = int(input("Enter bill amount:"))

if amount <= 1000:
    output = amount - (amount * 5 / 100)
if amount > 1000:
    output = amount - (amount * 10 / 100)

print("After discount your bill is: ", output)