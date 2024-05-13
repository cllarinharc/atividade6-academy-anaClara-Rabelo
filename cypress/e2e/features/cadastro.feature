#encoding: UTF-8
#language: pt

Funcionalidade: Criar usuário
Como um usuário do sistema
Desejo ser capaz de criar novos registros de usuário
Para que possa gerenciar e acessar suas informações posteriormente

Contexto: Acessar a tela de cadastrar
Dado que acessei a tela de cadastro

Cenário: Cadastro de usuario com sucesso
Quando informo um nome válido
E informo um email válido
E confirmar a operação
Então o usuario devera ser cadastrado no sistema

Cenário: Tentar registrar um novo usuário sem o email
Quando informo um nome válido
E tentar cadastrar um novo usuário com email vazio
E confirmar a operação
Então visualizo a mensagem de erro no email

Cenário: Tentar registrar um novo usuário sem o nome
Quando tentar cadastrar um usuário com campo nome vazio
E confirmar a operação
Então visualizo a mensagem de erro no nome vazio

Cenário: Tentar registrar um usuário com mais de 100 caracteres no nome
Quando informo um nome com 100 caracteres
| nome | anaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaana |
E informo um email válido
E confirmar a operação
Então visualizo a mensagem de erro de caracteres do nome

Cenário: Tentar registrar um usuário com mais de 60 caracteres no email
Quando informo um nome válido
E informo um email com 60 caracteres
| email | anaanaanaanaanaanaa@naanaanaanaanaanaanaanaanaanaanaanaanaana |
E confirmar a operação
Então visualizo a mensagem de erro de caracteres no email

Cenário: Tentar registrar um usuário com menos de 4 caracteres no nome
Quando informo um nome com menos de 4 caracteres
| nome | ana |
E informo um email válido
E confirmar a operação
Então visualizo a mensagem de erro de limite minimo caracteres 

Cenário: Tentar registrar um novo usuário com nome com símbolos
Quando informo um nome com simbolo
| nome | !@#$% |
E informo um email válido
E confirmar a operação
Então visualizo a mensagem de erro no formato do nome