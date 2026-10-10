# OAT 1 (Parte B) — API RESTful CRUD com Express

**Disciplina:** Desenvolvimento de APIs — 2026.2
**Curso:** Sistemas de Informação (Noturno)
**Docente:** Prof. Ramon da Paixão Muricy
**Discente:** João Paulo de Oliveira Carneiro
**Centro Universitário:** UNEX

Implementação da API RESTful de Catálogo de Filmes da **UnexFlix**, usando Node.js, Express e um array em memória como persistência temporária. Os dados voltam ao estado inicial sempre que o servidor é reiniciado.

## 📁 Estrutura do projeto

```
oat1-parte-b-api-unexflix/
├── README.md
└── src/
    └── unexflix.js      # servidor Express com as 5 rotas do CRUD
```

## ▶️ Como executar

Requer [Node.js](https://nodejs.org/) instalado. Como o repositório contém apenas o código, é preciso criar o `package.json` com ES Modules e instalar o Express.

**1. Dentro da pasta do projeto, criar o package.json com ES Modules:**
```bash
npm init -y
npm pkg set type=module
```

**2. Instalar o Express:**
```bash
npm install express
```

**3. Iniciar o servidor:**
```bash
node src/unexflix.js
```

O servidor sobe em `http://localhost:3000`.

## 📋 Lista de questões

| # | Questão | Método | Endpoint | Sucesso | Erro | Arquivo |
|---|---------|--------|----------|---------|------|---------|
| 1 | Listar todos os filmes | GET | `/filmes` | 200 | — | [src/unexflix.js](src/unexflix.js) |
| 2 | Buscar filme por ID | GET | `/filmes/:id` | 200 | 404 | [src/unexflix.js](src/unexflix.js) |
| 3 | Cadastrar novo filme | POST | `/filmes` | 201 | 400 | [src/unexflix.js](src/unexflix.js) |
| 4 | Atualizar filme existente | PUT | `/filmes/:id` | 200 | 404 / 400 | [src/unexflix.js](src/unexflix.js) |
| 5 | Remover filme do catálogo | DELETE | `/filmes/:id` | 204 | 404 | [src/unexflix.js](src/unexflix.js) |

## ⚠️ Respostas de erro

**404 Not Found** — ID inexistente:
```json
{ "erro": "Filme não encontrado" }
```

**400 Bad Request** — campo ausente ou vazio no POST ou PUT:
```json
{ "erro": "Todos os campos (titulo, ano, genero) são obrigatórios" }
```

## 🧪 Exemplo de body (POST e PUT)

```json
{
  "titulo": "Interestelar",
  "ano": 2014,
  "genero": "Ficção Científica"
}
```

## 🧠 Conceitos aplicados

Node.js com ES Modules (`"type": "module"`), framework Express, middleware `express.json()`, rotas HTTP (GET, POST, PUT, DELETE), parâmetros de rota (`req.params`), corpo da requisição (`req.body`), códigos de status HTTP (200, 201, 204, 400, 404), desestruturação de objetos e métodos de array (`find`, `findIndex`, `push`, `splice`).
