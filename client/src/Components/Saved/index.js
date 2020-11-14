import React, {useEffect, useState, useContext} from 'react'
import './style.css';
import axios from 'axios';
import SavedResults from '../SavedResults';
import SavedContext from '../SavedContext';

const Saved = () => {
  // const isDeleted = useContext(SavedContext);
  const [bookResult, setBookResult] = useState([]);
  const fetchData = async () => {
      const {data} = await axios.get('/api/books');
      // if(bookResult){
      setBookResult(data);
      // }
  };

  //  const handleDelete = async id => {
  //   // e.preventDefault();
  //   // const id = e.target.dataset.id;
  //   await axios.delete(`/api/books/${id}`);
  //   fetchData()
  // };

  const [handleDelete,setHandleDelete] = useState({
    deleteBtn : async id => { await axios.delete(`/api/books/${id}`);  fetchData()}
  })

  useEffect(() => {
    // console.log(isDeleted)
    fetchData();
  },[]);

  return (
    <>
    <SavedContext.Provider value={handleDelete}>
        <section>
          {bookResult ? <SavedResults books={bookResult} /> : ""} 
        </section>
    </SavedContext.Provider>
    </>
  )
};


export default Saved;