const express = require("express");
const path = require("path");
const volleyball = require("volleyball");
const app = express();
const bodyParser = require("body-parser");

const router = require('./routes');
const db = require("./config/db");
const port = 3000;

app.use(volleyball);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//router
app.use("/api", router);
app.get("/*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./public", "index.html"));
  });


// conectando con la base de datos
db.sync({ force: false })
.then(() => {
  app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
  });
})
.catch(console.log);