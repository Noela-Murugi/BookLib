import React, { useState, useEffect } from "react";
import MoreBooks from "./MoreBooks.js";
import Search from "./Search";

function Books() {
  const [books, setbooks] = useState([]);
  const [copy, setCopy] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/books")
      .then((response) => response.json())
      .then((data) => {
        setCopy(data)
        setbooks(data)});
  }, []);
  console.log(books);

  function deleteTransact(id) {
    const update = books.filter((book) => book.id !== id);
    setbooks(update);
  }

  function handleSearch(event){
    let search = event.target.value.toLowerCase()

    setbooks(copy.filter(val=>val.author.toLowerCase().includes(search)))
    console.log(handleSearch)
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <br></br>
      <MoreBooks
        books={books}
        deletebooks={deleteTransact}
      />
    </div>
  );
}

export default Books;
