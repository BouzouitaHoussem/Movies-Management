const express = require("express");
const cors = require("cors");
const PORT = 8080;
const app = express();
const movieRouter=require('./Router/index')
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});
app.use('/movies',movieRouter)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
