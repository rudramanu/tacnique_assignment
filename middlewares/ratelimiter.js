const { rateLimit } = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 5,
  message: "Too many request from this IP, please try again after one minute",
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

module.exports = { apiLimiter };
