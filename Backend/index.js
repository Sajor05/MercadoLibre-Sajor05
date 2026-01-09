import cors from "cors"
import path from "path";
import morgan from "morgan";
import express from "express"
import { fileURLToPath } from "url";
import routes from "./api/endPoints.js";
import cookieParser from "cookie-parser";
import { connection } from "./models/db.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"view")))
app.use(cors({
    origin: ["https://mercadolibre-sajor05.onrender.com"],
    methods: ["GET", "POST"],
    credentials:true
  })
);
app.use(cookieParser())
app.use(morgan("dev"))
app.use("/api", routes);
app.set("port", process.env.PORT || 4000);
connection()


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"view","control.html"));
});


app.listen(app.get("port"), () => {
  console.log(`Servidor escuchando el puerto ${app.get("port")}`);
});
