import React,{useState} from "react";
import Books from "./Books";
import NavPart from "./NavPart";
import Form from "./Form";
import Footer from "./Footer";


export default function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);

  };

  return (

    <div style={{
      backgroundImage: "url(" + require('../images/background.jpg').default + ")",
      backgroundSize: 'auto 4260px',
      backgroundRepeat: 'no-repeat',
    }}>
      {/* <div className="ui raised segment" > */}

      <div className="ui segment brown inverted">

        <h2>Welcome To BookLib</h2>
      </div>
      <button onClick={handleClick} style={{
                fontSize:"20px",
                margin:"30px",
                marginBottom:"-40px",
                alignItems:"left",
                backgroundColor:"yellow",
                cursor: "pointer",
            }}>Borrow a  Book</button>

        {isShown && (
          <div>
            <h2>
            <Form />
            </h2>
          </div>
        )}
        {isShown }
      <NavPart />

      <br></br><br></br>
       <Books />
      <Footer />
    {/* </div> */}
   </div>
  );
}

