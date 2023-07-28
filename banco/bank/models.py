from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from random import randint

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError(("The e-mail must be set"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()

        numero_conta = ''
        for i in range(0,9):
            num_alea = str(randint(0,9))
            numero_conta += num_alea

        Conta.objects.create(fk_cliente=user, agencia='0801', numero=numero_conta, status=True, tipo='C', saldo=2000)
        return user

class Cliente(AbstractUser):
    nomeCompleto = models.CharField(max_length=255, blank=False)
    data_nascimento = models.DateField(blank=False)
    cpf = models.CharField(max_length=14, blank=False, unique=True)
    numero_telefone = models.CharField(max_length=20, blank=False)
    email = models.EmailField(unique=True, blank=False)

    USERNAME_FIELD = "cpf"
    REQUIRED_FIELDS = ["nomeCompleto", "username", "data_nascimento", "numero_telefone", "email", "password"]

    objects = CustomUserManager()

class Conta(models.Model):
    CORRENTE = 'C'
    SALARIO = 'S'
    PAGAMENTO = 'P'

    tipos_conta = (
        (CORRENTE, 'Corrente'),
        (SALARIO, 'Salário'),
        (PAGAMENTO, 'Pagamento')
    )

    agencia = models.CharField(max_length=4)
    numero = models.IntegerField(unique=True)
    status = models.BooleanField()
    tipo = models.CharField(max_length=1, choices=tipos_conta, default=CORRENTE)
    saldo = models.DecimalField(max_digits=10, decimal_places=2)
    fk_cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)

class Endereco(models.Model):
    cep = models.IntegerField()  
    pais = models.CharField(max_length=255)  
    estado = models.CharField(max_length=255)  
    cidade = models.CharField(max_length=255)  
    bairro = models.CharField(max_length=255)  
    logradouro = models.CharField(max_length=255)  
    numero = models.CharField(max_length=255)
    fk_cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)

class Cartao(models.Model):
    numero = models.IntegerField(unique=True)
    CVV = models.IntegerField(unique=True)
    data_validade = models.DateField()
    nome_titular = models.CharField(unique=True, max_length=255)
    bandeira = models.CharField(max_length=6)
    fk_conta = models.ForeignKey(Conta, on_delete=models.CASCADE)

class Emprestimo(models.Model):
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    qtd_parcela = models.IntegerField()
    valor_parcelas = models.DecimalField(max_digits=10, decimal_places=2)
    juros = models.IntegerField()
    fk_conta = models.ForeignKey(Conta, on_delete=models.CASCADE)

class Transferencia(models.Model):
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    destinatarioCPF = models.IntegerField()
    nomeCompleto = models.CharField(max_length=255)
    fk_conta = models.ForeignKey(Conta, on_delete=models.CASCADE)

class Movimentacao(models.Model):
    TRANSFERENCIA = 'F'
    EMPRESTIMO = 'E'
    PIX = 'P'

    tipos_transacoes = (
        (TRANSFERENCIA, 'Transferência'),
        (EMPRESTIMO, 'Empréstimo'),
        (PIX, 'Pix')
    )

    transacao = models.CharField(max_length=1, choices=tipos_transacoes, default=EMPRESTIMO)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    nomeCompleto = models.CharField(max_length=255)
    data = models.DateField(auto_now=True)
    fk_conta = models.ForeignKey(Conta, on_delete=models.CASCADE)
