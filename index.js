const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname, 'docs')))

app.get('*', (_, res) =>
  res.sendFile(path.join(__dirname, 'docs', 'index.html'))
);

app.listen(port, () => console.log(`Ready on port ${port}`));