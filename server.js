const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { connectToDatabase } = require('./db');

const app = express();

app.use(express.json());

app.use(cors());

connectToDatabase();

app.use('/api', routes);

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
