from rest_framework import serializers
from .models import *

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['nomeCompleto', 'username', 'data_nascimento', 'cpf', 'numero_telefone', 'email', 'password']

class ContaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conta
        fields = ["agencia", "numero", "status", "tipo", "saldo", "fk_cliente"]

class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = ["cep", "pais", "estado", "cidade", "bairro", "logradouro", "numero", "fk_cliente"]

class CartaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cartao
        fields = ["numero", "CVV", "data_validade", "nome_titular", "bandeira", "fk_conta"]

class EmprestimoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emprestimo
        fields = ["valor", "qtd_parcela", "valor_parcelas", "juros", "fk_conta"]

class TransferenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transferencia
        fields = ["valor", "destinatarioCPF", "fk_conta", "nomeCompleto"]

class MovimentacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movimentacao
        fields = ["valor", "nomeCompleto", "data", "fk_conta"]
