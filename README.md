# CRUD Básico com Node.js, Express e SQLite

Este é um projeto simples de CRUD (Create, Read, Update, Delete) usando Node.js, Express e SQLite como banco de dados.

## Funcionalidades

- Criar usuário (POST /users)
- Listar todos usuários (GET /users)
- Buscar usuário por ID (GET /users/:id)
- Atualizar usuário (PUT /users/:id)
- Deletar usuário (DELETE /users/:id)

## Como rodar

1. Clone o repositório
2. Rode `npm install` para instalar as dependências
3. Rode `node index.js` para iniciar o servidor
4. Acesse `http://localhost:3000`

## Exemplo de requisição para criar usuário

```bash
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"João","email":"joao@example.com"}'
