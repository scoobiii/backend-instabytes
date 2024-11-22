import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: "json" };
import express from "express";
import routes from "./src/routes/postsRoutes.js";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

// Construindo a URI com variáveis do .env
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/?retryWrites=true&w=majority&appName=${process.env.MONGO_APPNAME}`;

const app = express();
app.use(express.static("uploads"))
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando...");
});
