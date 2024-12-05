const express = require('express');
const cors = require('cors');
const connection = require('./db'); // Conexão com o banco de dados

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// Rota inicial
app.get('/', (req, res) => {
  res.send('Servidor está funcionando!');
});

// Rota para cadastrar aluno
app.post('/api/cadastrarAluno', (req, res) => {
  const { nomeAluno, matricula, dataNascimento, emailAluno, cep, senhaAluno } = req.body;

  if (!nomeAluno || !matricula || !dataNascimento || !emailAluno || !cep || !senhaAluno) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const query = 'INSERT INTO alunos (nome, matricula, data_nascimento, email, cep, senha) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(query, [nomeAluno, matricula, dataNascimento, emailAluno, cep, senhaAluno], (err, results) => {
    if (err) {
      console.error('Erro ao salvar aluno:', err);
      return res.status(500).json({ message: 'Erro ao salvar aluno no banco de dados.' });
    }
    res.status(201).json({ message: 'Aluno cadastrado com sucesso!', id: results.insertId });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

