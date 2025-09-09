const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// CREATE - Criar usuário
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  const params = [name, email];
  db.run(sql, params, function(err) {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      id: this.lastID,
      name,
      email
    });
  });
});

// READ - Listar todos usuários
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      users: rows
    });
  });
});

// READ - Buscar usuário por id
app.get('/users/:id', (req, res) => {
  const sql = 'SELECT * FROM users WHERE id = ?';
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      user: row
    });
  });
});

// UPDATE - Atualizar usuário
app.put('/users/:id', (req, res) => {
  const { name, email } = req.body;
  const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  const params = [name, email, req.params.id];
  db.run(sql, params, function(err) {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      updatedID: req.params.id,
      name,
      email
    });
  });
});

// DELETE - Deletar usuário
app.delete('/users/:id', (req, res) => {
  const sql = 'DELETE FROM users WHERE id = ?';
  const params = [req.params.id];
  db.run(sql, params, function(err) {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({ deletedID: req.params.id });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});