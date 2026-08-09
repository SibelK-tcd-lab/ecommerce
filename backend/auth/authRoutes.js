const express = require("express");
const crypto = require("crypto");

const router = express.Router();

// Geçici kullanıcı veritabanı
let users = [
  {
    id: 1,
    name: "Test User",
    email: "test@example.com",
    passwordHash: hashPassword("Test123!"),
    role_id: 2,
    store: null,
  },
];

// Token -> userId
const sessions = new Map();

// Şifre hash
function hashPassword(password) {
  return crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
}

// Token oluştur
function createToken() {
  return crypto.randomBytes(32).toString("hex");
}

// ===============================
// REGISTER
// POST /api/signup
// ===============================
router.post("/signup", (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role_id,
      store,
    } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = users.find(
      (user) => user.email === normalizedEmail
    );

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "This email is already registered.",
      });
    }

    const roleId = Number(role_id);

    if (![1, 2, 3].includes(roleId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role.",
      });
    }

    // Mağaza kullanıcısı
    if (roleId === 3) {
      if (
        !store ||
        !store.name ||
        !store.phone ||
        !store.tax_no ||
        !store.bank_account
      ) {
        return res.status(400).json({
          success: false,
          message: "Store information is required.",
        });
      }
    }

    const newUser = {
      id: users.length + 1,
      name: name.trim(),
      email: normalizedEmail,
      passwordHash: hashPassword(password),
      role_id: roleId,
      store: roleId === 3 ? store : null,
    };

    users.push(newUser);

    const token = createToken();

    sessions.set(token, newUser.id);

    res.status(201).json({
      success: true,
      message: "Registration successful.",
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role_id: newUser.role_id,
        store: newUser.store,
      },
    });
  } catch (error) {
    console.error("SIGNUP ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Registration failed.",
    });
  }
});

// ===============================
// LOGIN
// POST /api/login
// ===============================
router.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = users.find(
      (item) => item.email === normalizedEmail
    );

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const passwordHash = hashPassword(password);

    if (user.passwordHash !== passwordHash) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = createToken();

    sessions.set(token, user.id);

    res.json({
      success: true,
      message: "Login successful.",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role_id: user.role_id,
        store: user.store || null,
      },
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Login failed.",
    });
  }
});

// ===============================
// VERIFY
// GET /api/verify
// ===============================
router.get("/verify", (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authorization token is required.",
      });
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.substring(7)
      : authHeader;

    const userId = sessions.get(token);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token.",
      });
    }

    const user = users.find(
      (item) => item.id === userId
    );

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found.",
      });
    }

    res.json({
      success: true,
      id: user.id,
      name: user.name,
      email: user.email,
      role_id: user.role_id,
      store: user.store || null,
    });
  } catch (error) {
    console.error("VERIFY ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Verification failed.",
    });
  }
});

// ===============================
// LOGOUT
// POST /api/logout
// ===============================
router.post("/logout", (req, res) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.substring(7)
      : authHeader;

    sessions.delete(token);
  }

  res.json({
    success: true,
    message: "Logout successful.",
  });
});

module.exports = router;