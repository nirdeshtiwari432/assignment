terms = str(input("Enter terms :"))
n = len(terms)
print(n)
k = 0
y = 0
while  k <= n  :
    if k == n:
        print("the square sum of digits are",y)
        break
    else:
     x =int(terms[k:k+1])
     y = x*x  + y
     print(x)
     k = k+1