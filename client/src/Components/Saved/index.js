import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import SavedResults from "../SavedResults";
import SavedContext from "../SavedContext";
import { toastr } from "react-redux-toastr";
import socketIOClient from "socket.io-client";
const socket = socketIOClient(
  `https://books-search0.herokuapp.com/`
);

const Saved = () => {
  // const isDeleted = useContext(SavedContext);
  const [bookResult, setBookResult] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("/api/books");
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

  const [handleDelete, setHandleDelete] = useState({
    deleteBtn: async (id) => {
      await axios.delete(`/api/books/${id}`);
      socket.on("bookDeleted", (data) => {
        toastr.error("Book Deleted", `A Book has been deleted.`);
      });
      fetchData();
    },
  });

  useEffect(() => {
    // console.log(isDeleted)
    fetchData();
  }, []);

  return (
    <>
      <SavedContext.Provider value={handleDelete}>
        <section>
          {bookResult ? <SavedResults books={bookResult} /> : ""}
        </section>
      </SavedContext.Provider>
    </>
  );
};

export default Saved;
