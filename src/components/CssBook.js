import Books from "./Books";
import React, {useEffect, useState} from "react";
import axios from 'axios';

function CssBook(props) {
    const [books, getBooks] =useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/books").then(response =>{
        getBooks(response.data)
        })
    }, [])
    return(
        <Books title={"CSS"} books={books.filter(el => {
            return el.type === "CSS";
        })}/>
    )
}

export default CssBook;