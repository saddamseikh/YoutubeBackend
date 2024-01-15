import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { errorMiddleware } from "./middlewares/error.middleware.js";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev"));
// Import all routes
import userRoutes from "./routes/user.routes.js";
app.use("/api/v1/users", userRoutes);
app.all("*", (req, res) => {
  res.status(404).send("OOPS!! 404 page not found");
});
app.use(errorMiddleware);

export { app };
