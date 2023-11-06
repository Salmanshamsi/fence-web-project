const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();


app.use(cors());
dotenv.config({path:"./config.env"});
app.use(express.json());
require("./db/connection")
app.use(require("./routes/route"));
const port = process.env.PORT;


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 
