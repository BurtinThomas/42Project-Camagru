const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/register', (req, res) => {
  const formData = req.body;
  console.log('Données reçues :', formData);
  res.status(200).json({ message: 'Inscription réussie', data: formData });
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
