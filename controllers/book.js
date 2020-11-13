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

    const result= await newBook.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req,res) => {
  try {
    await db.Book.deleteOne({ _id : req.params.id});
    res.status(200).json("Saved Book deleted!");
  } catch (err) {
    res.status(400).json(err);
  }

});




module.exports = router;