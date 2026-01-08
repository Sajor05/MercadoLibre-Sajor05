import express from "express"
import cors from "cors"
import morgan from "morgan";
import path from "path";
import cookieParser from "cookie-parser";
import { connection } from "./models/db.js";
import routes from "./api/endPoints.js"
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { fileURLToPath } from "url";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"view")))
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
  res.sendFile(path.join(__dirname,"view","control.html"));
});


app.listen(app.get("port"), () => {
  console.log(`Servidor escuchando el puerto ${app.get("port")}`);
});
