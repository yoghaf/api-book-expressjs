// Import dependencies
const express = require("express");
const books = require("../data/books");
// Create router
const router = express.Router();

// Array to store books data

// Get all books
router.get("/books", (req, res) => {
  // Check if there are any books
  if (books.length === 0) {
    return res.status(200).json({
      status: "success",
      data: {
        books: [],
      },
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      books: books.map((book) => {
        // Filter out unnecessary properties
        const { id, name, publisher } = book;
        return { id, name, publisher };
      }),
    },
  });
});

module.exports = router;
