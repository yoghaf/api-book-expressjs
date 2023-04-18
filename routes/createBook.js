const Joi = require("@hapi/joi");
const { nanoid } = require("nanoid");
const books = require("../data/books");

const createBookRoute = {
  method: "POST",
  path: "/books",
  handler: (request, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

    // Check if required fields are provided
    if (!name) {
      return h
        .response({
          status: "fail",
          message: "Gagal menambahkan buku. Mohon isi nama buku",
        })
        .code(400);
    }

    // Check if readPage is greater than pageCount
    if (readPage > pageCount) {
      return h
        .response({
          status: "fail",
          message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
        })
        .code(400);
    }

    const id = nanoid(10);

    const book = {
      id,
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      insertedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    books.push(book);

    return h
      .response({
        status: "success",
        message: "Buku berhasil ditambahkan",
        data: {
          bookId: id,
        },
      })
      .code(201);
  },
  options: {
    validate: {
      payload: Joi.object({
        name: Joi.string().required(),
        year: Joi.number().integer().min(1).required(),
        author: Joi.string().required(),
        summary: Joi.string().required(),
        publisher: Joi.string().required(),
        pageCount: Joi.number().integer().min(1).required(),
        readPage: Joi.number().integer().min(0).required(),
        reading: Joi.boolean().required(),
      }),
    },
  },
};

module.exports = createBookRoute;
