import express from "express";

const app = express();
app.use(express.json());

let filmes = [
  { id: 1, titulo: "O Poderoso Chefão", ano: 1972, genero: "Drama" },
  { id: 2, titulo: "Matrix", ano: 1999, genero: "Ficção Científica" }
];

let proximoId = 3;

// Questão 1 - GET /filmes (listar todos os filmes)
app.get("/filmes", (req, res) => {
  res.status(200).json(filmes);
});

// Questão 2 - GET /filmes/:id (buscar filme por ID)
app.get("/filmes/:id", (req, res) => {
  const id = Number(req.params.id);
  const filme = filmes.find((f) => f.id === id);

  if (!filme) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  res.status(200).json(filme);
});

// Questão 3 - POST /filmes (cadastrar novo filme)
app.post("/filmes", (req, res) => {
  const { titulo, ano, genero } = req.body;

  if (!titulo || !ano || !genero) {
    return res
      .status(400)
      .json({ erro: "Todos os campos (titulo, ano, genero) são obrigatórios" });
  }

  const novoFilme = { id: proximoId, titulo, ano, genero };
  proximoId++;
  filmes.push(novoFilme);

  res.status(201).json(novoFilme);
});

// Questão 4 - PUT /filmes/:id (atualizar filme existente)
app.put("/filmes/:id", (req, res) => {
  const id = Number(req.params.id);
  const filme = filmes.find((f) => f.id === id);

  if (!filme) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  const { titulo, ano, genero } = req.body;

  if (!titulo || !ano || !genero) {
    return res
      .status(400)
      .json({ erro: "Todos os campos (titulo, ano, genero) são obrigatórios" });
  }

  filme.titulo = titulo;
  filme.ano = ano;
  filme.genero = genero;

  res.status(200).json(filme);
});

// Questão 5 - DELETE /filmes/:id (remover filme do catálogo)
app.delete("/filmes/:id", (req, res) => {
  const id = Number(req.params.id);
  const posicao = filmes.findIndex((f) => f.id === id);

  if (posicao === -1) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  filmes.splice(posicao, 1);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
