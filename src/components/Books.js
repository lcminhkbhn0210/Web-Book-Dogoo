import BookItem from './BookItem';
import './Books.css'
function Books(props) {
    const clickDetailHandle = e => {
        
    }

    return(
        <div className="container">
            <div className="container__title">
                <div className="container__title--left">
                    <span>{`${props.title} BOOK`}</span>
                </div>
            </div>

            <div className="container__content">
                {props.books.map(book => {
                    return <BookItem clickDetail ={clickDetailHandle} key={book.id} book={book}/>
                })}
            </div>
        </div>
    )
}

export default Books;