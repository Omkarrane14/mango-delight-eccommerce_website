import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/Connection.js";

// Import Routes
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import orderRoutes from "./routes/orderRoutes.js";
import reportRoutes from "./routes/sellerreportRoutes.js";
import adminRoutes from "./routes/AdminRoutes.js";

// Load environment variables
dotenv.config();

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize app
const app = express();

// Serve static files (uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Parse JSON request bodies
app.use(express.json());

// ✅ FIXED: Configure CORS to allow frontend domain
app.use(cors({
  origin: "https://mango-delight-eccommerce-website.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/seller", dashboardRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/salesreport", reportRoutes);
app.use("/api/admin", adminRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Server is running on Vercel.");
});

// Error handler middleware
app.use(errorMiddleware);

// ✅ Export Express app for Vercel
export default app;
