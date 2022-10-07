import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import About from "./About";
import Main from "./Main";
import NavLink from "./NavLink";
import PostForm from "./PostForm";

function App() {
  const [page, setPage] = useState("/")

  return (

    <div className="App" style={{
      backgroundImage: "url(" + require('../images/background.jpg').default + ")",
      backgroundSize: 'auto 3660px',
      backgroundRepeat: 'no-repeat'
    }} >
      <NavLink onChangePage = {setPage}/>
      <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/morebooks">
            <PostForm />
        </Route>
        <Route exact path="/">
            <Main />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
