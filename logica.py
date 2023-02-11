#mask = "([0-9]{2,3})?(\([0-9]{2}\))([0-9]{4,5})([0-9]{4})"



name = input('Digite seu nome completo: ')
phone = input('Digite seu telefone celular com DDD: ')
email = input('Digite seu email: ')
num = float(input('Digite um numero de 1 a 999: '))



# Se o número for divisivel por 3 retornar primeiro nome
if (num % 3) == 0:
    #Split() é usado para dividir strings de espaços
    first = name.split(' ')
    print('O seu nome é {}.'.format(first[0]))
    # Se o número for divisivel por 5 retornar DDD do telefone
if (num % 5) == 0:
    ddd = phone.split(' ')
    print('Seu ddd é {}'.format(ddd[0]))
if (num % 7) == 0:
    domain = email.split('@')
    print("Seu dominio de email é {}".format(domain[1]))