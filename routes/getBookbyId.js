// Import dependencies
const express = require("express");
const books = require("../data/books");
// Create router
const router = express.Router();

// Array to store books data

// Get book by ID
router.get("/books/:id", (req, res) => {
  const bookId = req.params.id;

  // Find book by ID in the array
  const book = books.find((book) => book.id === bookId);

  // If book not found, send 404 response
  if (!book) {
    return res.status(404).json({
      status: "fail",
      message: "Buku tidak ditemukan",
    });
  }

  // Filter out unnecessary properties
  const { id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt } = book;

  res.status(200).json({
    status: "success",
    data: {
      book: {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        insertedAt,
        updatedAt,
      },
    },
  });
});

module.exports = router;
