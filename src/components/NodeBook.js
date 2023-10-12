import Books from "./Books";
import React, {useEffect, useState} from "react";
import axios from 'axios';
function NodeBook() {
    const [books, getBooks] =useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/books").then(response =>{
        getBooks(response.data)
        })
    }, [])
    return(
        <Books title={"NODE"} books={books.filter(el => {
            return el.type === "Node";
        })}/>
    )
}
export default NodeBook;