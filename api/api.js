/* eslint-disable no-console */
const express = require('express');
const dotenv = require('dotenv');
const Debug = require('debug');
const route = require('./routes/index');

const app = express();

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).send('Property-Pro-Lite API');
});

route(app);

dotenv.config();

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server is listening at port %d', PORT);
});

// const debug = Debug('http');
// const { PORT = 5000 } = process.env; // setup PORT to be used
// app.listen(PORT, () => {
//   debug(`Server is running on PORT ${PORT}`);
// });

module.exports = app;
