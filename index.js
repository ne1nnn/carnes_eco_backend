const express = require("express");
const cors = require("cors");
const db = require("./db");
const productRoutes = require("./src/routes/product.routes");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(cors());
console.log(process.env.DB_URI);

app.use(express.json());

app.use("/", productRoutes);

const PORT = process.env.PORT || 4000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
