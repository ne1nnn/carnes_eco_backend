const express = require("express");
const cors = require("cors");
const db = require("./db");
const productRoutes = require("./src/routes/product.routes");
const morgan = require("morgan");
const imageRoutes = require("./src/routes/images.routes");
require("dotenv").config();

const app = express();

<<<<<<< HEAD
=======




>>>>>>> 80f368a5397a14ee73bb24811d063c16d2c3cf99
//Middlewares

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
<<<<<<< HEAD
=======

>>>>>>> 80f368a5397a14ee73bb24811d063c16d2c3cf99

//Routes
app.use("/", productRoutes);
app.use("/", imageRoutes);

//config sv
const PORT = process.env.PORT || 4000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
