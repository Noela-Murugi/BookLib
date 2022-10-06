import React, { useState } from "react";

function Form() {


  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [paragraph,setParagraph]  = useState([]);

  function nameSubmit  (e){
    e.preventDefault();
      if(firstName&&lastName){
        setFirst("")
        setLast("")
        setParagraph(()=>[firstName,lastName])
      }
  }

  return (
    <div>
        <br></br>
    <form onSubmit={nameSubmit}>
      <label style={{color:"white"}}>
        Name:
        <input
          value={firstName}
          name="firstName"

          onChange={(e) => {
             console.log(e.target.value);
            setFirst(e.target.value);
          }}
          type="text"
          autoComplete="off"
        />
      </label>
      <label style={{color:"white"}}>
        Book Title:
        <input
          value={lastName}
          name="lastName"
          onChange={(e) => {
             console.log(e.target.value);
            setLast(e.target.value);
          }}
          type="text"
          autoComplete="off"
        />
      </label>
      <button type="submit" >
        Submit
      </button>
    </form>

    {
      paragraph.map((paragraph)=><div>
        <p style={{color:"white", display:"block"}}>{paragraph}  </p>
      </div>)
    }
    </div>
  );
}
export default Form;
