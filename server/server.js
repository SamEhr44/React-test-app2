const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '..', 'client/public/index.html');

const app = express(),
      bodyParser = require("body-parser");
      port = process.env.PORT || 3080;
app.timeout = 0;
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
   res.sendFile(publicPath);
});
app.get('/', (req,res) => {
   res.send(`<h1>API Running on the port ${port}</h1>`);
 });
app.listen(port, () => {
   console.log('Server is up! ${port}');
   console.log(port);
});
