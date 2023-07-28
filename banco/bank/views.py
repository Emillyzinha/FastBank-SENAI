import decimal
from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from .serializes import *
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import AccessToken
from django.http import HttpResponse
from django.core import serializers
from django.db.models import Q

def dados_usuario(request):
    token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
    dados = AccessToken(token)
    usuario = dados['user_id']
    return usuario

class ClienteCRUD(viewsets.ModelViewSet):
    queryset= Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = (IsAuthenticated, )

    # para encontrar valor igual aos parâmetros escolhidos. Retornar que o e-mail existe
    def get_queryset(self):
        queryset = Cliente.objects.all()
        cpfCliente = self.request.query_params.get('cpf')
        emailCliente = self.request.query_params.get('email')

        if cpfCliente is not None:
            queryset = queryset.filter(cpf=cpfCliente)
            return queryset
        
        if emailCliente is not None:
            queryset = queryset.filter(email=emailCliente)
            return queryset
        
        return super().get_queryset()

    def list(self, request, *args, **kwargs):
        dados_usuario(request)

        return super().list(request, *args, **kwargs)
    
    def create(self, request, *args, **kwargs):

        return super().create(request, *args, **kwargs)
    
class ContaCRUD(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    queryset= Conta.objects.all()
    serializer_class = ContaSerializer

    def list(self, request, *args, **kwargs):
        id_cliente = dados_usuario(request)
        conta = Conta.objects.filter(fk_cliente_id=id_cliente)
        json_conta = serializers.serialize("json", conta.all(), fields = ["agencia", "numero", "status", "tipo", "saldo"])
        return HttpResponse(json_conta)

class EnderecoCRUD(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    queryset= Endereco.objects.all()
    serializer_class = EnderecoSerializer

    def create(self, request, *args, **kwargs):

        # CRIAR ENDEREÇO E SUBSTITUIR A FK DE CLIENTE
        id_cliente = dados_usuario(request)
        cliente = Cliente.objects.get(id=id_cliente)
        id_cliente_endereco = request.data['fk_cliente'] = id_cliente
        endereco = Endereco.objects.filter(fk_cliente=id_cliente).exists()
        if not endereco:
            request.POST._mutable = True

            # CRIANDO NOVO CARTÃO
            numero_cartao = ''
            for i in range(0,9):
                num_cartao = str(randint(0,16))
                numero_cartao += num_cartao

            numero_CVV = ''
            for i in range(0,9):
                num_cvv = str(randint(0,3))
                numero_CVV += num_cvv

            nome_cartao = cliente.nomeCompleto
            conta = Conta.objects.get(fk_cliente_id = id_cliente_endereco)
            id_conta = conta.id
            bandeira = 'AVISTA'

            novo_cartao = Cartao.objects.create(numero=numero_cartao, CVV=numero_CVV, data_validade='2023-12-10', nome_titular=nome_cartao, bandeira=bandeira, fk_conta_id=id_conta)
            novo_cartao.save()
        elif endereco:
            response = HttpResponse("Account already has a card.")
            return response      

        return super().create(request, *args, **kwargs)

class CartaoCRUD(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    queryset= Cartao.objects.all()
    serializer_class = CartaoSerializer

    def list(self, request, *args, **kwargs):
        id_cliente = dados_usuario(request)
        conta = Conta.objects.get(fk_cliente_id=id_cliente)
        id_conta = conta.id
        cartao_cliente= Cartao.objects.filter(fk_conta_id = id_conta)
        json_cartao = serializers.serialize("json", cartao_cliente.all(), fields = ["numero", "CVV", "data_validade", "nome_titular", "bandeira"])
        return HttpResponse(json_cartao)
    
class EmprestimoCRUD(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    queryset= Emprestimo.objects.all()
    serializer_class = EmprestimoSerializer

    def create(self, request, *args, **kwargs):
        id_cliente = dados_usuario(request)
        cliente = Cliente.objects.get(id=id_cliente)
        conta = Conta.objects.get(fk_cliente_id=id_cliente)
        valor_emprestimo = decimal.Decimal(request.data['valor'])
        conta.saldo += valor_emprestimo
        conta.save() 
        Movimentacao.objects.create(transacao='Emprestimo', valor=valor_emprestimo, nomeCompleto=cliente.nomeCompleto, fk_conta=conta)

        return super().create(request, *args, **kwargs)

class TransferenciaCRUD(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    queryset= Transferencia.objects.all()
    serializer_class = TransferenciaSerializer

    def create(self, request, *args, **kwargs):
        id_cliente = dados_usuario(request)
        conta_remetente = Conta.objects.get(fk_cliente_id=id_cliente)
        saldo_remetente = decimal.Decimal(conta_remetente.saldo)

        nomeInputCliente = request.data['nomeCompleto']
        cpfInputCliente = request.data['destinatarioCPF']

        valor_transferencia = decimal.Decimal(request.data['valor'])

        nome_cliente_existe = Cliente.objects.filter(nomeCompleto=nomeInputCliente).exists()
        cpf_cliente_existe = Cliente.objects.filter(cpf=cpfInputCliente).exists()

        if nome_cliente_existe and cpf_cliente_existe and valor_transferencia < saldo_remetente:
            id_destinatario = Cliente.objects.get(cpf=cpfInputCliente).id
            request.data['fk_conta'] = id_destinatario
            request.POST._mutable = True

            conta_remetente.saldo -= valor_transferencia
            conta_remetente.save()

            destinatario = Cliente.objects.get(nomeCompleto=nomeInputCliente)
            conta_destinatario = Conta.objects.get(fk_cliente_id=destinatario.id)
            conta_destinatario.saldo += valor_transferencia
            conta_destinatario.save()

            Movimentacao.objects.create(transacao='Transferência', valor=valor_transferencia, nomeCompleto=nomeInputCliente, fk_conta=conta_remetente)

            return super().create(request, *args, **kwargs)
        else:
            return HttpResponse('Customer does not exist.')

class MovimentacaoCRUD(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    queryset= Movimentacao.objects.all()
    serializer_class = MovimentacaoSerializer

    def list(self, request, *args, **kwargs):
        id_cliente = dados_usuario(request)
        conta = Conta.objects.get(fk_cliente=id_cliente)
        cliente = Cliente.objects.get(id=id_cliente)
        id_conta = conta.id
        nome_cliente = cliente.nomeCompleto
        movimentacao_transferencia = Movimentacao.objects.filter(Q(fk_conta=id_conta) | Q(nomeCompleto=nome_cliente))
        json_movimentacao = serializers.serialize("json", movimentacao_transferencia.all(), fields = ["transacao", "valor", "nomeCompleto", "data", "fk_conta"])
        return HttpResponse(json_movimentacao)
