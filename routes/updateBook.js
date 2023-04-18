// Import dependencies
const express = require("express");
const books = require("../data/books");
// Create router
const router = express.Router();

// Array to store books data

// Update book by ID
router.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.body;

  // Find book by ID in the array
  const book = books.find((book) => book.id === bookId);

  // If book not found, send 404 response
  if (!book) {
    return res.status(404).json({
      status: "fail",
      message: "Gagal memperbarui buku. Id tidak ditemukan",
    });
  }

  // Validate request body
  if (!name) {
    return res.status(400).json({
      status: "fail",
      message: "Gagal memperbarui buku. Mohon isi nama buku",
    });
  }

  if (readPage > pageCount) {
    return res.status(400).json({
      status: "fail",
      message: "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
    });
  }

  // Update book data
  book.name = name;
  book.year = year;
  book.author = author;
  book.summary = summary;
  book.publisher = publisher;
  book.pageCount = pageCount;
  book.readPage = readPage;
  book.reading = reading;
  book.updatedAt = new Date().toISOString();

  res.status(200).json({
    status: "success",
    message: "Buku berhasil diperbarui",
  });
});

module.exports = router;
