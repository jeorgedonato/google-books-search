import React, {useState} from 'react';
import './style.css';
import axios from 'axios';
import SearchResults from '../SearchResults';

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [bookResult, setBookResult] = useState([]);

  const handleInputChange = e => {
    setSearchInput(e.target.value)
  }

  const apiSearch = async () => {
    try {
      if(searchInput){
      const {data} = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=${process.env.REACT_APP_API_KEY}`);
        if(data){
          setBookResult(data.items);
          console.log(bookResult)
        }
      }
      
      
    } catch (error) {
      console.log(error)
    }
  };

  const handleSearch = async e => {
    e.preventDefault();
    apiSearch()
  };

  const handleKeyPress = e =>{
    if(e.keyCode === 13){
        apiSearch()
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
      <SearchResults books={bookResult} />
    </section>
    </>
  );
};

export default Search;