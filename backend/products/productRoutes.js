const express = require("express");
const router = express.Router();

// Frontend'deki gerçek ürünler
let products = [
  {
    id: 1,
    title: "Knitwear Sweater",
    dept: "Semi Casual",
    img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    description:
      "Premium knitwear designed for a sophisticated yet relaxed look. Made with high-quality yarn for durability and comfort.",
  },
  {
    id: 2,
    title: "Hooded Sports Wear",
    dept: "Hoodie Style",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    description:
      "Athletic comfort meets street fashion in this durable hooded sportswear. Perfect for outdoor activities or casual gym sessions.",
  },
  {
    id: 3,
    title: "Classic Leather Jacket",
    dept: "Casual",
    img: "https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    description:
      "Iconic leather jacket silhouette for a timeless and bold appearance.",
  },
  {
    id: 4,
    title: "Essential T-Shirt",
    dept: "Casual",
    img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    description:
      "Everyday comfort with high-quality cotton fabric for ultimate breathability.",
  },
  {
    id: 5,
    title: "Oxford Dress Shirt",
    dept: "Casual",
    img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    description:
      "Sharp and versatile dress shirt, perfect for professional and social events.",
  },
  {
    id: 6,
    title: "Structured Blazer",
    dept: "Casual",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    description:
      "Modern tailored blazer that defines elegance in formal wear.",
  },
  {
    id: 7,
    title: "Vintage Blazer Jacket",
    dept: "Semi Formal",
    img: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    description:
      "Classic semi formal piece with a vintage texture for a distinguished look.",
  },
  {
    id: 8,
    title: "Slim Fit Shirt",
    dept: "Semi Casual",
    img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    description:
      "Modern slim fit design, offering a sharp silhouette for the modern man.",
  },
  {
    id: 9,
    title: "Graphic T-Shirt",
    dept: "Casual",
    img: "https://images.pexels.com/photos/704977/pexels-photo-704977.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: "$25.00",
    newPrice: "$18.00",
    description:
      "Artistic and expressive graphic tee for a relaxed street vibe.",
  },
  {
    id: 10,
    title: "Heavyweight Sweater",
    dept: "Casual",
    img: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: "$30.48",
    newPrice: "$22.48",
    description:
      "Durable and warm heavyweight sweater for cold weather comfort.",
  },
  {
    id: 11,
    title: "Padded Winter Jacket",
    dept: "Semi Casual",
    img: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: "$20.00",
    newPrice: "$15.00",
    description:
      "Technical winter jacket providing superior warmth and clean aesthetics.",
  },
  {
    id: 12,
    title: "Denim Trucker Jacket",
    dept: "Casual",
    img: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=800",
    oldPrice: "$12.48",
    newPrice: "$9.48",
    description:
      "Authentic denim jacket, the perfect outer layer for any casual outfit.",
  },
];

// 1. Tüm ürünleri getir
// GET /api/products
router.get("/", (req, res) => {
  res.json({
    success: true,
    count: products.length,
    data: products,
  });
});

// 2. Tek ürünü ID'ye göre getir
// GET /api/products/:id
router.get("/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Ürün bulunamadı",
    });
  }

  res.json({
    success: true,
    data: product,
  });
});

// 3. Yeni ürün ekle
// POST /api/products
router.post("/", (req, res) => {
  const {
    title,
    dept,
    img,
    oldPrice,
    newPrice,
    description,
  } = req.body;

  if (!title || !newPrice) {
    return res.status(400).json({
      success: false,
      message: "Lütfen ürün adı ve yeni fiyat bilgisini giriniz",
    });
  }

  const newProduct = {
    id: products.length > 0
      ? products[products.length - 1].id + 1
      : 1,
    title,
    dept: dept || "Casual",
    img: img || "",
    oldPrice: oldPrice || "",
    newPrice,
    description: description || "",
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: "Ürün başarıyla eklendi",
    data: newProduct,
  });
});

// 4. Ürün güncelle
// PUT /api/products/:id
router.put("/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);

  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Güncellenecek ürün bulunamadı",
    });
  }

  products[index] = {
    ...products[index],
    ...req.body,
    id: productId,
  };

  res.json({
    success: true,
    message: "Ürün güncellendi",
    data: products[index],
  });
});

// 5. Ürün sil
// DELETE /api/products/:id
router.delete("/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);

  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Silinecek ürün bulunamadı",
    });
  }

  const deletedProduct = products.splice(index, 1);

  res.json({
    success: true,
    message: "Ürün silindi",
    data: deletedProduct[0],
  });
});

module.exports = router;