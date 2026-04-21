import dotenv from "dotenv";
import app from "./app.js";
import connectDb from "./db/Database.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

app.get("/instgram", (req, res) => {
  res.send("Instgram is running");
});

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("mongoDB connection error", error);
    process.exit(1);
  });
