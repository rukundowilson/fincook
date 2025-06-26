import express from "express";
import cors from "cors";
import db from "./src/config/db.js";
import quote from "./src/routes/quote.js"

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors())

app.use("/quote",quote);

// test db life cycle
app.get("/api/db_connection", async (req, res) => {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS solution');
    res.status(200).json({ message: 'DB connected!', solution: rows[0].solution });
  } catch (error) {
    console.error('DB connection error:', error);
    res.status(500).json({ message: 'Database connection failed', error: error.message });
  }
});


app.get("/api/test_connection", (req,res)=> {
      res.status(200).json('Hello World from Node.js App!');

});
app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
})
