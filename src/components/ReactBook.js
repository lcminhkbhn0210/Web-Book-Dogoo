import Books from "./Books";
import React, {useEffect, useState} from "react";
import axios from 'axios';
function ReactBook() {
    const [books, getBooks] =useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/books").then(response =>{
        getBooks(response.data)
        })
    }, [])
    return(
        <Books title={"REACT"} books={books.filter(el => {
            return el.type === "React";
        })}/>
    )
}

export default ReactBook;