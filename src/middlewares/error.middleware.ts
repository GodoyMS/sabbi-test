export function errorHandler(err, req, res, next) {
  if (err.statusCode) {
    // Custom error with statusCode
    return res.status(err.statusCode).json({ error: err.message });
  }

  // Fallback generic error
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
}
