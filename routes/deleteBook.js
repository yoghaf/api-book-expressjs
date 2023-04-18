// Import dependencies
const express = require("express");
const books = require("../data/books");
// Create router
const router = express.Router();

// Array to store books data

// Delete book by ID
router.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;

  // Find index of book in the array
  const bookIndex = books.findIndex((book) => book.id === bookId);

  // If book not found, send 404 response
  if (bookIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Buku gagal dihapus. Id tidak ditemukan",
    });
  }

  // Remove book from array
  books.splice(bookIndex, 1);

  res.status(200).json({
    status: "success",
    message: "Buku berhasil dihapus",
  });
});

module.exports = router;
