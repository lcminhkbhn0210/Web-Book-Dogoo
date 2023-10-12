function BookItem(props) {
  const onClickDetailHandle = (e) => {
    props.clickDetail(e.target.value);
  };
  return (
    <div className="container__content__item">
      <img src={"http://localhost:3000/Html_book--1.jpg"} alt="anh sach" />
      <strong className="book__title">{props.book.title}</strong>
      <p className="book__author">{props.book.author}</p>
      <button
        value={props.book.id}
        onClick={onClickDetailHandle}
        className="btn btn__book btn__detail"
      >
        Detail
      </button>
    </div>
  );
}

export default BookItem;
