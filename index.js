const express = require("express");
const cors = require("cors");
const db = require("./db");
const productRoutes = require("./src/routes/product.routes");

const app = express();

// Habilitar CORS
app.use(cors());

// Habilitar el análisis del cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Conectar a la base de datos
db.on(
  "error",
  console.error.bind(console, "Error de conexión a la base de datos:")
);
db.once("open", () => console.log("Conexión a la base de datos establecida"));

// Utilizar las rutas de Product
app.use("/products", productRoutes);

// Puerto en el que el servidor escuchará las solicitudes
const PORT = process.env.PORT || 4000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
