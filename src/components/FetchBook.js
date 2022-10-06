import React from "react";

function FetchBook({id, title, author, category, published, deletebooks}) {

  function handleDeleteBook(){
    fetch (`http://localhost:8001/books/${id}`, {
      method: "DELETE"
    })
    deletebooks(id);
  }

  return (
    <>
<div className="gridClass">

<div className="card column" style={{width: '980px', marginLeft:'230px', marginBottom:"20px"}}>
  <div className="card-body ">
    <h5 className="card-title">Book Title : {title}</h5>
    <p className="card-text">Author : {author}</p>
    <p className="card-text">Category : {category}</p>
    <p className="card-text">Published : {published}</p>
    <a href="https://www.imdb.com/list/ls056861724/" className="btn btn-primary">More...</a>

    <button onClick={handleDeleteBook} className="ui button">Delete</button>
  </div>
</div>
</div>
</>
  );
}

export default FetchBook;
