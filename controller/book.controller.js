const {BOOKS} = require("../models/book")

exports.getAllBooks = function(req,res){
    res.json(BOOKS);
}
exports.getBookbyID = function(req,res){
     const id = parseInt(req.params.id)
    if(isNaN(id)) return res.status(404).json({error: ` id  must be an integer`}) 
    const book = BOOKS.find(e=> e.id == id)

    if(!book) return res.status(404).json({ error: ` book with id ${id} not exist`})
    return res.json(book)
}

exports.createBook = function(req ,res){
     const{ title, author} = req.body
    if(!title || title==='')
        return res.status(400).json({error:'title is required'})
    if(!author || author==='')
        return res.status(400).json({error:'author is required'})

    const id = BOOKS.length + 1
    const book ={id , title , author}
    BOOKS.push(book)
    return res.status(201).json({message: `Book created successfully `, id})
}

exports.deleteBook = function(req,res){
    const id = parseInt(req.params.id)

    if(isNaN(id)) return res.status(400).json({error: ` id  must be an integer`}) 
    
    const IndexFind = BOOKS.findIndex(e=> e.id ===id)
    if(IndexFind <0) return res.status(400).json({error: `does not exist `})
    BOOKS.splice(IndexFind,1)
    return res.status(200).json({message:` BOOKS deleted`})
}