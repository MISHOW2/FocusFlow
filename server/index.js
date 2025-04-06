const express = require('express');
const app = express();

app.use(express.json());

// Mount the router at /auth
app.use('/auth', require('./routes/authRoutes.js'));

app.listen(5000, () => console.log("Listening on port 5000"));
