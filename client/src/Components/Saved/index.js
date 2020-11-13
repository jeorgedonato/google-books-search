import React, {useEffect, useState} from 'react'
import './style.css';
import axios from 'axios';
import SavedResults from '../SavedResults'


const Saved = () => {

  const [bookResult, setBookResult] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('/api/books');
      setBookResult(data);
    };

    fetchData();
  },[bookResult]);
  // console.log(bookResult)
  return (
    <>
      <section>
        {bookResult ? <SavedResults books={bookResult} /> : ""} 
      </section>
    </>
  )
};


export default Saved;