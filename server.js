const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '/dist')));
console.log(__dirname)
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/dist') });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening to Port ${PORT}....`);
});