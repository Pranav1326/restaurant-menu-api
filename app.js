const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.port || 7080;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api/images', express.static('public/images'));

const db = require('./utils/db');

const userRoute = require('./routes/user');
const categoryRoute = require('./routes/category');
const itemRoute = require('./routes/item');

app.use('/api/user', userRoute);
app.use('/api/category', categoryRoute);
app.use('/api/item', itemRoute);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});