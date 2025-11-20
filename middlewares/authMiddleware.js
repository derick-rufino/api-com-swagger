const jwt = require("jsonwebtoken");

// Use uma variável de ambiente para o segredo em produção
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ error: "Token ausente" });

  const [scheme, token] = authHeader.split(" ");
  if (scheme !== "Bearer" || !token)
    return res.status(401).json({ error: "Formato inválido" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // guarda os dados do usuário no request
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido ou expirado" });
  }
}

module.exports = authMiddleware;
