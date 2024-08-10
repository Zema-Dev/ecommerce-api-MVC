import express from "express";
import dotenv from "dotenv";
import ProductRouter from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import cartRoutes from "./routes/cartRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import orderRoutes from "./routes/orderRoutes";
import connectedDb from "./config/db";
import errorHandler from "./middleware/errorMiddleware";
import AdminRouter from "./routes/adminRoutes";

dotenv.config();

const app = express();

// Connexion à la base de données
connectedDb();

// Middleware pour parser le JSON
app.use(express.json());

// Définition des routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", ProductRouter);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/carts", cartRoutes);
app.use("/api/v1/payments", paymentRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/administrators", AdminRouter);

// Middleware de gestion des erreurs
app.use(errorHandler);

export default app;
