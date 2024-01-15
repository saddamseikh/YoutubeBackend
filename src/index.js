import dotenv from "dotenv";
import connectToDB from "././database/DbConnection.js";
dotenv.config({
  path: "./.env",
});
import { app } from "./app.js";

connectToDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port :${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connecton failed", err);
  });
