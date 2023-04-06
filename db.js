const mongoose = require("mongoose");

const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión a la base de datos establecida");
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos:", err.message);
  });

module.exports = mongoose.connection;
