from django.contrib import admin
from .models import *
# from django.contrib.auth.admin import ClienteDoBancoAdmin
# from .models import User

admin.site.register(Cliente)

# @admin.register(models.ClienteDoBanco)
# class ClienteDoBancoAdmin(admin.ModelAdmin):
#     list_display = ['nome', 'data_nascimento', 'cpf', 'numero_telefone', 'email', 'senha']
