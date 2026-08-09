const express = require("express");
const router = express.Router();

// Test için sahte (mock) ürün verisi
let products = [
  {
    id: 1,
    name: "Kablosuz Kulaklık",
    price: 1250,
    stock: 15,
    description: "Yüksek ses kaliteli gürültü engelleyici kulaklık",
    category: "Elektronik",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Akıllı Saat",
    price: 2400,
    stock: 8,
    description: "Nabız ve adım ölçer özellikli akıllı saat",
    category: "Elektronik",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Mekanik Klavye",
    price: 850,
    stock: 20,
    description: "RGB aydınlatmalı oyuncu klavyesi",
    category: "Aksesuar",
    image: "https://via.placeholder.com/150"
  }
];

// 1. Tüm Ürünleri Getir (GET /api/products)
router.get("/", (req, res) => {
  res.json({
    success: true,
    count: products.length,
    data: products
  });
});

// 2. Tek Bir Ürünü ID'ye Göre Getir (GET /api/products/:id)
router.get("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Ürün bulunamadı"
    });
  }

  res.json({
    success: true,
    data: product
  });
});

// 3. Yeni Ürün Ekle (POST /api/products)
router.post("/", (req, res) => {
  const { name, price, stock, description, category, image } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      success: false,
      message: "Lütfen ürün adı ve fiyatını giriniz"
    });
  }

  const newProduct = {
    id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    name,
    price: Number(price),
    stock: stock ? Number(stock) : 0,
    description: description || "",
    category: category || "Genel",
    image: image || "https://via.placeholder.com/150"
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: "Ürün başarıyla eklendi",
    data: newProduct
  });
});

// 4. Ürün Güncelle (PUT /api/products/:id)
router.put("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Güncellenecek ürün bulunamadı"
    });
  }

  products[index] = {
    ...products[index],
    ...req.body,
    id: productId // ID değişmesini engelliyoruz
  };

  res.json({
    success: true,
    message: "Ürün güncellendi",
    data: products[index]
  });
});

// 5. Ürün Sil (DELETE /api/products/:id)
router.delete("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Silinecek ürün bulunamadı"
    });
  }

  const deletedProduct = products.splice(index, 1);

  res.json({
    success: true,
    message: "Ürün silindi",
    data: deletedProduct[0]
  });
});

module.exports = router;