# Projeto Fullstack: Agenda Virtual

Bem-vindas(os) ao meu primeiro projeto Fullstack!

Esse arquivo é a parte frontend de um projeto fullstack no qual será reazliado uma agenda virtual. Nessa agenda virtual, é possível se cadastrar e adicionar seus contatos.

## Tecnologias Utilizadas
* Linguagem: JavaScript
* Biblioteca React
* CSS

## Acesso
Para acessar basta realizar a clonagem do repositório e em seguida instalar as dependencias necessárias:

```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

```
yarn install
# ou
npm install
```

A execução da aplicação é feito por meio do:
```
npm run dev
```

## IMPORTANTE:
Para o projeto funcionar corretamente é necessário rodar a API do arquivo backend.

# Sistema de Gerenciamento de Contatos

## Funcionalidades

1. **Cadastro:**
   - Os usuários precisam se cadastrar no sistema fornecendo informações básicas.
   - Pode incluir campos como nome, e-mail, senha, etc.

2. **Login:**
   - Os usuários cadastrados podem fazer login no sistema usando suas credenciais.

3. **Página Interna do Usuário (Cliente):**
   - Após o login, os clientes têm acesso a uma página interna.
   - Nessa página, eles podem visualizar uma lista de seus contatos cadastrados.

4. **Manipulação de Contatos (Cliente):**
   - Os clientes podem adicionar novos contatos à sua lista.
   - Eles têm a opção de atualizar informações de contatos existentes.
   - Podem excluir contatos de sua lista.

5. **Visualização de Todos os Clientes (Administrador):**
   - Se o usuário tem privilégios de administrador, ele pode visualizar uma lista de todos os clientes cadastrados no sistema.

6. **Alteração de Dados Pessoais (Cliente):**
   - Os clientes têm a capacidade de alterar suas próprias informações pessoais.

7. **Visualização Apenas de Seus Contatos (Cliente):**
   - Os clientes podem visualizar apenas os contatos que eles adicionaram, mantendo a privacidade.

8. **Exclusão de Conta (Cliente):**
   - Os clientes podem optar por excluir permanentemente suas próprias contas.

<img src="/src/imagens/paginaPrincipal.png">
<img src="/src/imagens/register.png">
<img src="/src/imagens/internalPage.png">