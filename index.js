const express = require("express");
const cors = require("cors");
const db = require("./db");
const productRoutes = require("./src/routes/product.routes");
const morgan = require("morgan");
require("dotenv").config();
const multer = require("multer");

const app = express();





//Middlewares

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());


//Routes
app.use("/", productRoutes);

//config sv
const PORT = process.env.PORT || 4000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
