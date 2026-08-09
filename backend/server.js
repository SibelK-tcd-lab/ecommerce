const express = require("express");
const cors = require("cors");
const productRoutes = require("./products/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Rotalar
app.use("/api/products", productRoutes);

// Roles Endpoint
app.get("/api/roles", (req, res) => {
  res.json([
    { id: 1, name: "Admin", code: "admin" },
    { id: 2, name: "Müşteri", code: "customer" },
    { id: 3, name: "Mağaza", code: "store" }
  ]);
});

// Auto-Login Verify Endpoint
app.get("/api/verify", (req, res) => {
  res.json({
    id: 1,
    name: "Test Kullanıcı",
    email: "test@example.com"
  });
});

// Test Endpoint
app.get("/", (req, res) => {
  res.json({ message: "Backend API çalışıyor" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend sunucusu ${PORT} portunda çalışıyor...`);
});