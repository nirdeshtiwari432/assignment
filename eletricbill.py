units = int(input(" Please enter Number of Units you Consumed : "))
if(units <= 100):
    amount = units * 0
elif(units <= 200):
    x = units -100
    amount = x * 5
elif(units >= 200):
    x = units -200
    amount = units * 10 + 500

total = amount 
print("\nElectricity Bill = " , total)
