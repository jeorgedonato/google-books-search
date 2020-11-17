const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req ,res) => {
  try { 
    const books = await db.Book.find({}).sort({ created_date: -1 });
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req,res) => {
  try {
    const {title,authors,image,description,link} = req.body;

    const newBook = new db.Book({
      title,
      authors : authors === "No Author Provided" ? [""] : authors,
      image,
      description,
      link
    });
    
    const result = await newBook.save();
    // console.log(result)
    res.io.emit("bookSaved", result.title);
    res.send('Book Saved')
    // res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req,res) => {
  try {
    const result = await db.Book.deleteOne({ _id : req.params.id});
    res.io.emit("bookDeleted", result.title);
    res.send('Book Deleted')
  } catch (err) {
    res.status(400).json(err);
  }

});




module.exports = router;