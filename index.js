require("dotenv/config")
const express = require("express")
const { error } = require("node:console")
const fs = require("fs")

const bookRouter = require("./routes/book.routes.js")
const authorRoute = require("./routes/author.routes.js")

const app = express()
PORT = 8000


 //Middlewares

app.use(express.json())

//routes

app.use('/books', bookRouter)
app.use('/author' ,authorRoute)


app.listen(PORT , ()=>console.log(`server is running at port ${PORT}`))

