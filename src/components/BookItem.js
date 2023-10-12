function BookItem(props) {
    return(
        <div className="container__content__item">
            <img src="Html_book--1.jpg" alt="anh sach"/>
            <strong className='book__title'>{props.book.title}</strong>
            <p className='book__author'>{props.book.author}</p>
            <button className='btn btn__book btn__detail'>Detail</button>
        </div>
    )
}

export default BookItem;