import React, { useState } from "react";
function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [published, setPublished] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const form = { title, author, category, published };
    fetch(`https://my-json-server.typicode.com/noela-murugi/hostDB/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => {
        setTitle("");
        setAuthor("");
        setCategory("");
        setPublished("");
      });
  }
  return (
    <div >
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      <p id="form-p" style={{color:"white", fontSize:"30px" ,fontWeight:"bold"}}>
      <u>ADD A BOOK</u>
        </p>
      <div className="formdiv">
        <form className="form-review" onSubmit={handleSubmit}>
          <br />
          <br />
          <label for="image-url" style={{color:"white", fontSize:"30px"}}>Title:</label> <br />
          <input className="imptext"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
          <br />
          <br />
          <label for="book-description" style={{color:"white", fontSize:"30px"}}>Book-Author:</label>
          <br />
          <br />
          <input className="imptext"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          ></input>
          <br />
          <br />
          <label for="book-category" style={{color:"white", fontSize:"30px"}}>Category:</label>
          <br />
          <br />
          <input
            type="text" className="imptext"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          ></input>
          <br />
          <br />
          <label for="book-published" style={{color:"white", fontSize:"30px"}}>Published:</label>
          <br />
          <br />
          <input
            type="text" className="imptext"
            value={published}
            onChange={(e) => setPublished(e.target.value)}
            required
          ></input>
          <br />
          <br />
          <br></br>
          <button style={{color:"black", fontSize:"25px"}} className="impsubmit">Add book</button>

        </form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
export default Form;
