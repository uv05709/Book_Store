const express = require("express")
const controller = require("../controller/book.controller")
const router = express.Router()

router.get('/' , controller.getAllBooks)

router.get('/:id' , controller.getBookbyID)

router.post('/',controller.createBook)

router.delete('/:id',controller.deleteBook)

module.exports = router