const express = require("express");

const app = express();
const port = 8080;

app.use(express.json());
app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
})
