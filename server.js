// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");

// Create express app
const app = express();

// Set port
const port = 9000;

// Middleware for parsing request body
app.use(bodyParser.json());

// Load routes
const createBookRoutes = require("./routes/createBook");
const deleteBookRoutes = require("./routes/deleteBook");
const getBooksRoutes = require("./routes/getBooks");
const getBookByIdRoutes = require("./routes/getBookbyId");
const updateBookRoutes = require("./routes/updateBook");
// Use routes
app.use(createBookRoutes); // Set createBookRoutes as middleware for /books endpoint
app.use(getBooksRoutes); // Set getBooksRoutes as middleware for /books endpoint
app.use(updateBookRoutes); // Set updateBookRoutes as middleware for /books endpoint
app.use(deleteBookRoutes); // Set deleteBookRoutes as middleware for /books endpoint
app.use(getBookByIdRoutes); // Set getBookByIdRoutes as middleware for /books endpoint
// Start server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
