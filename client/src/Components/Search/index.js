import React, {useState} from 'react';
import './style.css';
import axios from 'axios';
import SearchResults from '../SearchResults';

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [bookResult, setBookResult] = useState(null);

  const handleInputChange = e => {
    setSearchInput(e.target.value)
  }

  const apiSearch = async () => {
    
    try {
      if(searchInput){
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=${process.env.REACT_APP_API_KEY}`);
      // console.log(res)
        if(res.data.hasOwnProperty("items")){
          setBookResult(res.data.items);
          // console.log(bookResult)
        }else{
          setBookResult([]);
        }
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleSearch = async e => {
    e.preventDefault();
    apiSearch();
  };

  const handleKeyPress = e =>{
    if(e.keyCode === 13){
        apiSearch();
    }
   }

  return (
    <>
    <section>
      <div className="search-area">
        <span>Book Search</span>
        <input type="text" name="book-search" value={searchInput} onKeyDown={handleKeyPress} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
     {bookResult ? <SearchResults books={bookResult} /> : ""} 
    </section>
    </>
  );
};

export default Search;