const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.port || 6070;

app.use(cors());
app.use(express.json());

const userRoute = require('./routes/user');

app.use('/api/user', userRoute);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});