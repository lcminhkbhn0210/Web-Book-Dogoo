import BookItem from "./BookItem";
import "./Books.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Books(props) {
  const navigator = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const clickDetailHandle = (data) => {
    navigator(`/books/${data}`);
  };

  const renderButton = () => {
    {
      let html = [];
      for (let i = 0; i < Math.ceil(props.books.length / itemsPerPage); i++) {
        html.push(
          <button
            onClick={() => changePage(i + 1)}
            key={i}
            value={i + 1}
            className="btn__pagination"
          >
            {i + 1}
          </button>
        );
      }
      return html;
    }
  };

  const currentBooks = props.books.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <div className="container__title">
        <div className="container__title--left">
          <span>{`${props.title} BOOK`}</span>
        </div>
      </div>

      <div className="container__content">
        {currentBooks.map((book) => {
          return (
            <BookItem
              clickDetail={clickDetailHandle}
              key={book.id}
              book={book}
            />
          );
        })}
      </div>
      <div className="container__pagination">{renderButton()}</div>
    </div>
  );
}

export default Books;
