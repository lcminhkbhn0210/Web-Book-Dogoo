import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BookDetail.css";

function BookDetail() {
  const { id } = useParams();

  const [book, getBook] = useState("");
  const [content, getContent] = useState("");

  const convertString = (string) =>{
    if(string === undefined) return;
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  useEffect(() => {
    axios.get("http://localhost:3001/books").then((response) => {
      getBook(response.data[id - 1]);
    });
  },[id]);

  useEffect(() => {
    axios.get("../../content.txt").then((response) => {
      getContent(response.data);
    });
  },[]);
  return (
    <React.Fragment>
      <div className="container__book--detail">
        <div className="container_book_item--detail">
          <img src={`../../${convertString(book.type)}_book--${book.id>=10 ? `${book.id % 10 + 1}` : book.id}.jpg`} alt="Anh" />
        </div>
        <div className="container_book_item--detail">
          <strong className="title">{book.title}</strong>
          <p className="author">{book.author}</p>
          <p className="content">{content}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BookDetail;
