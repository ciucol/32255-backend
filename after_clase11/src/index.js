const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const router = require('./router');

const port = 9000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

router(app);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
