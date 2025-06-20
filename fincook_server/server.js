const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors())

app.get("/api/test_connection", (req,res)=> {
      res.status(200).json('Hello World from Node.js App!');

});
app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
})
