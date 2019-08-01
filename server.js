const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

require('./api/contact')(app);
require('./api/blogSearch')(app);

app.use(express.static(path.join(__dirname, 'frontend/public')));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, './frontend/public', '404', 'index.html'), 404);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
