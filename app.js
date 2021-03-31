const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = require('./config/keys').mongoURI;
const data = require('./routes/api/data');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/data', data)
app.get('/', (req, res) => res.send("hello world"));

app.listen(port, () => console.log(`Server is running on port ${port}`));

