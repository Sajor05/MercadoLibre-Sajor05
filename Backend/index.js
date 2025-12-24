import express from "express"
import cors from "cors"
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { connection } from "./models/db.js";
import routes from "./api/endPoints.js"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials:true
  })
);
app.use(cookieParser())
app.use(morgan("dev"))
app.use("/api", routes);
app.set("port", 4000);
connection()


app.get("/", (req, res) => {
  res.send("Hola mundo");
});


app.listen(app.get("port"), () => {
  console.log(`Servidor escuchando el puerto ${app.get("port")}`);
});
