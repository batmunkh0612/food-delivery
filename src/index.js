import bodyParser from "body-parser";
import express from "express";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/', (_, res) => {
    return res.status(200).send('server is running').end();
})

app.listen(port,() => {
    console.log(`Server is running http://localhost:${port}`)
})
