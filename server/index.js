const express = require('express');
const favicon = require('serve-favicon');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Listening on PORT ${port}`));