const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API SleepOS powered by ChatGPT!');
});

app.listen(port, () => {
  console.log(`API en ligne sur le port ${port}`);
});
