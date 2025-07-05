import express from "express";
import router from "./routes/common-routes.js";
import cors from "cors"
export const app = express();


app.use(express.json());
app.use(cors({
    origin : "http://localhost:5173"
}))
const PORT = 5000;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server started at PORT : ${PORT}`);
});
