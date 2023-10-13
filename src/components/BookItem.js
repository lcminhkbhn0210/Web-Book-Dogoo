function BookItem(props) {
  const onClickDetailHandle = (e) => {
    props.clickDetail(e.target.value);
  };
  const convertString = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  return (
    <div className="container__content__item">
      <img src={`http://localhost:3000/${convertString(props.book.type)}_book--${props.book.id>=10 ? `${props.book.id % 10 + 1}` : props.book.id}.jpg`} alt="anh sach" />
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
