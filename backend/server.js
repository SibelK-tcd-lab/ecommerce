const express = require("express");
const cors = require("cors");

const productRoutes = require("./products/productRoutes");
const authRoutes = require("./auth/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ===============================
// PRODUCTS
// ===============================
app.use("/api/products", productRoutes);

// ===============================
// AUTH
// ===============================
app.use("/api", authRoutes);

// ===============================
// ROLES
// ===============================
app.get("/api/roles", (req, res) => {
  res.json([
    { id: 1, name: "Admin", code: "admin" },
    { id: 2, name: "Müşteri", code: "customer" },
    { id: 3, name: "Mağaza", code: "store" },
  ]);
});

// ===============================
// TEST
// ===============================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend API çalışıyor",
  });
});

// ===============================
// SERVER
// ===============================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend ${PORT} portunda çalışıyor`);
});