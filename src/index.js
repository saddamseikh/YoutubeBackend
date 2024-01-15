import dotenv from "dotenv";
import connectToDB from "././database/DbConnection.js";
dotenv.config({
  path: "./.env",
});

connectToDB();
