import React from "react";
import FetchBook from "./FetchBook";

function booksList({
  books,
  deletebooks,
  setbooks,
  search,
}) {
  let listbook = "Load transaction...";

  if (books) {
    const tfilter = books.filter((book) => {
      return book.author
    });

    listbook = tfilter.map((book) => {
      return (
        <FetchBook
        book={books}
          setbooks={setbooks}
          key={book.id}
          published={book.published}
          title={book.title}
          author={book.author}
          category={book.category}
          id={book.id}
          deletebooks={deletebooks}
        />
      );
    });
  }

  return (
    <>
       <div className="row">
        {listbook}
        </div>


    </>
  );
}

export default booksList;
