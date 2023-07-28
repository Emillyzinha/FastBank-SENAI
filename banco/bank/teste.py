from random import randint
numero = ''
for i in range(0,9):
    num_alea = str(randint(0,9))
    # print('oi', type(num_alea))
    numero += num_alea

print(numero)