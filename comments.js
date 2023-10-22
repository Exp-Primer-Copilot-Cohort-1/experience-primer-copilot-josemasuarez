// Create Simple Web Server

// 1. Require Express
const express = require('express');
// 2. Create an instance of Express
const app = express();
// 3. Define a port to run the server
const PORT = 3000;
// 4. Define a route
app.get('/', (req, res) => {
    res.send('Hello World');
});
// 5. Start the server on the port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
